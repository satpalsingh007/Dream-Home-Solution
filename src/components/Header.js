import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAccordian, setIsAccordian] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const handleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
    console.log(isMenuOpen);
  };
  const handleAccordianToggle = () => {
    setIsAccordian((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="logo">
        DreamHouse <br /> Solution
      </div>
      <div className="header-navigation">
        <h4>
          <a href="#">Home</a>
        </h4>
        <h4
          onMouseEnter={handleMouseEnter} // Open dropdown on hover
          onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves
        >
          <a>
            Services{"  "}&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              class="bi bi-chevron-down"
              className={
                isDropdownOpen
                  ? "header-dropdown-button-active"
                  : "header-dropdown-button"
              }
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </a>
        </h4>
        <h4>
          <a href="#">Plans & Pricing</a>
        </h4>
        <h4>
          <a href="#">About us</a>
        </h4>
        <h4>
          <a href="#">FAQs</a>
        </h4>
        <h4>
          <a href="#">Contact Us</a>
        </h4>
        {/* Dropdown List */}
        <div
          className="header-dropdown-list"
          style={{
            transform: isDropdownOpen ? "translateY(0)" : "translateY(-20px)", // Adjusted the transform for smoothness
            opacity: isDropdownOpen ? 1 : 0,
            display: isDropdownOpen ? "flex" : "none",
          }}
          onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over the list
          onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves the list
        >
          <div>
            <span>Windows Istallation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <div>
            <span>Doors Istallation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <div>
            <span>Flooring Solution</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <div>
            <span>Kitchen Renovation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <div>
            <span>Roofing Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>
      </div>
      <label className="hamburger">
        <input
          onClick={handleMenuOpen}
          id="checkbox"
          type="checkbox" /*onChange={toggleMenu}*/
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
      <div
        className="menu-open"
        style={{
          transform: isMenuOpen ? "translateX(2vw)" : "translateX(100%)",
        }}
      >
        <div>
          <span>Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
        <div onClick={handleAccordianToggle}>
          <span>Services</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class={`bi bi-caret-right ${isAccordian ? "rotate" : ""}`}
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
        <section
          className={`accordion-content ${isAccordian ? "accordianOpen" : ""}`}
          // style={{display: isAccordian ? "block" : "none",}}
        >
          <p>Windows Installation</p>
          <p>Doors Installation</p>
          <p>Flooring Solution</p>
          <p>Kitchen Renovation</p>
          <p>Roofing Services</p>
        </section>

        <div>
          <span>About Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
        <div>
          <span>FAQs</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
        <div>
          <span>Contact Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
