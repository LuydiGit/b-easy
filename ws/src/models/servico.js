const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({

    salaoId: { //Pra quem disse que orientado a documento não tem relacionamento, chupa
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        require: true,
    },

    titulo: {
        type: String, //Validação no próprio banco de dados
        required: [true],
    },
    preco: {
        type: Number, //Validação no próprio banco de dados
        required: [true],
    },
    duracao: {
        type: Number, //Validação no próprio banco de dados
        required: [true],
    },
    comissao: { //% de comissão sobre o preço
        type: Number, //Definindo valor padrão
        default: null,
    },

    recorrencia: { //Periodo de volta do cliente
        type: Number, 
        required: [true],
    },

    descricao: {
        type: String,
        required: [true],
    },
    status: { //Essse modelo de exclusão será lógica (usar uma flag(parametro) para excluido, vai servir para usar em estatisticas)
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