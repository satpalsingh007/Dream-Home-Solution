import { useState } from "react";
import mailimg from '../Images/Contact.gif'
import QuickSupport from "./QuickSupport";
const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "93885acc-16ba-4052-b0db-4c9e2bccca0f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form submitted successfully!");
    }
    else {
      alert("Form submission failed. Please try again."); // Show error alert
    }
  };
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
          <form onSubmit={onSubmit}>
            <input name="Name" type="text" placeholder="Name" required />
            <input name="Email" type="email" placeholder="Email" required />
            <input name="Phone No." type="number" placeholder="Phone number" required />
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

            <textarea name="text" placeholder="Message" required></textarea>
            <button className="service-button" type="submit" value="Submit" >Submit</button>
          </form>
        </div>
      </div>
      <QuickSupport/>
    </>
  );
};
export default ContactUs;
