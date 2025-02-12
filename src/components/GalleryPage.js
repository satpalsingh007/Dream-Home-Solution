import React, { useState, useEffect } from 'react';
import '../../style/gallerypage.css';
import catgif from "../Images/catgif.gif"

const GalleryPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "https://i.postimg.cc/7Zf4Tm2X/office1.jpg",
        "https://i.postimg.cc/VNKjyMf7/office2.jpg",
        
        "https://i.postimg.cc/cJBFvrsY/office3.jpg",
        "https://i.postimg.cc/Bvf1dpfc/office4.jpg",
        "https://i.postimg.cc/bJJYMSr9/office5.jpg"
    ];

    const totalImages = images.length;

    useEffect(() => {
        const autoslide = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1 >= totalImages ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(autoslide);
    }, [totalImages]);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 < 0 ? totalImages - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1 >= totalImages ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='gallery-page'>
             <div id="shape1"></div>
             <div id="shape3"></div>
             {/* <div id="shape2"></div> */}
            <div className="gallery-container">
            <div className="gallery-slides" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={`gallery-slide ${index === activeIndex ? 'active' : ''}`}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="gallery-controls">
                <button className="control-button prev-button" onClick={handlePrev}>&lt;</button>
                <button className="control-button next-button" onClick={handleNext}>&gt;</button>
            </div>
            <ul className="gallery-dots">
                {images.map((_, index) => (
                    <li
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></li>
                ))}
            </ul>
            {/* <img className="catgif" src={catgif}/> */}
        </div>

        </div>
        
    );
};

export default GalleryPage;