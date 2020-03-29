//TESTE COMMIT

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

// const crypto = require('crypto');

// const connection = require('./database/connection');

const routes = express.Router();


// routes.get('/ongs', async (request, response) => { //listagem 
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);
// })

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create); 

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/profile', profileController.index);

routes.post('/sessions', sessionController.index);


// routes.post('/users', (request, response) => { //users é a rota //request: guarda as variaveis. response: guarda a resposta
//     const paramsQuery = request.query; //pega as variaveis que estão depois do ? da rota
//     const params = request.params; //pega os parâmetros que estão depois do ? da rota
//     const body = request.body; //pega os parâmetros que estão depois do ? da rota
  
// routes.post('/ongs', async (request, response) => {  //criar registro
//     const data = request.body;
    
    // const { name, email, whatsapp, city, uf } = request.body;

    // console.log(data);

    // const id = crypto.randomBytes(4).toString('HEX');//numeros aleatorios  

    // await connection('ongs').insert({
    //     id,
    //     name,
    //     email,
    //     whatsapp,
    //     city,
    //     uf
    // })

    // // connection
    
    // return response.json({ id });
// });

    
module.exports = routes; //exportar rota


// const routes = express.routes('./routes');

// const app = express();

// app.use(express.json());
// app.use(routes);

// app.listen(3333);