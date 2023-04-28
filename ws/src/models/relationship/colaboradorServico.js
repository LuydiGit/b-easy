const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({

    colaboradorId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true
    },
    servicoId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
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
module.exports = mongoose.model('ColaboradorServico', colaboradorServico);