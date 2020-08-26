import React, { useEffect, useState } from "react";
import "./index.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix logo"
        className="nav__avatar"
      />
    </div>
  );
}

/*
logo url: https://upload.wikimedia.org/wikipedia/commons/0/0f/
avatar url: https://pbs.twimg.com/profile_images/124011999041155

*/

export default Navbar;
