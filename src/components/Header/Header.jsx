import React from 'react'
import styles from './HeaderStyles.module.css'
import image1 from '../../assets/image1.png';

function Header() {
  return (
    <div className={styles.main}>
        <div className={styles.contentLeft}>
            <h1>
                Start Sending Crypto Currency Easily
            </h1>
            <p>Join the world largest crypto exchange.</p>
            <button>Connect Wallet</button>
        </div>
        <div className={styles.contentRight}>
            <img src={image1} alt="Crypto Graphic" />
        </div>
    </div>
  )
}

export default Header