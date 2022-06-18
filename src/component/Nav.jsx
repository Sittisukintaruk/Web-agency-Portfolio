import { ReactComponent as Hamberger } from "../images/Home/icon-svg/hamberger.svg";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [close, setclose] = useState(true);
  return (
    <nav>
      {toggle && (
        <div className={`menu__card ` + (close ? `show` : "hiden")}>
          <div
            className="close"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7034 13.9999L26.869 0.699421C27.0562 0.478384 26.8988 0.142578 26.6096 0.142578H23.2152C23.0153 0.142578 22.8239 0.231843 22.692 0.384868L13.483 11.356L4.27404 0.384868C4.14643 0.231843 3.95502 0.142578 3.75085 0.142578H0.356496C0.067253 0.142578 -0.0901295 0.478384 0.0970278 0.699421L11.2627 13.9999L0.0970278 27.3004C0.0551028 27.3496 0.0282064 27.4099 0.0195306 27.474C0.0108549 27.5381 0.0207643 27.6033 0.0480834 27.6619C0.0754025 27.7206 0.118984 27.7701 0.173652 27.8047C0.22832 27.8394 0.29178 27.8576 0.356496 27.8572H3.75085C3.95077 27.8572 4.14218 27.7679 4.27404 27.6149L13.483 16.6438L22.692 27.6149C22.8196 27.7679 23.011 27.8572 23.2152 27.8572H26.6096C26.8988 27.8572 27.0562 27.5214 26.869 27.3004L15.7034 13.9999Z"
                fill="#514C4A"
              />
            </svg>
          </div>
          <ul className="menu__navigation">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setclose(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/who"
                onClick={() => {
                  setclose(false);
                }}
              >
                Who are We ?
              </Link>
            </li>
            <li>
              <Link
                to="/OurServices"
                onClick={() => {
                  setclose(false);
                }}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/OurProjects"
                onClick={() => {
                  setclose(false);
                }}
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={() => {
                  setclose(false);
                }}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a
                className="button-primary action"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="navigation">
        <Link className="logo" to="/">
          DigitUX
        </Link>

        <ul className="navigation__menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/who">Who are We</NavLink>
          </li>
          <li>
            <NavLink to="/OurServices"> Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/OurProjects"> Our Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Contact"> Contact Us</NavLink>
          </li>
        </ul>
        <a
          className="button-primary action"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a Quote
        </a>
        <div className="berger">
          <Hamberger
            className={`hamberger__menu`}
            onClick={() => {
              setToggle(true);
              setclose(true);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
