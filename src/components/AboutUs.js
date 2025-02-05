import aboutbanner from "../Images/about-vector.png";
const AboutUs =()=>{
    return (
        <div className="about-us">
           <div className="about-us-banner">
             <h2>About-Us</h2>
             <img src={aboutbanner} className="about-banner-img" alt="about banner" />
             <p className="about-us-sun"></p>
             

           </div>
        </div>
    )
}
export default AboutUs;