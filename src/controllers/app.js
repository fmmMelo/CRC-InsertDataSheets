const crypto = require('crypto');
const doc = require('../data/SheetsAPI');

    doc().then(function (callback)
    {
        const GetDoc = callback;

        async function create(){
            const data_machine = {
                nome_empresa: "ADOMÉNIO",
                nome_maquina: "Optilex 330",
                placa_mae: "ASUS DELL 330",
                processador: "Dual Core 2.20 GHz",
                fonte: "Sim",
                mem_ram: "Não acompanha",
                dvd_leitor: "Não",
                hd_disc: "Não",
                status: "Não completo",
                data: "14/02/2020",
                desc_maquina: "peças em falta, porém, todas funcionando" 
            };
    
            const cod_id = crypto.randomBytes(4).toString('HEX');
    
        
            const sheet = GetDoc.sheetsById[0];
            
            const rowsCell = await sheet.getRows();
            
            const moreRows = await sheet.addRows([
                {  
                    Cod_Serie: cod_id,  
                    Empresa: data_machine.nome_empresa,
                    Maquina: data_machine.nome_maquina,
                    Motherboard: data_machine.placa_mae,
                    Processador: data_machine.processador,
                    Ram: data_machine.mem_ram,
                    Fonte: data_machine.fonte,
                    HD: data_machine.hd_disc,
                    Data: data_machine.data,
                    Status: data_machine.status,
                    Obs: data_machine.desc_maquina
                },
                
            ]);
            
            console.log("done!");
        }
        create()
    });

 




