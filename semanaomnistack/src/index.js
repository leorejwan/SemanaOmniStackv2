const express = require('express');

const cors = require('cors');

const routes = require('./routes'); //precisa do ./
const app = express();

app.use(cors());

app.use(express.json());//tenque vir antes

app.use(routes);

// app.get('/', (request, response) => {
//     return response.send('hello world');
// });

//app.get acessando rota atraves do método GET
//POST: Criar informação no back end
//PUT: Alterar informação no back end
//DELETE: Deletar uma informação no back-end

//Query Params
//Route params
//Request body

/*
Driver: SELECT * FROM USERS
QUery Builder: table('users')
*/

//http://localhost:3333/users/2
// app.get('/users', (request, response) => { //users é a rota //request: guarda as variaveis. response: guarda a resposta
// app.post('/users', (request, response) => { //users é a rota //request: guarda as variaveis. response: guarda a resposta
// const paramsQuery = request.query; //pega as variaveis que estão depois do ? da rota
// const params = request.params; //pega os parâmetros que estão depois do ? da rota
// const body = request.body; //pega os parâmetros que estão depois do ? da rota


// console.log("query:");
// console.log(paramsQuery);
// console.log("params:");
// console.log(params);
// console.log("body:");
// console.log(body);

//     return response.json({
//         evento: 'Semana OmniStack',
//         aluno: 'kcndsknsdk'
//     });
// });

app.listen(3333);
