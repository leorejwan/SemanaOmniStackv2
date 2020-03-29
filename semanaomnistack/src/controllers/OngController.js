const crypto = require('crypto');
const connection = require('../database/connection'); //.. pra acessar pasta anterior

module.exports = {

    async index (request, response) { //listagem 
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        // console.log(data);
    
        const id = crypto.randomBytes(4).toString('HEX');//numeros aleatorios  
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        
        return response.json({ id });
    }
}