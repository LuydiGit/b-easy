const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({

    nome: {
        type: String, //Validação no próprio banco de dados
        required: [true, 'Nome é obrigatório'],
    },
    foto: {
        type: String, //Validação no próprio banco de dados
        required: [true, 'Foto é obrigatório'],
    },
    email: {
        type: String, //Validação no próprio banco de dados
        required: [true, 'E-mail é obrigatório'],
    },
    senha: {
        type: String, //Definindo valor padrão
        default: null,
    },

    dataNascimento: {
        type: String, //YYYY-MM-DD
        required: [true, 'Data de nascimento é obrigatório'],
    },

    sexo: {
        type: String,
        enum : ['M', 'F'],
        required: [true, 'Sexo de nascimento é obrigatório'],
    },
    status: {
        type: String,
        enum : ['A', 'I'],
        default: 'A',
    },

    telefone: {
        type: String, //Validação no próprio banco de dados
        required: [true, 'FTelefone é obrigatório'],
    },

    contaBancaria: { 
        titular: {
            type: String,
            required: true
        },
        cpfCnpj: {
            type: String,
            required: true
        },
        banco: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        agencia: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        dv: {
            type: String,
            required: true
        },
    }, 

    dataCadastro: {
        type: Date,
        dafault: Date.now,
    },

    recipientdl: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Colaborador', colaborador);