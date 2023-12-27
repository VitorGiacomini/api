const express = require('express');
const app = express();
const port = 3000;

app.get('/filmes', (req, res) => {
    const filmes = [
        {
            id:1,
            titulo:"O Senhor dos Anéis",
            descricao: 'Sera adicionada no futuro',
            genero:'Fantasia',
            link_filme: 'link_para_filme_1'
        },
        {
            id:2,
            titulo:"Star Wars - Episódio V: O Império Contra-Ataca",
            descricao: "A história continua com a Batalha de Hoth e os planos do Império para destruiro novo alinhamento da Força.",
            genero:'Ficção Científica/Aventura',
            link_filme: 'https://www.youtube.com/watch?v=6tBbWsn5r4c'
        },
        {
            id:3,
            titulo:"Vingadores: Era de Ultron",
            descricao: 'outra que sera adicionada em breve',
            genero:'Ação/Aventura',
            link_filme: "https://www.youtube.com/watch?v=eOrNJpWw1ac"
        }
    ];
    res.json({filmes});
    });
app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})