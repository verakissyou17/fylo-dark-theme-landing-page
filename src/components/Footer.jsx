import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../public/images/logo.svg";
import locationIcon from "../../public/images/icon-location.svg";
import phoneIcon from "../../public/images/icon-phone.svg";
import emaiIcon from "../../public/images/icon-email.svg";

function Footer() {
  const [inputValue, setInputvalue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(e) {
    setInputvalue(e.target.value);
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleError = (e) => {
    e.preventDefault();
    if (!validateEmail(inputValue)) {
      setErrorMessage("Please enter a valid email address");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <footer>
      <div className="form-container col">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form noValidate onSubmit={handleError} className="col">
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="email@example.com"
            />
          </div>
          <div className="form-group">
            <button id="button" type="submit">
              Get Started For Free
            </button>
          </div>
        </form>
        <p
          className={
            errorMessage === "" ? "error-message" : "error-message visible"
          }
        >
          {errorMessage}
        </p>
      </div>
      <div className="footer-container">
        <img src={logo} alt="logo icon" className="logo" />
        <div className="footer-details col">
          <div className="location row">
            <img src={locationIcon} alt="location icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="contact">
            <div className="row">
              <img src={phoneIcon} alt="phone icon" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="row">
              <img src={emaiIcon} alt="email icon" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <nav className="nav col" aria-label="Footer navigation">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </nav>
          <div className="footer-brands row">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <p className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded with love by <a href="#">Vera 💞</a>.
      </p>
    </footer>
  );
}

export default Footer;
