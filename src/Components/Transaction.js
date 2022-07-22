import React from 'react';
import NewTransaction from './NewTransaction';
import "./Transaction.css";

export default function Transaction(props) {
    // console.log(props.transaction);
    // console.log(props.transaction[0]?.amount);
    // console.log(props.transaction[1]?.amount);
    // const map1 = props.transaction?.map((payload) => payload);
    // console.log(map1);
    // console.log(map1[0]?.amount);
    // console.log(map1[1]?.amount);
    // const data = JSON.stringify(map1);
   
    // localStorage.setItem('items', JSON.stringify(map1));
    // // console.log(JSON.parse(localStorage.getItem('items')));
    // console.log(localStorage.getItem('items'[0].amount));
// console.log(map1.amount);
  
    //   window.localStorage.setItem('defaultReportData', JSON.stringify(map1));
  

    // localStorage.setItem("testJSON", data);
// console.log(items);
    // // Retrieving data:
    // let text = localStorage.getItem("testJSON");

    // let obj = JSON.parse(text);
    // console.log(obj[0]?.amount);
    // console.log(map1);
    // console.log(typeof(data));
    
    return (
        <>
            <div className='transaction'>
                <h1>Transactions</h1>
                <div>
              {props.transaction.map(transaction=>(
                  <NewTransaction transaction={transaction}/>
              ))
              }
                </div>
            </div>
        </>
    )
}
