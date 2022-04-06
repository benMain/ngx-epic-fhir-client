import { Inject, Injectable } from "@angular/core";
import { EpicOAuthToken } from "../model/epic-oauth-token";
import { RUN_AUTH_FLOW } from "../variables";

@Injectable()
export class OAuthCompletionService {
    constructor(@Inject(RUN_AUTH_FLOW) token: EpicOAuthToken) {
        console.log(`Oauth flow completed and received token: ${JSON.stringify(token)}`)
    }
}