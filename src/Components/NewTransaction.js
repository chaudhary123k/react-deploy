import React from 'react';
import "./NewTransaction.css";
const NewTransaction=({transaction})=> {
    const color=transaction.type==="EXPENSE" ? "red" : "green";
  return (
    <div className='new' style={{backgroundColor : `${color}` , color:"white"}}>
      <span>{transaction.amount}</span>
      <span>{transaction.desc}</span>
      <span>{transaction.type}</span>
    </div>
  )
}

export default NewTransaction
