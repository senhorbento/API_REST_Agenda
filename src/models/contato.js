const mongoose = require('../database');

const ContatoSchema = new mongoose.Schema({
    nome:{type: String, require:true},
    telefone:{type: String, require:true},
    email:{type: String, require:false, lowercase:true}
},
{
    collection: "contato"
})

const Contato = mongoose.model('Contato', ContatoSchema);

module.exports = Contato;