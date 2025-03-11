import React, { useRef } from 'react';
import homeimg from '../Images/Home.gif';
import ServiceAvail from './ServiceAvail';
import MovingText from './MovingText';
import Testimonial from './Testimonial';
import Faq from './Faq';
import AboutUsHome from './AboutUsHome';
import PricingPlans from './PricingPlan';
import Gallery from './Gallery';
import { Link } from "react-router-dom";

const Homepage = () => {
  // Create a reference for the PricingPlans component
  const pricingPlansRef = useRef(null);

  // Function to scroll to the PricingPlans component
  const scrollToPricingPlans = () => {
    if (pricingPlansRef.current) {
      pricingPlansRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {localStorage.getItem("serviceAvailable") !== "true" && <ServiceAvail />}

      <div className="homepage">
        <div className="homepage-left"><img src={homeimg} alt="Home" /></div>
        <div className="homepage-right">
          <h1>Transform Your Space with Expert Window, Door, and Kitchen Installations</h1>
          <p>At DreamHome Solutions, we provide expert installations for windows, doors, and kitchens. With precision and personalized designs, we ensure your home gets the upgrade it deserves. Whether enhancing security, boosting energy efficiency, or creating a stylish kitchen, we have the perfect solution for you.</p>
          <div className="homepage-buttons">
            <div className="homepage-buttons-right" onClick={scrollToPricingPlans}>Our plans</div>
            <div className="homepage-buttons-left"> <Link to={'/contact-us'} onClick={() => { window.scrollTo(0, 0);}}>Get started today</Link></div>
          </div>
        </div>
      </div>
      <div className="homepage-services">
        <div><i className="fa fa-wrench" aria-hidden="true"></i><h2>High-Quality Installations</h2> <p>Transform your home with our exceptional window, door, and kitchen installations designed to stand the test of time. We combine top-tier materials, professional craftsmanship, and meticulous attention to detail to ensure every project is both functional and visually stunning. With us, quality isn't just a promise—it's a guarantee.</p></div>
        <div><i className="fa fa-diamond" aria-hidden="true"></i><h2>Tailored Solutions to Fit Your Style</h2> <p>Every home is unique, and we believe your installations should reflect that. Whether you're modernizing your kitchen, upgrading your windows for better energy efficiency, or enhancing security with new doors, we offer customized solutions to meet your needs and preferences. Your dream home starts with a personalized touch.</p></div>
        <div><i className="fa fa-hourglass-end" aria-hidden="true"></i> <h2>Quick, Seamless, and Stress-Free Process</h2> <p>We know how important your time is. That's why we've designed our process to be simple, transparent, and efficient. From the moment you reach out, we handle every detail, from consultation and design to installation; so you can sit back and enjoy the transformation. Just fill out the form, and let us take care of the rest!</p></div>
      </div>
      <MovingText />
      <AboutUsHome />
      {/* Attach the ref to the PricingPlans component */}
      <div ref={pricingPlansRef}>
        <PricingPlans />
      </div>
      <Testimonial />
      <Faq />
      <Gallery />
    </>
  );
};

export default Homepage;