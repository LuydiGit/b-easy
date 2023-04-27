const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({

    salaoId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    colaboradorId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true
    },

});
module.exports = mongoose.model('SalaoColaborador', salaoColaborador);