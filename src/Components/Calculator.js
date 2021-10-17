import React, { useEffect, useState } from "react";
import {Grid, Button, Box} from '@mui/material'


export default function Calculator(){

    const [result, setResult] = useState("");


    const handleChangeInput = (e) =>{
        let arr = String(result);
        arr = arr.concat(e.target.value);
        
        setResult(arr)
    }

    const sum = (a,b) =>{
        return a + b;
    }

    useEffect(()=>{

        console.log(result)

    }, [result]);

    const insertPlus = (e) =>{
        let tmp = String(result);
        tmp = tmp.concat("+");
        setResult(tmp);
    }


    const convertStringToNumber = (str) =>{
       
        return Number(str);
    }

    const checkOperation = ()=>{
        
        let symbols = result.indexOf('+');
        let prima = result.slice(0,symbols);
        let secondo = result.slice(symbols +1);
        const NewPrima = convertStringToNumber(prima)
        const NewSeconda = convertStringToNumber(secondo);
        let somma = sum(NewPrima, NewSeconda);
        somma = String(somma);
        setResult(somma)
        
    }

    return(
        
        <Grid container spacing={2}>
            <Grid item md={12} sx={{position:""}}>
                {result === '' ? 0 : result}
            </Grid>
            <Grid item md={6}>
                <Button variant="contained" sx={{width:"100%"}}>
                    C
                </Button>
            </Grid>
            <Grid item md={3}>
            <Button variant="contained" sx={{width:"100%"}}>
                    %
            </Button>
            </Grid>
            <Grid item md={3}>
            <Button variant="contained" sx={{width:"100%"}}>
                    /
            </Button>
            </Grid>
            
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="7" onClick={handleChangeInput}>
                    7
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="8" onClick={handleChangeInput}>
                    8
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="9" onClick={handleChangeInput}>
                    9
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}}>
                    X
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="4" onClick={handleChangeInput}>
                    4
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="5" onClick={handleChangeInput}>
                    5
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="6" onClick={handleChangeInput}>
                    6
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}}>
                    -
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="1" onClick={handleChangeInput}>
                    1
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="2" onClick={handleChangeInput}>
                    2
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} value="3" onClick={handleChangeInput}>
                    3
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} onClick={insertPlus}>
                    +
                </Button>
            </Grid>
            <Grid item md={6}>
                <Button variant="contained" sx={{width:"100%"}} value="0" onClick={handleChangeInput}>
                    0
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}}>
                    .
                </Button>
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{width:"100%"}} onClick={checkOperation}>
                    =
                </Button>
            </Grid>

        </Grid>
        
    )
}