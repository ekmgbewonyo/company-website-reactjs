import React, { useState } from "react";
import Card from "./Card";
import ServiceModal from "./ServiceModal";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="row mb-4">
          {/* First Row */}
          <div className="col-md-4 mb-2">
            <Card
              title="Booking and Logistics"
              img="nkyinkyim-medium.png"
              text="Destination Research, Itinerary Development, Trip Customization."
              onClick={() => handleServiceClick("Booking and Logistics")}
            />
            {/* Adinkra Symbol text at the lower left */}
            <p className="adinkra-symbol-text">Adinkra Nkyinkyim - adaptability, resourcefulness, and change</p>
          </div>
          <div className="col-md-4 mb-2">
            <Card
              title="Support and Specialized Services"
              img="mate-masie-medium.png"
              text="Documentation and Visa Assistance, Travel Insurance, 24/7 Customer Support."
              onClick={() => handleServiceClick("Support and Specialized Services")}
            />
            {/* Adinkra Symbol text at the lower left */}
            <p className="adinkra-symbol-text">Adinkra Mate Masie - knowledge, understanding, and communication</p>
          </div>
          <div className="col-md-4 mb-2">
            <Card
              title="Travel Planning and Customization"
              img="fawohodie-medium.png"
              text="Destination Research, Itinerary Development, Trip Customization."
              onClick={() => handleServiceClick("Travel Planning and Customization")}
            />
            {/* Adinkra Symbol text at the lower left */}
            <p className="adinkra-symbol-text">Adinkra Fawohodie - liberation, independence, and freedom</p>
          </div>
        </div>

        <div className="row">
          {/* Second Row */}
          <div className="col-md-4 mb-2">
            <Card
              title="Corporate Travel Management"
              img="nkonsonkonson-medium.png"
              text="Tailored travel plans for business trips, budget management."
              onClick={() => handleServiceClick("Corporate Travel Management")}
            />
            {/* Adinkra Symbol text at the lower left */}
            <p className="adinkra-symbol-text">Adinkra Nkonsonkonson - symbolizes unity and connection</p>
          </div>
          <div className="col-md-4 mb-2">
            <Card
              title="Adventure and Leisure Travel"
              img="duafe-medium.png"
              text="Organized tours, adventure packages, and relaxing leisure travel experiences."
              onClick={() => handleServiceClick("Adventure and Leisure Travel")}
            />
            {/* Adinkra Symbol text at the lower left */}
            <p className="adinkra-symbol-text">Adinkra Duafe - Symbolizes beauty and an assurance of comfort</p>
          </div>
          <div className="col-md-4 mb-2">
            <Card
              title="Group and Event Travel"
              img="eban-medium.png"
              text="Customized travel plans for groups, event coordination."
              onClick={() => handleServiceClick("Group and Event Travel")}
            />
            {/* Adinkra Symbol text at the lower left */}
            <p className="adinkra-symbol-text">Adinkra Eban - Protection, Security & Safety</p>
          </div>
        </div>
      </div>

      {/* Modal for displaying service details */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Services;
