import React from "react";

function ServiceModal({ service, onClose }) {
  const serviceDetails = {
    "Booking and Logistics": {
      description: "Destination Research, Itinerary Development, Trip Customization.",
      moreInfo: " Flight Reservations: Booking airline tickets for domestic and international flights. Accommodation Bookings: Securing hotel, resort, or other accommodation options. Transportation Arrangements: Arranging transportation, including car rentals, transfers, and train tickets.",
      image: "./people-office-work-day (1).jpg",  // Add image path for this service
    },
    "Support and Specialized Services": {
      description: "Documentation and Visa Assistance, Travel Insurance, 24/7 Customer Support, Specialized Travel Services.",
      moreInfo: "Our team is here to assist with your visa process, travel insurance, and any specialized services you may need for a seamless experience.",
      image: "./people-office-work-day (2).jpg",  // Add image path for this service
    },
    "Travel Planning and Customization": {
      description: "Destination Research, Itinerary Development, Trip Customization.",
      moreInfo: "We specialize in customizing trips for individuals, families, and groups, ensuring you get the most out of your travel experience.",
      image: "./people-office-work-day.jpg",  // Add image path for this service
    },
    "Corporate Travel Management": {
      description: "Tailored travel plans for business trips, budget management, and streamlined booking processes.",
      moreInfo: "We provide end-to-end corporate travel management, ensuring your business trips are well-planned and cost-efficient.",
      image: "./people-having-meeting-office.jpg",  // Add image path for this service
    },
    "Adventure and Leisure Travel": {
      description: "Organized tours, adventure packages, and relaxing leisure travel experiences.",
      moreInfo: "Whether you're looking for an adrenaline-pumping adventure or a relaxing vacation, we offer a variety of travel packages.",
      image: "./6c.jpg",  // Add image path for this service
    },
    "Group and Event Travel": {
      description: "Customized travel plans for groups, event coordination, and seamless travel arrangements.",
      moreInfo: "We can help you plan group trips, coordinate events, and ensure that everything goes smoothly from start to finish.",
      image: "./britishairways_21686363120210_thumb.jpg",  // Add image path for this service
    },
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{service}</h2>
        <img 
          alt={service} 
          src={"./img/" + serviceDetails[service]?.image} 
          className="service-modal-image"
        />
        <p className="justified-text">{serviceDetails[service]?.description}</p>
        <p className="justified-text">{serviceDetails[service]?.moreInfo}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ServiceModal;
