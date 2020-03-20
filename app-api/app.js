const readline = require('readline-sync');

const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json'); //Your credential archive api


async function main() {
    const doc = new GoogleSpreadsheet('YOUR ID SHEET');

    await doc.useServiceAccountAuth({
        client_email: credentials.env.client_email,
        private_key: credentials.env.private_key
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

    const moreRows = await sheet.addRows([
         {   
            name: getInfoTerms.assets.user_name, 
            email: getInfoTerms.assets.user_email
        },
    ]);

}
main();




