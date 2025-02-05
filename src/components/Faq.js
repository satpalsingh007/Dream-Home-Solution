import React, { useState } from "react";
import "../../style/faq.css"; // Import the external CSS file
import questionMarks from "../Images/question-marks.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="process">
      <div className="process__container">
        <div className="process__intro intro">
          <h2 className="process__title title">FAQs </h2>
          <div className="process__text text">
          Your Questions, Our Expertise – Clear Answers for Every Home Upgrade.
          </div>
          <img src={questionMarks}/>
        </div>
        <div className="process__accordions">
          <ul className="accordions__list">
            {[...Array(5)].map((_, index) => {
              const isOpen = openIndex === index;
              const titles = [
                "What types of windows do you install?",
                "How long does it take to install new doors?",
                "Are your kitchen installations customizable?",
                "How do you ensure energy efficiency in installations?",
                "What makes Dream House Solutions different from other providers?",
              ];
              const descriptions = [
                "We offer a variety of window options, including double-glazed, energy-efficient, and custom-designed windows. Our team helps you choose the best style, material, and finish for your home.",
                "Installation time varies depending on the door type, but generally, it takes 1-2 days. Our skilled team works efficiently to ensure minimal disruption and a perfect fit.",
                "Yes! We provide fully customizable kitchen installations, allowing you to choose layouts, materials, and finishes to match your style and functionality needs.",
                "We use high-quality, energy-efficient materials, such as insulated doors and windows. Our expert installations help improve your home’s energy performance, reducing heating and cooling costs.",
                "Our focus is on precision, quality, and personalized service. We tailor each installation to your needs, ensuring your home receives a stylish upgrade with lasting value.",
              ];
              return (
                <li
                  key={index}
                  className={`accordions__item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="accordions__control"
                    aria-expanded={isOpen}
                    onClick={() => handleAccordionClick(index)}
                  >
                    <span className="accordions__number">{`0${
                      index + 1
                    }`}</span>
                    <span className="accordions__title">{titles[index]}</span>
                    <span className="accordions__icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-plus-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="accordions__content text"
                    aria-hidden={!isOpen}
                  >
                    <p>{descriptions[index]}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
