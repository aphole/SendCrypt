import React from 'react'
import styles from './FeaturesStyles.module.css'
import FeatureCard from './FeatureCard'
import Security from '../../assets/Security.png' 
import Payment from '../../assets/Payment.png' 
import Information from '../../assets/Information.png' 

function Features() {
  return (
    <div className={styles.main}>
        <div className={styles.featureCard}>
            <FeatureCard
            src={Security}
            h3="Strong Security"
            p="Secure transaction and record informtion with 2-factor authenticaion (2FA)."
            />
        </div>

        <div className={styles.featureCard}>
            <FeatureCard
            src={Payment}
            h3="Payment Options"
            p="Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer."
            />
        </div>

        <div className={styles.featureCard}>
            <FeatureCard
            src={Information}
            h3="Market Updated"
            p="The most accurate and trusted source for market cap, valuation, and cryptocurrency information."
            />
        </div>
    </div>
  )
}

export default Features