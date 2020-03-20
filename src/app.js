const readline = require('readline-sync');

const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credential/credentials');//Your credential archive api

const GetId = require('../src/utils/GenerateKeyId');

async function main() {
    const doc = new GoogleSpreadsheet('1t6RgVQx8uUpcTqAr6-T1mdMJYmZTwbSdK0WqFkYP6rY');

    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key
    });

    const getInfoTerms = {};

    async function addSearchTerm()
    {
        const Terms = {
            user_name: await readline.question(" insert name complet: "),
            user_email: await readline.question(" insert your email: ")

        }

        return Terms
    }

     getInfoTerms.assets = await addSearchTerm();

    console.log(getInfoTerms.assets);
   

    await doc.loadInfo();

    const sheet = doc.sheetsById[0];

    const rowsCell = await sheet.getRows();

       
        const moreRows = await sheet.addRows([
            {  
                ID: await GetId(),
                NAME: getInfoTerms.assets.user_name, 
                EMAIL: getInfoTerms.assets.user_email
            },
            
        ]);

    
}
main();



