import React from 'react'
import styles from './FooterStyles.module.css'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

function Footer() {
  return (
    
    
    <div className={styles.footer}>
        <div className={styles.logo}>
            <p>Send<span>Crypt</span></p>
        </div>

        <div className={styles.social}>
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={github} alt="github" />
        </div>

        <div className={styles.copyright}>
            <p>Copyright &copy; {new Date().getFullYear()} SendCrypt. All rights reserved</p>
        </div>
    </div>
  
  )
}

export default Footer