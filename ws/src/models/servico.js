const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({

    salaoId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
    },

    titulo: {
        type: String, //Validação no próprio banco de dados
        required: [true, 'Título é obrigatório'],
    },
    preco: {
        type: Number, //Validação no próprio banco de dados
        required: [true, 'Preço é obrigatório'],
    },
    duracao: {
        type: Number, //Validação no próprio banco de dados
        required: [true, 'E-mail é obrigatório'],
    },
    comissao: { //% de comissão sobre o preço
        type: Number, //Definindo valor padrão
        default: null,
    },

    recorrencia: { //Periodo de volta do cliente
        type: Number, 
        required: [true, 'DRecorrência é obrigatório'],
    },

    descricao: {
        type: String,
        required: [true, 'Descrição é obrigatório'],
    },
    status: { //Essse modelo de exclusão será lógica (usar uma flag para excluido)
        type: String,
        enum : ['A', 'I', 'E'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        dafault: Date.now,
    },

});

module.exports = mongoose.model('Servico', servico);