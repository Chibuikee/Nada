import React from "react";
export default function VideoTestimonial() {
  return (
    <div className="VideoTestimonial-section">
      <div className="VideoTestimonial-section-container">
        <div className="VideoTestimonial-text">
          <h3>TESTIMONIALS</h3>
          <p>See how we'he helped customers unlock their real estate wealth</p>
        </div>
        <iframe
          width="500px"
          height="270px"
          src="https://www.youtube.com/embed/YqQx75OPRa0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
