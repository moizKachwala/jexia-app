import * as jexiaSDK from 'jexia-sdk-js/node';

export const dataModule = jexiaSDK.dataOperations();

export function configureJexia() {
    const credentials = {
        projectID: process.env.PROJECT_ID,
        key: process.env.API_KEY,
        secret: process.env.API_SECRET,
    };
    jexiaSDK.jexiaClient().init(credentials, dataModule);
}
