//login!

const connection = require('../database/connection');

module.exports = {

    async index(request, response) { //listagem 
        const { id } = request.body;

        const ong = await connection('ongs').where('id', id).select('name').first();

        if(!ong){
            return response.status(400).json({ error: 'not ONG found!!! '});
        }

        return response.json(ong);
    }
}