// 2. Criar uma rota chamada calculadora que deve receber 3 query
// params, uma sendo a operação a ser executada (soma,
// subtração...) e as outras duas sendo os valores a ser usado na
// operação.

// a. Ao chamar a seguinte rota
// .../calculadora?operacao=somar&valorA=7&valorB=13 deverá
// retornar o valor 20.

// b. Ao chamar a seguinte rota
// .../calculadora?operacao=subtrair&valorA=30&valorB=13
// deverá retornar o valor 17.

// c. Ao chamar a seguinte rota
// .../calculadora?operacao=multiplicar&valorA=8&valorB=8
// deverá retornar o valor 64.

// d. Ao chamar a seguinte rota
// .../calculadora?operacao=dividir&valorA=120&valorB=10
// deverá retornar o valor 12.

import express from "express";

const app = express();

app.listen(3333, () => {
  console.log("API está rodando...");
});

app.get("/calculadora", (req, res) => {
  const operacao = req.query.operacao;

  const valorA: number = Number(req.query.valorA);

  const valorB: number = Number(req.query.valorB);

  let resultado: number = 0;

  if (operacao === "somar") {
    resultado = valorA + valorB;
    return res.send({ valor: resultado });
  } else if (operacao === "subtrair") {
    resultado = valorA - valorB;
    return res.send({ valor: resultado });
  } else if (operacao === "multiplicar") {
    resultado = valorA * valorB;
    return res.send({ valor: resultado });
  } else if (operacao === "dividir") {
    resultado = valorA / valorB;
    return res.send({ valor: resultado });
  }
});
