const fs = require('fs');
const aDir = `${__dirname}`
const dir = `${aDir}/explorer-output/`;
const apiDoc = buildApiDocBase()

const files = fs.readdirSync(dir)
files.forEach(x => {
    console.log(`Working on : ${x}`);
    const fileObj = JSON.parse(fs.readFileSync(`${dir}${x}`));
    let pathName = fileObj?.UrlTemplate?.replace("api/FHIR", "").replace("//", "/")
    if (!pathName.startsWith("/")) {
        pathName = `/${pathName}`;
    }
    if (pathName.includes('?')) {
        pathName = pathName.substr(0, pathName.indexOf('?'));
    }
    console.log(`Path name: ${pathName}`);
    const schemaName = buildSchemaName(x, fileObj)
    const path = buildPath(fileObj, x, schemaName);
    if (!path) {
        return;
    }
    const existingPath = apiDoc.paths[pathName];
    if (!existingPath) {
        apiDoc.paths[pathName] = path
    } else {
        apiDoc.paths[pathName] = {
            ...existingPath,
            ...path,
        }
    }
    const componentSchemas = buildComponentSchemas(fileObj, schemaName)
    apiDoc.components.schemas = {
        ...apiDoc.components.schemas,
        ...componentSchemas,
    }
    fs.writeFileSync(`${aDir}/open-api-merged.json`, JSON.stringify(apiDoc));
})

function mapResponseToType(objectDef) {
    const isArray = objectDef?.IsArray ?? false;
    let type = 'string';
    switch (objectDef.Type) {
        case "String":
            type = 'string';
            break;
        case "Boolean":
            type = 'boolean';
            break;
        case "Extension":
        case "CodeableConcept":
        case "Reference":
        case "Identifier":
        case "Address":
        case "Annotation":
        case "Period":
            return isArray ?
                {
                    items: {
                        "$ref": `#/components/schemas/${objectDef.Type}`
                    },
                    type: "array"
                } :
                {
                    "$ref": `#/components/schemas/${objectDef.Type}`
                };
        default:
            type = 'object'
    }
    const response = {
        type,
        description: objectDef.Description ?? "A Response Type"
    };
    if (type === 'object') {
        const children = objectDef?.Children;
        if (!children) {
            return response;
        }
        response.properties = {};
        response.required = [];
        for (const key of Object.keys(children)) {
            const val = children[key]
            const propKey = val?.Name;
            if (!val || !propKey) {
                continue;
            }
            response.properties[propKey] = mapResponseToType(val);
            if (val?.Optional === "True") {
                response.required = Array.from(new Set([...response.required, propKey]));
            }
        }
        if (response.required.length === 0) {
            delete response.required;
        }
        if (isArray) {
            response.type = "array";
            let somerequired = undefined;
            if ( !!somerequired && somerequired.length > 0) {
                 somerequired = [...response.required];
            }
            response.items = {
                type: 'object',
                properties: { ...response.properties },
                required: somerequired,
            }
            delete response.properties;
            delete response.required;
        }
    } else {
        if (isArray) {
            const clone = { ...response };
            response.type = 'array';
            response.items = {
                type: clone.type,
            }
        }
    }
    return response;
}


function buildStandardRootSchema(objectDef, rootSchemaName) {
    const response = {};
    response[rootSchemaName] = mapResponseToType(objectDef);
    return response;
}

function buildCustomBundle(rootSchemaName) {
    const response = {}
    const bundleKeyName = `Bundle_${rootSchemaName}`
    const bundleEntryKeyName = `Bundle_Entry_${rootSchemaName}`
    response[bundleKeyName] = {
        description: "Contains a collection of resources.",
        properties: {
            entry: {
                description: "Entry in the bundle.",
                items: {
                    "$ref": `#/components/schemas/${bundleEntryKeyName}`
                },
                type: "array"
            }
        }
    };
    response[bundleEntryKeyName] = {
        type: "object",
        description: "Entry in the bundle.",
        properties: {
            resource: {
                "$ref": `#/components/schemas/${rootSchemaName}`
            },
        },
    };
    return response;
}
function buildComponentSchemas(fileObj, rootSchemaName) {
    let schemas = {};
    const responseRootChildren = fileObj?.Parameters?.ResponseRootType?.Children
    if (!responseRootChildren) {
        return {};
    }
    const keys = Object.keys(responseRootChildren);
    if (keys.length > 1) {
        throw new Error(`WTF with rootSchema ${rootSchemaName} keys: ${keys.join(',')}`)
    }
    for (const key of keys) {
        if (key === "Bundle") {
            schemas = {
                ...schemas,
                ...buildCustomBundle(rootSchemaName),
            }
            break;
        } else {
            schemas = {
                ...schemas,
                ...buildStandardRootSchema(responseRootChildren[key], rootSchemaName),
            }
        }
    }
    return schemas;
}


function buildSchemaName(fileName, fileObj) {
    const nameParts = fileName.split(".");
    const schemaType = nameParts[0];
    const urlSplits = fileObj?.UrlTemplate.split("/");
    const index = urlSplits.indexOf("FHIR");
    const schemaVersion = urlSplits[index + 1];
    return `${schemaType}${schemaVersion}`;
}


function buildRequestParameters(paramsObj, url, schemaName) {
    let trimmedUrl = url;
    if (trimmedUrl.includes('?')) {
        trimmedUrl = trimmedUrl.substr(0, trimmedUrl.indexOf('?'));
    }
    const requestRoot = paramsObj?.RequestRootType
    const children = requestRoot?.Children;
    const requestParms = [];
    if (!children) {
        console.error(`Problems with object: ${trimmedUrl}`);
        return [];
    }
    for (const key of Object.keys(children)) {
        const child = children[key];
        const isObject = !["String", "Boolean"].includes(child.Type);
        let paramLocation = 'query';
        if (trimmedUrl.includes(`{${child.Name}}`)) {
            paramLocation = 'path'
        } else if (isObject) {
            continue;
        }
        let schemaType;
        switch (child.Type) {
            case "String":
                schemaType = "string";
                break;
            case "Boolean":
                schemaType = "boolean";
                break;
            default:
                schemaType = "object"
                break;
        }
        const paramObj = {
            name: child.Name,
            in: paramLocation,
            description: child.Description ?? 'A parameter',
            required: child.Optional === "False",
            schema: {
                type: schemaType
            }
        }
        if (schemaType === "object") {
            paramObj.schema = {
                "$ref": `#/components/schemas/${schemaName}`
            }
        }
        requestParms.push(paramObj)
    }
    return requestParms;
}

function buildResponses(verb, schemaName, isBundle) {
    const responseCode = ["post", "put"].includes(verb) ? "201" : "200";
    const response = {
        "400": {
            "description": "The resource request contained an invalid parameter. Invalid parameter such as a nonexistent id.",
            "content": {}
        },
        "401": {
            "description": "User not authorized for request. Request data that the authenticated user is not allowed access to view (i.e. a patient asking for data about a stranger's allergies).",
            "content": {}
        },
        "403": {
            "description": "Forbidden",
            "content": {}
        },
    };
    if (verb === "get") {
        response["404"] = {
            "description": "The resource is not found",
            "content": {}
        }
    }
    response[responseCode] = {
        description: "The response object",
        content: {
            "application/json": {
                schema: {
                    "$ref": `#/components/schemas/${isBundle ? 'Bundle_' : ''}${schemaName}`
                }
            }
        }
    }
    return response;
}

function buildRequestBody(schemaName, httpMethod) {
    if (!["put", "post"].includes(httpMethod.toLowerCase())) {
        return null;
    }
    return {
        description: "payload",
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: `#/components/schemas/${schemaName}`
                }
            }
        }
    }
}

function buildPath(obj, fileName, schemaName) {
    const response = {}
    const httpVerb = obj?.HttpMethod?.toLowerCase()
    if (!['put', 'post', 'get', 'delete'].includes(httpVerb)) {
        return null;
    }
    const nameParts = fileName.split('.').filter(x => x !== "json");
    const tags = [
        ...nameParts
    ]
    const operationId = fileName?.replace(".json", "")
        .replace(/\./g, "_")
        .replace(/\(/g, "")
        .replace(/\)/g, "");
    const parameters = buildRequestParameters(obj.Parameters, obj?.UrlTemplate, schemaName)
    const requestBody = buildRequestBody(schemaName, obj.HttpMethod);
    const isBundle = !!obj?.Parameters?.ResponseRootType?.Children?.Bundle
    const responses = buildResponses(httpVerb, schemaName, isBundle)

    const theObj = {
        tags,
        operationId,
        parameters,
        responses,
    }
    if (requestBody) {
        theObj.requestBody = requestBody;
    }
    response[httpVerb] = theObj;
    return response;
}


function buildApiDocBase() {
    return {
        openapi: "3.0.1",
        info: {
            title: "Epic on Fhir",
            description: "All of the components of the Change Healthcare Interoperability Apis",
            contact: {
                email: "bmain@lumeris.com"
            },
            license: {
                name: "Apache 2.0",
                url: "http://www.apache.org/licenses/LICENSE-2.0.html"
            },
            version: "1.0.0"
        },
        servers: [
            {
                "url": "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR"
            }
        ],
        security: [
            {
                "bearer_auth": []
            }
        ],
        paths: {

        },
        components: {
            schemas: {
                ...defaultSchemas()
            },
            securitySchemes: {
                bearer_auth: {
                    type: "apiKey",
                    description: "This is the Bearer Token for the User in context",
                    name: "Authorization",
                    in: "header"
                }
            }
        }
    }
}


function defaultSchemas() {
    return {
        Range: {
            "description": "A set of ordered Quantities defined by a low and high limit.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "low": {
                    "$ref": "#/components/schemas/Quantity"
                },
                "high": {
                    "$ref": "#/components/schemas/Quantity"
                }
            },
            "additionalProperties": false
        },
        "Element": {
            "description": "Base definition for all elements in a resource.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                }
            },
            "additionalProperties": false
        },
        "Period": {
            "description": "A time period defined by a start and end date and optionally time.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "start": {
                    type: "string"
                },
                "end": {
                    type: "string"
                }
            },
            "additionalProperties": false
        },
        "Identifier": {
            "description": "An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "use": {
                    "description": "The purpose of this identifier.",
                    "enum": [
                        "usual",
                        "official",
                        "temp",
                        "secondary",
                        "old"
                    ]
                },
                "type": {
                    "$ref": "#/components/schemas/CodeableConcept"
                },
                "system": {
                    type: "string"
                },
                "value": {
                    type: "string"
                },
                "period": {
                    "$ref": "#/components/schemas/Period"
                },
                "assigner": {
                    "$ref": "#/components/schemas/Reference"
                }
            },
            "additionalProperties": false
        },
        "Extension": {
            "description": "Optional Extension Element - found in all resources.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "url": {
                    type: "string"
                },
                "valueBase64Binary": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^(\\s*([0-9a-zA-Z\\+/=]){4}\\s*)+$",
                    "type": "string"
                },
                "valueBoolean": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^true|false$",
                    "type": "boolean"
                },
                "valueCanonical": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^\\S*$",
                    "type": "string"
                },
                "valueCode": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^[^\\s]+(\\s[^\\s]+)*$",
                    "type": "string"
                },
                "valueDate": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
                    "type": "string"
                },
                "valueDateTime": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
                    "type": "string"
                },
                "valueDecimal": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
                    "type": "number"
                },
                "valueId": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^[A-Za-z0-9\\-\\.]{1,64}$",
                    "type": "string"
                },
                "valueInstant": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
                    "type": "string"
                },
                "valueInteger": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^-?([0]|([1-9][0-9]*))$",
                    "type": "number"
                },
                "valueMarkdown": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^[ \\r\\n\\t\\S]+$",
                    "type": "string"
                },
                "valueOid": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$",
                    "type": "string"
                },
                "valuePositiveInt": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^[1-9][0-9]*$",
                    "type": "number"
                },
                "valueString": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^[ \\r\\n\\t\\S]+$",
                    "type": "string"
                },
                "valueTime": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
                    "type": "string"
                },
                "valueUnsignedInt": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^[0]|([1-9][0-9]*)$",
                    "type": "number"
                },
                "valueUri": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^\\S*$",
                    "type": "string"
                },
                "valueUrl": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^\\S*$",
                    "type": "string"
                },
                "valueUuid": {
                    "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
                    "pattern": "^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
                    "type": "string"
                }
            }
        },
        "CodeableConcept": {
            "description": "A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "coding": {
                    "description": "A reference to a code defined by a terminology system.",
                    "items": {
                        "$ref": "#/components/schemas/Coding"
                    },
                    "type": "array"
                },
                "text": {
                    type: "string"
                }
            },
            "additionalProperties": false
        },
        "Coding": {
            "description": "A reference to a code defined by a terminology system.",
            "properties": {
                "system": {
                    type: "string"
                },
                "code": {
                    type: "string"
                }
            },
            "additionalProperties": false
        },
        "url": {
            type: "string"
        },
        "instant": {
            "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
            "type": "string",
            "description": "An instant in time - known at least to the second"
        },
        "canonical": {
            "pattern": "^\\S*$",
            "type": "string",
            "description": "A URI that is a reference to a canonical URL on a FHIR resource"
        },
        "unsignedInt": {
            "pattern": "^[0]|([1-9][0-9]*)$",
            "type": "number",
            "description": "An integer with a value that is not negative (e.g. >= 0)"
        },
        "markdown": {
            "pattern": "^[ \\r\\n\\t\\S]+$",
            "type": "string",
            "description": "A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine"
        },
        "ContactPoint": {
            "description": "Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "system": {
                    "description": "Telecommunications form for contact point - what communications system is required to make use of the contact.",
                    "enum": [
                        "phone",
                        "fax",
                        "email",
                        "pager",
                        "url",
                        "sms",
                        "other"
                    ]
                },
                "value": {
                    type: "string"
                },
                "use": {
                    "description": "Identifies the purpose for the contact point.",
                    "enum": [
                        "home",
                        "work",
                        "temp",
                        "old",
                        "mobile"
                    ]
                },
                "rank": {
                    type: "number"
                },
                "period": {
                    "$ref": "#/components/schemas/Period"
                }
            },
            "additionalProperties": false
        },
        "UsageContext": {
            "description": "Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "code": {
                    "$ref": "#/components/schemas/Coding"
                },
                "valueCodeableConcept": {
                    "$ref": "#/components/schemas/CodeableConcept"
                },
                "valueQuantity": {
                    "$ref": "#/components/schemas/Quantity"
                },
                "valueRange": {
                    "$ref": "#/components/schemas/Range"
                },
                "valueReference": {
                    "$ref": "#/components/schemas/Reference"
                }
            },
            "additionalProperties": false,
            "required": [
                "code"
            ]
        },
        "ContactDetail": {
            "description": "Specifies contact information for a person or organization.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "name": {
                    type: "string"
                },
                "telecom": {
                    "description": "The contact details for the individual (if a name was provided) or the organization.",
                    "items": {
                        "$ref": "#/components/schemas/ContactPoint"
                    },
                    "type": "array"
                }
            },
            "additionalProperties": false
        },
        "uri": {
            "pattern": "^\\S*$",
            "type": "string",
            "description": "String of characters used to identify a name or a resource"
        },
        "Quantity": {
            "description": "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "value": {
                    type: "number"
                },
                "comparator": {
                    "description": "How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \"<\" , then the real value is < stated value.",
                    "enum": [
                        "<",
                        "<=",
                        ">=",
                        ">"
                    ]
                },
                "unit": {
                    type: "string"
                },
                "system": {
                    type: "string"
                },
                "code": {
                    type: "string"
                }
            },
            "additionalProperties": false
        },
        "Reference": {
            "description": "A reference from one resource to another.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "reference": {
                    type: "string"
                },
                "type": {
                    type: "string"
                },
                "identifier": {
                    "$ref": "#/components/schemas/Identifier"
                },
                "display": {
                    type: "string"
                }
            },
            "additionalProperties": false
        },
        "Narrative": {
            "description": "A human-readable summary of the resource conveying the essential clinical and business information for the resource.",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "status": {
                    "description": "The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
                    "enum": [
                        "generated",
                        "extensions",
                        "additional",
                        "empty"
                    ]
                },
                "div": {
                    type: "string",
                }
            },
            "additionalProperties": false,
            "required": [
                "div"
            ]
        },
        "Resource": {
            "properties": {
                "id": {
                    type: "string"
                },
                "meta": {
                    "$ref": "#/components/schemas/Meta"
                },
                "implicitRules": {
                    type: "string"
                },
                "language": {
                    type: "string"
                }
            },
            "additionalProperties": false
        },
        "Annotation": {
            "type": "object",
            "properties": {
                "id": {
                    type: "string",
                },
                "extension": {
                    "type": "array",
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    }
                },
                "authorReference": {
                    "$ref": "#/components/schemas/Reference"
                },
                "authorString": {
                    "pattern": "^[ \\r\\n\\t\\S]+$",
                    "type": "string",
                    "description": "The individual responsible for making the annotation."
                },
                "time": {
                    type: "string"
                },
                "text": {
                    type: "string",
                }
            },
            "description": "A  text note which also  contains information about who made the statement and when."
        },
        "Meta": {
            "description": "The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
            "type": "object",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    },
                    "type": "array"
                },
                "versionId": {
                    type: "string"
                },
                "lastUpdated": {
                    type: "string"
                },
                "source": {
                    type: "string"
                },
                "profile": {
                    "description": "A list of profiles (references to [[[StructureDefinition]]] resources) that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].",
                    "items": {
                        "$ref": "#/components/schemas/canonical"
                    },
                    "type": "array"
                },
                "security": {
                    "description": "Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.",
                    "items": {
                        "$ref": "#/components/schemas/Coding"
                    },
                    "type": "array"
                },
                "tag": {
                    "description": "Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.",
                    "items": {
                        "$ref": "#/components/schemas/Coding"
                    },
                    "type": "array"
                }
            },
            "additionalProperties": false
        },
        "Address": {
            "type": "object",
            "properties": {
                "id": {
                    type: "string"
                },
                "extension": {
                    "type": "array",
                    "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
                    "items": {
                        "$ref": "#/components/schemas/Extension"
                    }
                },
                "use": {
                    "type": "string",
                    "description": "The purpose of this address.",
                    "enum": [
                        "home",
                        "work",
                        "temp",
                        "old",
                        "billing"
                    ]
                },
                "type": {
                    "type": "string",
                    "description": "Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.",
                    "enum": [
                        "postal",
                        "physical",
                        "both"
                    ]
                },
                "text": {
                    type: "string"
                },
                "line": {
                    "type": "array",
                    "description": "This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.",
                    "items": {
                        "type": "string"
                    }
                },
                "city": {
                    type: "string"
                },
                "district": {
                    type: "string"
                },
                "state": {
                    type: "string"
                },
                "postalCode": {
                    type: "string"
                },
                "country": {
                    type: "string"
                },
                "period": {
                    type: "string"
                }
            },
            "description": "An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world."
        },
    }
}