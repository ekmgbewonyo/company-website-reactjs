import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Restrict phone field to numeric input only
    if (name === "phone" && value !== "" && !/^\d+$/.test(value)) {
      return; // Ignore non-numeric input
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfuN716HTelkHHOJdZ8jD_8Ww0e-ZoYi5cXX2f0MUdU2UH-SQ/formResponse";
  
    const formBody = new URLSearchParams({
      "entry.1352760086": formData.name, // Field ID for "name"
      "entry.1429283837": formData.email, // Field ID for "email"
      "entry.1939468943": formData.phone, // Field ID for "phone"
    });
  
    try {
      console.log("Submitting form with data:", formData);
  
      // Make the POST request in no-cors mode
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors", // Prevent CORS errors
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });
  
      // Assume submission was successful
      alert("Message sent successfully! Our team will contact you shortly.");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };
  
  return (
    <div className="container contact" style={{ marginTop: "6rem" }}>
      <h2 className="main-title text-center">ENGAGE US</h2>
      <p className="main-p text-center" style={{ margin: "1rem 0", fontSize: "1.2rem", lineHeight: "1.6" }}>
        Our team of specialized support staff will contact you shortly. Please fill out the details below to help us serve you effectively.
      </p>
      <div className="engage-us-spacing"></div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <input
              name="name"
              placeholder="Name"
              className="contact-input"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              name="email"
              placeholder="Email"
              className="contact-input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              name="phone"
              placeholder="Phone"
              className="contact-input"
              value={formData.phone}
              onChange={handleInputChange}
              inputMode="numeric"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12 text-center">
            <input className="form-btn" type="submit" value="Send Message" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
