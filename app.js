import carros2024 from './tabelacarros.js';
// Importa o módulo "express" um framework para construção de aplicações web em Node.js
import express from 'express';

// Cria uma instância do aplicativo Express, usada para configurar e gerenciar as rotas e o servidor
const app = express();

// Configura o Express para entender requisições com o corpo em formato JSON
app.use(express.json());

// Define uma rota GET no caminho '/' que irá retornar a lista completa de carros
app.get('/', (requisicao, resposta) => {
    // Quando a rota for acessada, a resposta terá o código de status 200(OK) e enviará a lista de carros
    res.status(200).send(carros2024); // Retorna a lista de carros com o status 200 (requisição bem-sucedida).
});

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log('Servidor Rodando com Sucesso'));