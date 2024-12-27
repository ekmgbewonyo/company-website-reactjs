import React from 'react';

function Header() {
  return (
    <header>
      <video src="./adomi.mp4" loop autoPlay muted></video>
      <h1>Consult Elorm</h1>
      <div className="row">
        {/* Replaced Sign Up button with catchphrase */}
        <p className="catchphrase" style={{ fontSize: "1.8rem", fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>
          "Your Journey, Our Commitment"
        </p>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
/*./adomi.mp4*/