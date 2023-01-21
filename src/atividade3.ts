// 3. Criar uma rota, que toda vez que for chamada, adiciona +1 a um
// contador. Toda vez que esse contador chegar a 10, exibir mensagem
// “Chegou à 10” e resetar o contador;

import express from "express";

const app = express();

app.listen(3333, () => {
  console.log("API está rodando...");
});

let contador: number = 0;

app.get("/contagem", (req, res) => {
  if (contador < 10) {
    contador++;
    return res.send({ contador: contador });
  } else {
    contador = 0;
    return res.send({
      mensagem: "Chegou à 10",
    });
  }
});
