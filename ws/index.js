const express = require('express');
const app = express();
const morgam = require ('morgan');

//Middlewares
app.use(morgam('dev'));

//Variables
app.set('port', 8000);

app.listen(app.get('port'),  ()=> {
    console.log(`WS escutando a porta ${app.get('port')}`);
})