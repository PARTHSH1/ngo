import React from 'react';
import NavBar from './NavBar';
import Body from './Body';
import SliderComponent from './SliderComponent';
import HoverDonation from './HoverDonation.jsx';
import ThirdContainer from './ThirdContainer.js';
import Footer from './Footer.js';
import VideoSlider from './VideoSlider.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body/>
      <SliderComponent/>
      <HoverDonation/>
      <ThirdContainer/>
      <VideoSlider/>
      <Footer/>
    </div>
  );
}

export default App;
