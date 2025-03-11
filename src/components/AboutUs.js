import aboutbanner from "../Images/about-vector.png";
import WhyUs from "./WhyUs";
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* <div className="about-us-banner">
        <h2>About-Us</h2>
        <img
          src={aboutbanner}
          className="about-banner-img"
          alt="about banner"
        />
        <p className="about-us-sun"></p>
      </div> */}
      <div id="page2bottom">
        <div id="part1">
          <h2>Who Are We?</h2>
          <p><span>W</span>e are a renowned team of experienced architects, designers, and engineers, dedicated to providing exceptional home upgrades and custom home solutions. Our commitment to excellence extends beyond the physical construction of your home. We strive to create beautiful, functional, and sustainable spaces that meet the needs of our clients and their families.</p>
          
        </div>
        <div id="part2">
        <iframe
       
        src="https://www.youtube.com/embed/aL27fX5kv9U"
        title="Introduction To WiseGPT"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
          <p>
            We love to create, we love to solve, we love to collaborate, and we
            love to turn amazing ideas into reality. We’re here to partner with
            you through every step of the process and know that relationships
            are the most important things we build.
          </p>
        </div>
        <div id="circle">
          <div id="circle1"></div>
          <div id="circle2"></div>
        </div>
      </div>
      <WhyUs/>
    </div>
  );
};
export default AboutUs;
