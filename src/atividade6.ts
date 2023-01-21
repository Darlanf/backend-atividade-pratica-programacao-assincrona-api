// 6. Criar uma rota chamada remover-vogais, essa rota deverá ter uma
// query param chamada valor. Esse valor recebido deverá ser salvo
// em um array, e toda vez que a rota for chamada, deverá salvar o
// valor nesse mesmo array. Antes de salvar o valor/string no array,
// deverá ser removido todas as vogais, deixando apenas as
// consoantes na string. Sempre que a rota for chamada, deverá ser
// exibido em forma de json o array contendo todas as strings.
// a. Ex:
// array = []
// valor = edson
// array = [dsn]
// valor = lucas
// array = [dsn, lcs]

import express from "express";

const app = express();

app.listen(3333, () => {
  console.log("API está rodando...");
});

app.get("/remover-vogais", (req, res) => {
  const valor = req.query.valor?.toString();

  let array: string[] = [];

  if (valor) {
    let consoantes = valor!.replace(
      /[aeiouà-ú]/gi,
      ""
    );
    array.push(consoantes);
  }
});
