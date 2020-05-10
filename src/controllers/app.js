const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require('./credential/credentials');//Your credential archive api

async function main() {
    const doc = new GoogleSpreadsheet('1t6RgVQx8uUpcTqAr6-T1mdMJYmZTwbSdK0WqFkYP6rY');

    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key
    });

    const getInfoTerms = {
        user_name: "Felipe Melo",
        user_email: "felps@gmail.com"
    };
   

    await doc.loadInfo();

    const sheet = doc.sheetsById[0];

    const rowsCell = await sheet.getRows();

       
        const moreRows = await sheet.addRows([
            {  
                NAME: getInfoTerms.user_name, 
                EMAIL: getInfoTerms.user_email
            },
            
        ]);
 
}
main();



