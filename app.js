import carros2024 from "./tabelacarros.js";
// Importa o módulo "express" um framework para construção de aplicações web em Node.js
import express from "express";

import { modeloCarro } from "./validacao.js";

// Cria uma instância do aplicativo Express, usada para configurar e gerenciar as rotas e o servidor
const app = express();

// Configura o Express para entender requisições com o corpo em formato JSON
app.use(express.json());

// Define uma rota GET no caminho '/' que irá retornar a lista completa de carros
app.get("/", (requisicao, resposta) => {
  // Quando a rota for acessada, a resposta terá o código de status 200(OK) e enviará a lista de carros
  resposta.status(200).send(carros2024); // Retorna a lista de carros com o status 200 (requisição bem-sucedida).
});

app.get("/:sigla", (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase(); // Obtém a sigla e deixa Maiuscula
  const carro = carros2024.find(
    (infoCarro) => infoCarro.sigla === siglaInformada
  ); // Busca o carro pela sigla
  if (!carro) {
    // Se o carro não for encontrado retorna erro 404.
    res.status(404).send("Não existe carro com a sigla informada!");
    return;
  }
  res.status(200).send(carro); // Se encontrado retorna o carro e status 200
});

app.post('/', (req, res) => {
    const novoCarro = req.body; // Obtém o novo carro enviado no corpo da requisição
    const { error } = modeloCarro.validate(novoCarro); // Valida os dados do novo carro.
    if (error) {
        // Se houver erro de validação, retorna erro 400
        res.status(400).send(error);
        return;
    }
    carros2024.push(novoCarro); // Adiciona o carro a lista de carros.
    res.status(200).send(novoCarro); // Retorna o carro adicionado com status 200
});

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log("Servidor Rodando com Sucesso"));
