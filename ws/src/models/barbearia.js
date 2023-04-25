const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barbearia = new Schema({
    nome: String,
    foto: String,
    capa: String,
    email: String,
    senha: String,
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        logradoro: String,
        numero: Number,
        cep: String,
        pais: String
    }

});

module.exports = mongoose.model('Barbearia', barbearia);