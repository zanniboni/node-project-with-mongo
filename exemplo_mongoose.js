//Instanciado mongoose
    const mongoose = require('mongoose')

//Conexão através do mongoose no mongoDB
//É necessário utilizar os parametros useNewUrlParser e useUnifiedTopology, caso contrário
//os recursos podem estar depreciados

//Configurar promise para evitar erros no projeto
mongoose.Promise = global.Promise;

//Conectar ao mongoDB
    mongoose.connect("mongodb://localhost/aprendendo", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Conectado...")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB " + err)
    })

// Model - Usuários

//Definido modelo
    const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })

//Definição da collection
    mongoose.model('usuarios', UsuarioSchema)

//Criar novo usuário no Schema usuário
    //Instanciado objeto usuario que ira conter a collection "Usuarios"
    const Usuario = mongoose.model('usuarios')

    new Usuario({
        nome: "Vinicius",
        sobrenome: "Chagas",
        email: "viny.zanchagas@gmail.com",
        idade: 21,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("Falha ao registrar o usuário " + err)
    })