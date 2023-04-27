const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({

    salaoId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    especialidades: [
        {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required: true,
        },
    ],
    colaboradores: [
        {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true,
        },
    ],
    dias :{
        type: [Number], //validação array de numeros
        required: true,
    },
    inicio :{
        type: [Number], //validação array de numeros
        required: true,
    },
    fim :{
        type: [Number], //validação array de numeros
        required: true,
    },
    dataCadastro :{
        type: Date,
        dafault: Date.now,
    },


});
module.exports = mongoose.model('Horario', horario);