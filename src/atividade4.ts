// 4. Criar uma rota chamada numeral, que terá como query param um
// número a ser processado. Nesta rota deverá ter também uma query
// param chamada operação contendo um dos seguintes valores:
// anterior ou proximo. Caso o valor seja anterior, deverá ser retornado
// o valor anterior ao passado no query param, caso o valor seja
// proximo, deverá retornar o próximo valor ao número passado.

// a. Ex 1:
// operacao = anterior
// numero = 5
// resultado = 4

// b. Ex 2:
// operacao = proximo
// numero = 5
// resultado = 6

import express from "express";
import axios from "axios";

const app = express();

app.listen(3333, () => {
  console.log("API está rodando...");
});

app.get("/numeral", (req, res) => {
  const numero = Number(req.query.numero);
  const operacao = req.query.operacao;

  if (operacao === "anterior") {
    let resultado = numero - 1;
    return res.send({
      Operação: operacao,
      Numero: numero,
      Resultado: resultado,
    });
  } else if (operacao === "proximo") {
    let resultado = numero + 1;
    return res.send({
      Operação: operacao,
      numero: numero,
      resultado: resultado,
    });
  } else {
    return res.send({
      Message:
        "Operação não permitida. Escolha entre anterior ou proximo",
    });
  }
});
