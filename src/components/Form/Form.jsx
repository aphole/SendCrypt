import React, { useState } from 'react';
import styles from './FormStyles.module.css';
import image1 from '../../assets/image1.png';

function Form() {
  // State to handle input values
  const [formData, setFormData] = useState({
    address: '',
    amount: '',
    gifLink: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftContent}>
        <img src={image1} alt="crypto" />
      </div>

      <div className={styles.rightContent}>
        <input
          type="text"
          name="address"
          placeholder="Receiver Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (ETH)"
          value={formData.amount}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gifLink"
          placeholder="Enter GIF Link"
          value={formData.gifLink}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button>Send Now</button>
      </div>
    </div>
  );
}

export default Form;
