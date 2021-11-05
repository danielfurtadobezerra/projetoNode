const express = require ("express");
const app = express();

//Criando rota inicial.
app.get("/", function (req, res){
    res.send("Trabalho de Desenvolvimento de software em Nuvem");
    console.log("funcionando");
})

//Rota de cadastro de alunos.
app.get("/Aluno/", function (req, res){
    res.send("<h1>MEMBROS DA EQUIPE</h1>");
    console.log("funcionando");
})

//Rota com parâmetro ex: https://http://localhost:3690/Aluno/Matheus
app.get("/Aluno/:parametro", function (req, res){
    res.send("Aluno listado: " + req.params.parametro );
    console.log("funcionando");
})

//Rota de cursos com parametro.
app.get("/curso/:nome", function (req, res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Curso: " + nome + "adicionado ao plano de ensino!</h1>");
        console.log("funcionando");
    } else {
        res.send("Aluno adicionado!");
        console.log("funcionando");
    }
 
})

app.get("/cadastro/:nome", function (req, res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Aluno: " + nome + "adicionado a equipe!</h1>");
        console.log("funcionando");
    } else {
        res.send("Aluno adicionado!");
        console.log("funcionando");
    }
 
})

//Criando a aplicação na porta 3690
app.listen(3690, function (erro){
    if (erro){
        console.log("Erro ao iniciar");
    } else {
        console.log("Servidor Iniciado");
    }
})