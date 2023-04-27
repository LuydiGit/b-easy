const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({

    nome: {
        type: String, //Validação no próprio banco de dados
        required: [true, 'Nome é obrigatório'],
    },
    foto: String,
    capa: String,
    email: {
        type: String, //Validação no próprio banco de dados
        required: [true, 'E-mail é obrigatório'],
    },
    senha: {
        type: String, //Definindo valor padrão
        default: null,
    },
    telefone: String,

    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: Number,
        pais: String,
    }, 

    geo : {
        tipo: String,
        coordinates: Array,    
    },

    dataCadastro: {
        type: Date,
        dafault: Date.now,
    },

});

salao.index ({ geo: '2dsphere'});

module.exports = mongoose.model('Salao', salao);