import React, { useState, useEffect } from "react";
import "../../style/gallery.css"; // Import the CSS file
import windowgallery from "../Images/windowgallery.jpg";
import kitchengallery from "../Images/kitchengallery.jpg";
import roofgallery from "../Images/roofgallery.jpg";
import doorgallery from "../Images/doorgallery.jpg";
import floorgallery from "../Images/floorgallery.jpg";
import interiorgallery from "../Images/interiorgallery.jpg";
import windowfull from "../Images/windowfullimage.jpg";
import kitchenfull from "../Images/kitchenfullimage.jpg";
import rooffull from "../Images/rooffullimage.jpg";
import doorfull from "../Images/doorfullimage.jpg";
import floorfull from "../Images/floorfullimage.jpg";
import interiorfull from "../Images/interiorfullimage.jpg";


const Gallery = () => {
  // Use effect to initialize the jQuery script for overlay functionality
  useEffect(() => {
    const handleOverlayOpen = (e) => {
      const parentElement = e.target.closest(
        '[unique-script-id="w-w-dm-id"] .project'
      );
      const overlay = parentElement.querySelector(".overlay");
      overlay.style.display = "block";
    };

    const handleOverlayClose = () => {
      const overlays = document.querySelectorAll(".overlay");
      overlays.forEach((overlay) => {
        overlay.style.display = "none";
      });
    };

    // Attach event listeners for the buttons
    const btns = document.querySelectorAll(".btn-box");
    btns.forEach((btn) => {
      btn.addEventListener("click", handleOverlayOpen);
    });

    const closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", handleOverlayClose);
    });

    // Cleanup the event listeners when component unmounts
    return () => {
      btns.forEach((btn) => {
        btn.removeEventListener("click", handleOverlayOpen);
      });

      closeBtns.forEach((btn) => {
        btn.removeEventListener("click", handleOverlayClose);
      });
    };
  }, []);

  return (
    <div className="gallery_1" unique-script-id="w-w-dm-id">
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <p className="text-blk heading">Gallery</p>
          <p className="text-blk subHeading">
            Lorem ipsum dolor sit amet, consect etur adip iscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna al
          </p>
          <div className="responsive-container-block imgContainer">
            {/* Project 1 */}
            <div className="project project1">
              <img
                className="smallImage"
                src={doorgallery}
                alt="Project 1"
              />
              <div className="overlay">
                <div className="overlay-inner">
                  <button className="close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                  <div className="hdImgs">
                    <img
                      className="squareImg"
                      src={doorfull}
                      alt="Project 1"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project project2">
              <img
                className="smallImage"
                src={kitchengallery}
                alt="Project 2"
              />
              <div className="overlay">
                <div className="overlay-inner">
                  <button className="close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                  <div className="hdImgs">
                    <img
                      className="squareImg"
                      src={kitchenfull}
                      alt="Project 2"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project project3">
              <img
                className="smallImage"
                src={interiorgallery}
                alt="Project 3"
              />
              <div className="overlay">
                <div className="overlay-inner">
                  <button className="close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                  <div className="hdImgs">
                    <img
                      className="squareImg"
                      src={interiorfull}
                      alt="Project 3"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project project4">
              <img
                className="smallImage"
                src={windowgallery}
                alt="Project 4"
              />
              <div className="overlay">
                <div className="overlay-inner">
                  <button className="close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                  <div className="hdImgs">
                    <img
                      className="squareImg"
                      src={windowfull}
                      alt="Project 4"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project project5">
              <img
                className="smallImage"
                src={floorgallery}
                alt="Project 5"
              />
              <div className="overlay">
                <div className="overlay-inner">
                  <button className="close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                  <div className="hdImgs">
                    <img
                      className="squareImg"
                      src={floorfull}
                      alt="Project 5"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project project6">
              <img
                className="smallImage"
                src={roofgallery}
                alt="Project 6"
              />
              <div className="overlay">
                <div className="overlay-inner">
                  <button className="close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </button>
                  <div className="hdImgs">
                    <img
                      className="squareImg"
                      src={rooffull}
                      alt="Project 6"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
