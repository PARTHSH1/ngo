import React from 'react';
import './Stories.css'; // Add your styles here
import image1 from './assets/2.webp';
const StoriesSection = () => {
    return (
        <div className="main-container">
  {/* Left Side */}
  <div className="left-side">
    <h2>In the middle of the current crisis, Gaza is under a siege that has trapped thousands of children.</h2>
    <p>
      With the increasing air raids and violence, the situation has worsened. Unfortunately, children are bearing the brunt of these dire circumstances.
    </p>
    <p>
      We have a clear and simple mission: to deliver nutritious food and clean water to the people who are most in need of it, giving them not only nourishment but also a glimpse of optimism in their difficult times.
    </p>
    <div className="image-container">
      <img src={image1} alt="Child in crisis" />
    </div>
    <p>
      In spite of the daunting challenges, we are proud to share that we provide essential food aid to those in need. This aid includes canned meat, cheese, water, loose milk, canned beans, dry dates, and black honey. These items provide a source of nutrition and sustenance to those who are struggling.
    </p>
    <div className="stats-container">
      <div className="stat-box">
        <h3>+30,000</h3>
        <p>lives have been tragically lost in Gaza since October</p>
      </div>
      <div className="stat-box">
        <h3>Over 40%</h3>
        <p>casualties in Gaza are children</p>
      </div>
      <div className="stat-box">
        <h3>+8,600</h3>
        <p>children in Gaza have been injured</p>
      </div>
    </div>
  </div>

  {/* Right Side */}
  <div className="right-side">
    <h3>Participants</h3>
    <ul data-qa="recent-donations-list" className="donation-list">
      <li data-qa="recent-donations-item" className="donation-item">
        <div className="donation-info">
          <span dir="auto" data-qa="recent-donations-name">Jalaludin Mustakim</span> 
          <span data-qa="recent-donations-donated-amount" className="donation-amount">
            donated <strong>$67.39</strong>
          </span>
        </div>
        <div data-qa="recent-donations-location" className="donation-location">
          <span aria-hidden="true" className="location-icon">
            <img src="https://static.fundraiseup.com/common-images/country-flags/SG.png" width="16" alt="" />
          </span> 
          <div className="location-place">Singapore, Singapore</div>
        </div>
        <div data-qa="recent-donations-date" className="donation-date">Sep 20, 2024</div>
      </li>
      <li data-qa="recent-donations-item" className="donation-item">
        <div className="donation-info">
          <span dir="auto" data-qa="recent-donations-name">Saaidan Abu Hasan</span> 
          <span data-qa="recent-donations-donated-amount" className="donation-amount">
            donated <strong>$13.08</strong>
          </span>
        </div>
        <div data-qa="recent-donations-location" className="donation-location">
          <span aria-hidden="true" className="location-icon">
            <img src="https://static.fundraiseup.com/common-images/country-flags/MY.png" width="16" alt="" />
          </span> 
          <div className="location-place">Kuala Lumpur, Malaysia</div>
        </div>
        <div data-qa="recent-donations-date" className="donation-date">Sep 7, 2024</div>
      </li>
      <li data-qa="recent-donations-item" className="donation-item">
        <div className="donation-info">
          <span dir="auto" data-qa="recent-donations-name">Sunil TM</span> 
          <span data-qa="recent-donations-donated-amount" className="donation-amount">
            donated <strong>$13.16</strong>
          </span>
        </div>
        <div data-qa="recent-donations-location" className="donation-location">
          <span aria-hidden="true" className="location-icon">
            <img src="https://static.fundraiseup.com/common-images/country-flags/IN.png" width="16" alt="" />
          </span> 
          <div className="location-place">Bengaluru, India</div>
        </div>
        <div data-qa="recent-donations-date" className="donation-date">Sep 1, 2024</div>
      </li>
    </ul>
  </div>
</div>

    );
};

export default StoriesSection;
