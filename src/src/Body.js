import React, { useState } from 'react';
import './Body.css';

const Body = () => {
  const [amount, setAmount] = useState(''); // State to manage the selected amount

  // Function to update the amount when a radio button is clicked
  const updateAmount = (value) => {
    setAmount(`₹${value}`);
  };

  return (
    <div className="body-container">
      <div className="left-content">
        <h1>
          Donation For <span>Crisis</span>.<br /> For Humanity. For People
        </h1>
        <p>
          Save Lives. Your contribution can provide essential aid to those
          affected by the ongoing crisis in Gaza. Every contribution makes a
          difference. The people of Gaza need your support. Your donation will
          help deliver food, medical supplies, and other critical resources.
        </p>
        <button className="donate-button">Donate Now</button>
      </div>

      <div className="donation-box">
        <h2>SUPPORT THE CAUSE</h2>
        <button className="donate-difference">MAKE A DIFFERENCE</button>

        <div className="donation-amounts">
          <label>
            <input
              type="radio"
              name="amount"
              value="1500"
              onClick={() => updateAmount(1500)}
            />{' '}
            ₹1500
          </label>
          <label>
            <input
              type="radio"
              name="amount"
              value="3000"
              onClick={() => updateAmount(3000)}
            />{' '}
            ₹3000
          </label>
          <label>
            <input
              type="radio"
              name="amount"
              value="6000"
              onClick={() => updateAmount(6000)}
            />{' '}
            ₹6000
          </label>
          <label>
            <input
              type="radio"
              name="amount"
              value="12000"
              onClick={() => updateAmount(12000)}
            />{' '}
            ₹12000
          </label>
        </div>

        <p className="donation-help-text">
          YOUR DONATION WILL HELP FOR THE EDUCATION OF 1 CHILD FOR 3 MONTHS
        </p>

        <div className="donation-other">
          <input
            type="text"
            id="otherAmount"
            value={amount}
            placeholder="₹Other Amount"
            readOnly
          />
        </div>

        <button className="donate-now">DONATE NOW</button>
      </div>
    </div>

    
  );
};

export default Body;
