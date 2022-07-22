import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Transaction from './Components/Transaction';

function App(props) {
  
  const [transactions , updateTransaction] =useState([]);
  const [expense , updateExpense] =useState(0);
  const [income , updateIncome] =useState(0);
    const onSaveHandler = (payload)=>{
        const transactionArray= [...transactions];
        console.log(transactionArray);
        transactionArray.push(payload);
        updateTransaction(transactionArray);
        
    };


    const calculateBalance = ()=>{
      let exp=0;
      let inc=0;
      transactions.map((payload)=>{
        // console.log((Number(payload.amount))+100);
        // console.log(typeof(exp));
        payload.type==="EXPENSE"
        ?(exp = exp +Number(payload.amount))
        :(inc = inc + Number(payload.amount));
      });
      updateExpense(exp);
      updateIncome(inc);
    };
    useEffect(() => calculateBalance(), [transactions]);
  return (
    <>
    <Header/>
    <Main onsave={onSaveHandler} expense={expense} income={income} />
    <Transaction transaction={transactions}/>
    </>
  );
}

export default App;
