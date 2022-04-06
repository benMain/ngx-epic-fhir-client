const fs = require('fs');
const axios = require('axios')
const https = require('https');
const dir = __dirname;

const apis = JSON.parse(fs.readFileSync(`${dir}/api-explorer.json`));

const agent = new https.Agent({
    rejectUnauthorized: false
});

apis.map(x => {
    console.log(`Working with API ${x.Name}`)

    axios
        .get(`https://fhir.epic.com/Sandbox/Api?id=${x.Id}`, { httpsAgent: agent })
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            fs.writeFileSync(`${dir}/explorer-output/${x.Name?.replace(/ /g, "")}.json`, JSON.stringify(res?.data?.Data))
        })
        .catch(error => {
            console.error(error)
        })

})