require('dotenv').config();

const credentials = {
    private_key : process.env.private_key,
    client_email : process.env.client_email,
    url_id: process.env.url_id,
}
 
module.exports = credentials;