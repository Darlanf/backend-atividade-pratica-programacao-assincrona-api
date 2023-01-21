// 5. Criar uma rota chamada inverter-string, essa rota deverá ter uma
// query param chamada valor. Esse valor recebido deverá ser
// invertido e retornado.

import express from "express";

const app = express();

app.listen(3333, () => {
  console.log("API está rodando...");
});

app.get("/inverter-string", (req, res) => {
  const valor = req.query.valor;

  if (valor) {
    let retornado = valor
      ?.toString()
      .split("")
      .reverse()
      .join("");

    return res.send({
      valor: valor,
      retorno: retornado,
    });
  }
});
