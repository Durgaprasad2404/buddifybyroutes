import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [hamopen, setHamopen] = useState(false);
  return (
    <>
      <div className="main-container fixed-top">
        <nav className="nav-container">
          <div>
            <img src="./images/buddify.png" alt="#" className="logo" />
          </div>
          <div>
            <div
              className="hambargher-container"
              onClick={() => {
                setHamopen(!hamopen);
              }}
            >
              <span className="hambargher"></span>
              <span className="hambargher"></span>
              <span className="hambargher"></span>
            </div>
            <ul className={hamopen ? "open" : "Nav-items"}>
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                <li className="nav-item">Home</li>
              </Link>
              <Link to="/aboutUs" style={{ textDecoration: "none" }}>
                <li className="nav-item">About Us</li>
              </Link>
              <Link to="/butWhy" style={{ textDecoration: "none" }}>
                <li className="nav-item">But Why?</li>
              </Link>
              <Link to="/ourBuds" style={{ textDecoration: "none" }}>
                <li className="nav-item">Ourbuds</li>
              </Link>
              <Link to="/packagePricing" style={{ textDecoration: "none" }}>
                <li className="nav-item">Packing & Pricing</li>
              </Link>
              <Link to="/safetyPrivacy" style={{ textDecoration: "none" }}>
                <li className="nav-item">Safety & Privacy</li>
              </Link>
              <Link to="/testimonials" style={{ textDecoration: "none" }}>
                <li className="nav-item">Testimonials</li>
              </Link>
              <Link to="/touchIn" style={{ textDecoration: "none" }}>
                <li className="nav-item">Reach Us</li>
              </Link>
              <Link to="/contactUs" style={{ textDecoration: "none" }}>
                <li className="nav-item">Contacts</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
