/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "/vite.svg";
import ButtonComponenet from "./ButtonComponenet";

function NavbarComponent() {
  const [navItems, setNavItems] = useState(["Home", "About", "Contact"]);

  return (
    <header className="navbar">
      <nav className="navbar_wrap">
        <img className="navbar_logo" src={logo} alt="logo" />

        <ul className="navbar_list">
          {navItems.map((item, index) => (
            <li  key={index} className="navbar_list_item">
              {item}
            </li>
          ))}
          </ul>
        <div className="navbar_buttons">
          <ButtonComponenet label="Login" />
          <ButtonComponenet label="Register" />
        </div>
      </nav>
    </header>
  );
}

export default NavbarComponent;
