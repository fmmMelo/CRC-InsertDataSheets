const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require('../credentials/CredentialKey');//Your credential archive api

    const data = async  function SheetsCredential() {
    const doc =  new GoogleSpreadsheet(`${credentials.url_id}`);
    
    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key
    });
    
    await doc.loadInfo();

    return doc
}

module.exports = data;