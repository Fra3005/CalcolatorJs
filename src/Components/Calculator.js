import React, { useEffect, useState } from "react";
import { Grid, Button, Box } from "@mui/material";

export default function Calculator() {
  const [result, setResult] = useState("");

  //aggiunta input con concatenazione stringhe
  const handleChangeInput = (e) => {
    let arr = String(result);
    arr = arr.concat(e.target.value);

    setResult(arr);
  };

  //calcolo della somma checkando l'operatore, dividendo la stringa di partenza in 2 parti, convertendo e poi facendo la somma
  const sum = (str) => {
    str = String(str);
    let symbols = str.indexOf("+");
    let prima = str.slice(0, symbols);
    let secondo = str.slice(symbols + 1);
    const NewPrima = convertStringToNumber(prima);
    const NewSeconda = convertStringToNumber(secondo);
    let somma = NewPrima + NewSeconda;
    somma = String(somma);
    setResult(somma);
  };

  //calcolo della sottr checkando l'operatore, dividendo la stringa di partenza in 2 parti, convertendo e poi facendo la sottr
  const sottr = (str) => {
    str = String(str);
    let symbols = str.indexOf("-");
    let prima = str.slice(0, symbols);
    let secondo = str.slice(symbols + 1);
    const NewPrima = convertStringToNumber(prima);
    const NewSeconda = convertStringToNumber(secondo);
    let sottrazione = NewPrima - NewSeconda;
    sottrazione = String(sottrazione);
    setResult(sottrazione);
  };

  //calcolo della molti checkando l'operatore, dividendo la stringa di partenza in 2 parti, convertendo e poi facendo la molti
  const molti = (str) => {
    str = String(str);
    let symbols = str.indexOf("*");
    let prima = str.slice(0, symbols);
    let secondo = str.slice(symbols + 1);
    const NewPrima = convertStringToNumber(prima);
    const NewSeconda = convertStringToNumber(secondo);
    let moltiplicazione = NewPrima * NewSeconda;
    moltiplicazione = String(moltiplicazione);
    setResult(moltiplicazione);
  };

  //calcolo della divi checkando l'operatore, dividendo la stringa di partenza in 2 parti, convertendo e poi facendo la divi
  const divis = (str) => {
    str = String(str);
    let symbols = str.indexOf("/");
    let prima = str.slice(0, symbols);
    let secondo = str.slice(symbols + 1);
    const NewPrima = convertStringToNumber(prima);
    const NewSeconda = convertStringToNumber(secondo);
    let divisione = NewPrima / NewSeconda;
    divisione = String(divisione);
    setResult(divisione);
  };

  const insertPlus = (e) => {
    let tmp = String(result);
    tmp = tmp.concat("+");
    setResult(tmp);
  };

  const insertMinus = (e) => {
    let tmp = String(result);
    tmp = tmp.concat("-");
    setResult(tmp);
  };

  const insertMolti = (e) => {
    let tmp = String(result);
    tmp = tmp.concat("*");
    setResult(tmp);
  };

  const insertDivis = (e) => {
    let tmp = String(result);
    tmp = tmp.concat("/");
    setResult(tmp);
  };

  const convertStringToNumber = (str) => {
    return Number(str);
  };

  //check del simbolo per fare l'operazione
  const checkSymbols = (str) => {
    let sy;
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === "+" ||
        str[i] === "-" ||
        str[i] === "/" ||
        str[i] === "*"
      ) {
        sy = str[i];
      }
    }
    return sy;
  };

  //switch case richiamando le operazioni in base al segno
  const checkOperation = () => {
    const sy = checkSymbols(result);
    switch (sy) {
      case "+":
        sum(result);
        break;

      case "-":
        sottr(result);
        break;

      case "*":
        molti(result);
        break;

      case "/":
        divis(result);
        break;
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={12} sx={{ position: "" }}>
        <h3 style={{ textAlign: "center" }}>{result === "" ? 0 : result}</h3>
      </Grid>
      <Grid item md={6}>
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "red" }}
          onClick={() => {
            setResult("");
          }}
        >
          C
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "green" }}
        >
          %
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "green" }}
          onClick={insertDivis}
        >
          /
        </Button>
      </Grid>

      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="7"
          onClick={handleChangeInput}
        >
          7
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="8"
          onClick={handleChangeInput}
        >
          8
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="9"
          onClick={handleChangeInput}
        >
          9
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "green" }}
          onClick={insertMolti}
        >
          X
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="4"
          onClick={handleChangeInput}
        >
          4
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="5"
          onClick={handleChangeInput}
        >
          5
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="6"
          onClick={handleChangeInput}
        >
          6
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "green" }}
          onClick={insertMinus}
        >
          -
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="1"
          onClick={handleChangeInput}
        >
          1
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="2"
          onClick={handleChangeInput}
        >
          2
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="3"
          onClick={handleChangeInput}
        >
          3
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "green" }}
          onClick={insertPlus}
        >
          +
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          value="0"
          onClick={handleChangeInput}
        >
          0
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button variant="contained" sx={{ width: "100%" }}>
          .
        </Button>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "red" }}
          onClick={checkOperation}
        >
          =
        </Button>
      </Grid>
    </Grid>
  );
}
