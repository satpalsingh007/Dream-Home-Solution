import homeimg from '../Images/Home.gif'
import ServiceAvail from './ServiceAvail';
import MovingText from './MovingText';
import Testimonial from './Testimonial';
import Faq from './Faq';
import AboutUsHome from './AboutUsHome';
const Homepage = ()=>{
    return (
        <>
       {localStorage.getItem("serviceAvailable") !== "true" && <ServiceAvail />}

        <div className="homepage">
            <div className="homepage-left"><img src={homeimg}></img></div>
            <div className="homepage-right">
                <h1>Transform Your Space with Expert Window, Door, and Kitchen Installations</h1>
                <p>At DreamHome Solutions, we provide expert installations for windows, doors,and kitchens. With precision and personalized designs, we ensure your home gets the upgrade it deserves. Whether enhancing security, boosting energy efficiency, or creating a stylish kitchen, we have the perfect solution for you.</p>
                <div className="homepage-buttons">
                <div className="homepage-buttons-left">Get started today</div>
                <div className="homepage-buttons-right">Our plans</div>
                </div>
            </div> 
        </div>
        <div className="homepage-services">
            <div> <h2>High-Quality Installations</h2> <p>Transform your home with our exceptional window, door, and kitchen installations designed to stand the test of time. We combine top-tier materials, professional craftsmanship, and meticulous attention to detail to ensure every project is both functional and visually stunning. With us, quality isn't just a promise—it's a guarantee.
            </p></div>
            <div><h2>Tailored Solutions to Fit Your Style</h2> <p>Every home is unique, and we believe your installations should reflect that. Whether you're modernizing your kitchen, upgrading your windows for better energy efficiency, or enhancing security with new doors, we offer customized solutions to meet your needs and preferences. Your dream home starts with a personalized touch.
            </p></div>
            <div><h2>Quick, Seamless, and Stress-Free Process</h2> <p>We know how important your time is. That's why we've designed our process to be simple, transparent, and efficient. From the moment you reach out, we handle ever y detail—from consultation and design to installation—so you can sit back and enjoy the transformation. Just fill out the form, and let us take care of the rest!
            </p></div>
        </div>
        <MovingText/>
        <AboutUsHome/>
        <Testimonial/>
        <Faq/>
        </>
        
    )
}
export default Homepage;