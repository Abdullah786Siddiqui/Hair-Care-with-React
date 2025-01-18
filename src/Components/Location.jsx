import React from 'react';

const Location = () => {
  return (
    <section>
      <div className="container-fluid my-5">
        <h2 className="text-center mb-4 text-info">Visit Our Exclusive Location</h2>
        <p className="text-center text-muted">
          We’re excited to welcome you to our location, where beauty and care come together. Explore the surroundings and discover the perfect place to elevate your hair care journey.
        </p>
        <div className="ratio ratio-16x9 border border-black">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096196!2d144.95373631561788!3d-37.817209742021854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1c4f37f%3A0xeb23b6893e0e4455!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1633068697434!5m2!1sen!2sau" 
            style={{ border: '0' }} 
            allowFullScreen="" 
            loading="lazy">
              
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
