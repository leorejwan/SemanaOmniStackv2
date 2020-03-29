//perfil de uma ong
const connection = require('../database/connection'); //.. pra acessar pasta anterior

module.exports = {

    async index (request, response) { 
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents').where('ong_id', ong_id).select('*');

        return response.json(incidents);
    }
}