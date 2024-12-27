import { Link } from "react-scroll";

function Navbar() {
  document.addEventListener("scroll", function () {
    const gotop = document.querySelector(".gotop");
    const nav = document.querySelector(".navbar");
    if (window.screen.width < 768 && window.scrollY > 690) {
      gotop.classList.add("display");
      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      gotop.classList.add("display");
      nav.classList.add("navopened");
    } else {
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });

  function openBar() {
    const bar = document.querySelector(".bar");
    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" }}
            >
              <img src="/Consult Elorm.png" alt="" />
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
              >
                Home
              </Link>
            </li>
            <li>
            <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About Us
              </Link>
            </li>
            <li>
            <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Engage Us
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
