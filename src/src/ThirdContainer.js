import React, { useState } from 'react';
import './ThirdContainer.css';
import img1 from './assets/Desktop-Version-1.png'
import img2 from './assets/Desktop-Version-2.png'
import img3 from './assets/16.jpg'
import img4 from './assets/Desktop-Version-3.png'

const ThirdContainer = () => {
    return (
        <>
            <div id="container">
                <h1>OUR EFFORTS TOWARDS</h1>
                <h2>"Established in 2024, our organization is devoted to making a significant impact and fostering a better world. We are driven by a mission to address global challenges through innovative and compassionate projects.</h2>
                <h2> Our efforts span various critical areas, including humanitarian aid, development, and crisis relief. One of our prominent initiatives is Gaza relief, where we work to provide essential support and resources to those in need.
                </h2>
            </div>
            <div class="vision-container">
                <div class="vision-item">
                    <img src={img1} alt="Education Icon" />
                    <h3>EDUCATION</h3>
                    <p>Education, nutrition, and holistic development of children</p>
                </div>
                <div class="vision-item">
                    <img src={img2} alt="Healthcare Icon" />
                    <h3>HEALTHCARE</h3>
                    <p>Taking healthcare services to doorsteps of hard-to-reach communities</p>
                </div>

                <div class="vision-item">
                    <img src={img3} alt="Women Empowerment Icon" />
                    <h3>WOMEN EMPOWERMENT</h3>
                    <p>Empowering adolescent girls & women through community engagement</p>
                </div>

                <div class="vision-item">
                    <img src={img4} alt="Livelihood Icon" />
                    <h3>LIVELIHOOD</h3>
                    <p>Skill training and placement support for underprivileged youth</p>
                </div>

            </div>
        </>
    );

}
export default ThirdContainer;