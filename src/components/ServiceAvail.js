import React, { useState } from "react";

const ServiceAvail = () => {
  const [message, setMessage] = useState("‎ ");
  const [messageColor, setMessageColor] = useState("red");
  const [transformValue, setTransformValue] = useState("translateY(0)"); // Initially at top (visible)

  // Function to check service availability
  const checkService = () => {
    const pincode = document.getElementById("pincode").value;

    // Define the regex to match exactly 5 digits (standard US zip code format)
    const usaPincodePattern = /^[0-9]{5}$/;

    // Check if the pincode matches the 5-digit format
    if (usaPincodePattern.test(pincode)) {
      // Convert pincode to a number to check the range
      const pincodeNumber = parseInt(pincode, 10);

      // Check if the pincode is within the valid range
      if (pincodeNumber >= 501 && pincodeNumber <= 99950) {
        setMessageColor("green");
        setMessage("Service is available in your area!");
        setTimeout(() => setTransformValue("translateY(-100%)"), 1000); // Move up after 1 second
      } else {
        setMessageColor("red");
        setMessage("Sorry, service is not available in your location.");
      }
    } else {
      setMessageColor("red");
      setMessage("Please enter a valid 5-digit U.S. pincode.");
    }
  };

  return (
    <div
      className="service-avail"
      style={{
        transform: transformValue, // Apply the transform for smooth movement
        transition: "transform 1s ease-out", // Smooth transition for the translateY movement
      }}
    >
        <div className="logo">
        DreamHouse <br /> Solution
      </div>
      <div className="service-avail-text">
        <h2>Check Service Availability</h2>
        <p>
          Enter your pincode to see if our service is available in your area.
        </p>
      </div>
      <div className="service-avail-input">
        <input type="text" id="pincode" placeholder="Enter Pincode" />
        <button onClick={checkService}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
      </div>

      <div
        className="message"
        style={{
          color: messageColor,
          transition: "color 0.5s ease-out", // Smooth transition for message color
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default ServiceAvail;
