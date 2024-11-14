import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ethers } from 'ethers'; // Import ethers.js

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Connected address:", address);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <p>Send<span>Crypt</span></p>
      </div>

      <div className={`${styles.navItems} ${isMobileMenuOpen ? styles.mobileMenu : ''}`}>
        <ul>
          <li>Markets</li>
          <li>Portfolio</li>
          <li>Products</li>
        </ul>
      </div>

      <div className={styles.connectButton}>
        <button onClick={connectWallet}>
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
        </button>
      </div>

      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Navbar;
