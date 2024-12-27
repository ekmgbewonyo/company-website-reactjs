import React from 'react';

function About() {
  return (
    <>
      <div style={{ marginTop: '10rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
      <h2 className="main-title text-center about-h2">ABOUT US</h2>

        <div className="row">
          {/* Carousel Section on the Left */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./ELORM CONSULT II.png" className="d-block w-100 img-fluid logo-img" alt="Consult Elorm Logo" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section on the Right */}
          <div className="col-md-6">
            <p className="main-p" style={{ textAlign: 'justify' }}>
            Welcome to Consult Elorm, your gateway to global opportunities! Established in January 2023, 
            we are a full-service travel agency dedicated to helping individuals and professionals explore 
            the world, advance their careers, and embrace new cultures.
            Initially focused on assisting nursing professionals in pursuing careers and education abroad,
            our services have grown to encompass a wider audience. We specialize in securing institutional 
            clearances, foreign certificate verifications, career counseling, and international education 
            guidance.
            Building on our success—with over 200 nursing clearances, 400+ foreign verifications, and 20+ 
            visas secured—we now proudly facilitate global travel and job placements across various industries, 
            empowering individuals to seize new opportunities and experience life beyond borders.
            Whether you're seeking adventure, cultural exploration, or career growth, Consult Elorm is here to 
            provide personalized support for every step of your journey. From visa applications to career 
            development, and from tailored travel plans to professional placements, our team is committed to delivering exceptional service rooted in quality and integrity.

            Your journey to discovering the world starts here. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
