import React from 'react'

export default function Balance(props) {
    const amount=props.transactions?.map(transaction =>transaction.amount);
    const total =amount.reduce((amount , item)=>(amount +=item) , 0).toFixed(2);
  return (
    <div className='balance_box'>Balance: ${total}
    </div>
  )
}
