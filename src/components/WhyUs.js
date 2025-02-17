import React from 'react';
import '../../style/whyus.css';
import 'font-awesome/css/font-awesome.min.css';


const WhyUs = () => {
  return (
    <div className="feat">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h3>Why Choose Us</h3>
            <p>
              When you choose us, you'll feel the benefit of 10 years' experience in Web Development. 
              Because we know the digital world and how to handle it. With working knowledge of online, 
              SEO, and social media.
            </p>
          </div>

          <div className='item-container'>
            <div className="item">
              <span className="icon feature_box_col"><i className="fa fa-diamond"></i></span>
              <h6>Modern Design</h6>
              <p>We use the latest technology for the latest world because we know the demand of people.</p>
            </div>
            <div className="item">
              <span className="icon feature_box_col"><i className="fa fa-hourglass-half"></i></span>
              <h6>24 x 7 User Support</h6>
              <p>If our customer has any problem or query, we are always happy to help.</p>
            </div>
            <div className="item">
              <span className="icon feature_box_col"><i className="fa fa-money"></i></span>
              <h6>Affordable cost</h6>
              <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyUs;
