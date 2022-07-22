import React, { useState } from 'react';
import "./Main.css";

export default function Main(props) {
    const [isAddTxnVisible, toogleaddtxn] = useState(false);
    const [amount ,setAmount] =useState("");
    const [desc ,setDesc] =useState("");
    const [type ,setType] =useState("EXPENSE");

    const handleAmount=(e)=>{
        setAmount(e.target.value);
    }
    const handleDesc=(e)=>{
        setDesc(e.target.value);
    }
    const handleType=(e)=>{
        setType(e.target.value);
    }

    const handleclick=(e)=>{
     e.preventDefault();
     console.log(amount ,desc,type);
    const expense={
        amount:amount,
        desc:desc,
        type:type
    }
    props.onsave(expense);
    setAmount("");
    setDesc("");
    setType("");
    }
    return (
        <>
            <div className='balance'>
                <div className='balance_box'>Balance: ₹{props.income - props.expense}
                    <button className='btn_add' onClick={() => toogleaddtxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel" : "ADD"}</button></div>
                {isAddTxnVisible && <div className='form' toogleaddtxn={toogleaddtxn}>
                    <input className='input_amount' placeholder='Amount' type="number" value={amount} onChange={handleAmount}></input>
                    <input className='input_desc' placeholder='Description' value={desc} onChange={handleDesc}></input>

                    <input type="radio" id='expense' name='type' value="EXPENSE" checked={type==="EXPENSE"} onChange={handleType}></input>
                    <label htmlFor='expense'>Expense</label>

                    <input type="radio" id='income' name='type' value="INCOME" checked={type==="INCOME"} onChange={handleType}></input>
                    <label htmlFor='Income'>Income</label>
                    <button onClick={handleclick}>Add Transaction</button>
                </div>
                }
                <div className='box'>
                    <p className='box_expense'>Expenses<span className='span' style={{color:"red"}}>₹{props.expense}</span></p>
                    <p className='box_expense'>Income<span className='span' style={{color:"green"}}>₹{props.income}</span></p>
                </div>
            </div>
        </>
    )
}
