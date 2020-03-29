const connection = require('../database/connection');

module.exports = {

    // async index (request, response) { //listagem 
    //     const incidents = await connection('incidents').select('*');
    
    //     return response.json(incidents);
    // },

    async index (request, response) { //listagem  //COMO FAZER PAGINACAO?
        const { page = 1 } = request.query;
    
        const [count] = await connection('incidents').count(); //primeiro resultado vai pra variavel count

        console.log(count);

        response.header('X-Total-count', count['count(*)']); //aparece no header da RESPOSTA!!


        const incidents = await connection('incidents')
        .limit(5) //so traz 5 casos
        .offset((page - 1) * 5) //pular 
        .select('*');
    
        return response.json(incidents);
    },

    async index (request, response) { //listagem  //COMO FAZER PAGINACAO? //JOIN COM ONGS
        const { page = 1 } = request.query;
    
        const [count] = await connection('incidents').count(); //primeiro resultado vai pra variavel count

        console.log(count);

        response.header('X-Total-count', count['count(*)']); //aparece no header da RESPOSTA!!


        const incidents = await connection('incidents')
        .join('ongs', 'ong_id', '=', 'incidents.ong_id')
        .limit(5) //so traz 5 casos
        .offset((page - 1) * 5) //pular 
        .select(['incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf']);
    
        return response.json(incidents);
    },
    

    async create(request, response){
        const { title, descrition, value } = request.body; //id automatico

        //como eniar a ong_id?
        const ong_id = request.headers.authorization; //autenticação

        const [id] = await connection('incidents').insert({ //o primeiro valor do array do resultado será armazenado na variavel id 
            title,
            descrition,
            value,
            ong_id,
        });

        return response.json({ id });


    },

    async delete (request, response) { //deletar!
        const { id } = request.params;
        const ong_id = request.headers.authorization; //esse que to tentando deletar foi criado pela ong?
        
        const incidents = await connection('incidents').where('id', id).select('ong_id').first();
        
        if(incidents.ong_id !== ong_id){
            return response.status(401),json( { error: 'Operation not permitted!' }); //"NAO AUTORIZADO!!"" http status codes
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //"SEM CONTEUDO! "

    },
}