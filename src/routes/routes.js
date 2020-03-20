//ROUTE FILE DOESN`T HAVE A FUNCTION YET git reset --hard origin/master

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Rodando...");
});


app.listen(3333, () => {
    console.log(" código rodando");
});