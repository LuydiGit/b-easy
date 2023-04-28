const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({

    salaoId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    clienteId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    status: {
        type: String,
        enum : ['A', 'I'],
        default: 'A',
    },
    dataCadastro :{
        type: Date,
        dafault: Date.now,
    },

});
module.exports = mongoose.model('SalaoCliente', salaoCliente);