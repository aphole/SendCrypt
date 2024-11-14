import React from 'react'
import styles from './TransactionStyles.module.css'

function TransactionCard(props) {
  return (
    

<div className={styles.card}>
    <img src={props.src} alt="GIF" />
    <p className={styles.date}>{props.date}</p>
    <p>From: <span>{props.from}</span></p>
    <p>To: <span>{props.to}</span></p>
    <p>Amount: <span>{props.amount}</span></p>
    <p>Message: <span>{props.message}</span></p>
</div>
   
  )
}

export default TransactionCard