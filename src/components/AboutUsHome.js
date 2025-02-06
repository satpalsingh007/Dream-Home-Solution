import React from "react";
import "../../style/aboutushome.css"; // Import the separate CSS file

const AboutUsHome = () => {
  return (
    <div className="about-section">
      <div id="shape1"></div>
      <div id="shape2"></div>
        <div className="about-section-left" >
          <div className="about-section-img-container">
          <img className="about-section-img" title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt=""/>
          </div>
          
        </div>
        <div className="about-section-right" >
          <h2>About Us</h2>
          <img className="about-section-img-below" title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt=""/>
          <p>
            <span>W</span>e are a renowned team of experienced architects, designers, and engineers, dedicated to providing exceptional home upgrades and custom home solutions. Our commitment to excellence extends beyond the physical construction of your home. We strive to create beautiful, functional, and sustainable spaces that meet the needs of our clients and their families.
          </p>
          <p>
            We are a renowned team of experienced architects, designers, and engineers, dedicated to providing exceptional home upgrades and custom home solutions. Our commitment to excellence extends beyond the physical construction of your home. We strive to create beautiful, functional, and sustainable spaces that meet the needs of our clients and their families.
          </p>
          
          <div className="homepage-buttons-right">Read More</div>
        </div>

    </div>
   
  );
};

export default AboutUsHome;
