import React, { useState, useEffect } from 'react';
import './HoverDonation.css'; // Make sure to import your CSS file

const HoverDonation = () => {  // Rename to start with uppercase
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  useEffect(() => {
    // Show the panel automatically when the component mounts (after a slight delay if needed)
    setIsPanelVisible(true);
  }, []);

  const closePanel = () => {
    setIsPanelVisible(false);
  };

  return (
    <div>
      {isPanelVisible && (
        <div id="subscriptionPanel" className="panel-overlay">
          <div className="panel-content">
            <span id="closePanel" className="close" onClick={closePanel}>
              &times;
            </span>
            <h2>SUBSCRIBE AND STAY CONNECTED WITH US</h2>
            <p>
              Be the first to know about our moving stories, new projects, and
              opportunities. Join our community of changemakers today!
            </p>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="E-mail ID" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverDonation;
