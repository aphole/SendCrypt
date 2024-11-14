import React from "react";
import styles from "./TransactionStyles.module.css";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";
import TransactionCard from "./TransactionCard";

function Transaction() {
  return (
    <>
      <div className={styles.title}>
        <p>Latest Transaction</p>
      </div>
      <div className={styles.main}>
        <TransactionCard
          src={gif1}
          date="2024-08-29"
          from="Qewroihdmnjsev...wwdqF"
          to="RTDfefi...vkjdfhgu"
          amount="000.04 ETH"
          message="Hello World"
        />

        <TransactionCard
          src={gif2}
          date="2024-08-29"
          from="Qewroihdmnjsev...wwdqF"
          to="RTDfefi...vkjdfhgu"
          amount="000.04 ETH"
          message="Hello World"
        />

        <TransactionCard
          src={gif3}
          date="2024-08-29"
          from="Qewroihdmnjsev...wwdqF"
          to="RTDfefi...vkjdfhgu"
          amount="000.04 ETH"
          message="Hello World"
        />

<TransactionCard
          src={gif3}
          date="2024-08-29"
          from="Qewroihdmnjsev...wwdqF"
          to="RTDfefi...vkjdfhgu"
          amount="000.04 ETH"
          message="Hello World"
        />

<TransactionCard
          src={gif3}
          date="2024-08-29"
          from="Qewroihdmnjsev...wwdqF"
          to="RTDfefi...vkjdfhgu"
          amount="000.04 ETH"
          message="Hello World"
        />

<TransactionCard
          src={gif3}
          date="2024-08-29"
          from="Qewroihdmnjsev...wwdqF"
          to="RTDfefi...vkjdfhgu"
          amount="000.04 ETH"
          message="Hello World"
        />
        
      </div>
    </>
  );
}

export default Transaction;
