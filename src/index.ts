import express from "express";
import axios from "axios";
import { getUserFromGithub } from "./atividade1";
import { getRepositories } from "./atividade1";

const app = express();

app.listen(3333, () => {
  console.log("API está rodando...");
});

app.get("/", (req, res) => {
  res.send({
    MSG: "Atividade",
  });
});

console.log(`====> ATIVIDADE 1 <==== \n`);

getUserFromGithub("djunior97");
getUserFromGithub("djunioriqdivqv97");

getRepositories("marcelo-growdev/scrapbook-es6");
getRepositories("marcelo-growdev/qdbqqbqwn");

console.log(`====> ATIVIDADE 2 <==== \n`);

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

console.log(`====> ATIVIDADE 3 <==== \n`);

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

console.log(`====> ATIVIDADE 4 <==== \n`);

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

console.log(`====> ATIVIDADE 5 <==== \n`);

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

console.log(`====> ATIVIDADE 6 <==== \n`);

app.get("/remover-vogais", (req, res) => {
  const valor = req.query.valor?.toString();

  let array: string[] = [];

  if (valor) {
    let consoantes = valor!.replace(
      /[aeiouà-ú]/gi,
      ""
    );
    array.push(consoantes);
    res.send({
      valor: valor,
      array,
    });
  }
});
