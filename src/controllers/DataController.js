const crypto = require('crypto');
const doc = require('../data/SheetsAPI');

module.exports = { 
    async  index(req, res){

        doc().then(function (callback)
    {
        const GetDoc = callback;

        const { nome_empresa, nome_maquina, placa_mae, processador, fonte, mem_ram, dvd_leitor, hd_disc, status, data, obs } = req.body;


        const cod_id = crypto.randomBytes(4).toString('HEX');

    
        const sheet = GetDoc.sheetsById[0];
        
        const rowsCell = sheet.getRows();
        
        const moreRows = sheet.addRows([
            {  
                Cod_Serie: cod_id,  
                Empresa: nome_empresa,
                Maquina: nome_maquina,
                Motherboard: placa_mae,
                Processador: processador,
                Ram: mem_ram,
                Fonte: fonte,
                HD: hd_disc,
                Data: data,
                Status: status,
                Obs: obs
            },
            
        ]);
        
        return res.json({ cod_id });
        })
    }
}





