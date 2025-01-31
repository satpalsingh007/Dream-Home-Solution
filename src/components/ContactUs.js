import { useState } from "react";
import mailimg from '../Images/Contact.gif'
import QuickSupport from "./QuickSupport";
const ContactUs = () => {
    const [selectedService, setSelectedService] = useState('');
    const [selectedPlan, setSelectedPlan] = useState('');
  return (
    <>
      <div className="contactus-form-section">
        <div className="contactus-left">
          <div className="contactus-left-text">
            <h2>
              Let’s Begin Your <br /> Home Transformation!
            </h2>
            <p>
              We're excited to help you take the next step toward enhancing your
              home. Whether you're upgrading your windows, adding new doors, or
              transforming your kitchen, our team is here to make the process
              smooth and effortless. Simply fill out the form below with your
              details, and we'll provide a personalized quote and schedule your
              consultation. Your dream space is closer than you think!
            </p>
          </div>
          <img src={mailimg}></img>
        </div>
        <div className="contactus-right">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="number" placeholder="Phone number" required />
            <input
              list="services"
              id="service"
              name="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)} // Handle input change
              placeholder="Select a Service"
            />
            <datalist id="services">
              <option value="Windows Installation" />
              <option value="Doors Installation" />
              <option value="Flooring Solution" />
              <option value="Kitchen Renovation" />
              <option value="Roofing Services" />
            </datalist>
            <input
              list="plans"
              id="plan"
              name="plan"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)} // Handle input change
              placeholder="Select a Plan"
            />
            <datalist id="plans">
              <option value="Basic" />
              <option value="Standard" />
              <option value="Premium" />
            </datalist>

            <textarea placeholder="Message" required></textarea>
            <button className="service-button" type="submit" value="Submit" >Submit</button>
          </form>
        </div>
      </div>
      <QuickSupport/>
    </>
  );
};
export default ContactUs;
