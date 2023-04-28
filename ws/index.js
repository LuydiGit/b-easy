const express = require('express');
const app = express();
const morgam = require ('morgan');
const cors = require ('cors');
require('./database');

//Middlewares
app.use(morgam('dev'));
app.use(express.json());
app.use(cors());
//Variables
app.set('port', 8000);

//ROTAS
app.use('/salao',require('./src/routes/salao.routes'));

app.listen(app.get('port'),  ()=> {
    console.log(`WS escutando a porta ${app.get('port')}`);
});