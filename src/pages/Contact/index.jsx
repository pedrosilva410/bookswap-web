import React from "react";
import "./styles.css";
import facebook from "../../assets/SVG/facebook.svg";
import instragram from "../../assets/SVG/instagram.svg";
import twitter from "../../assets/SVG/twitter.svg";

export default function Contact() {
  return (
    <main>
      <h1 className="contact__title">Contact Us</h1>
      <div className="contact__dev">
        <div className="devPedro">
          <a href="mailto:pedrogdsilva410@gmail.com">
            pedrogdsilva410@gmail.com
          </a>
          <div className="contact__socialMedia">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/pedrogdsilva"
            >
              <img
                className="contact__socialMediaImg"
                src={facebook}
                alt="social media"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/pedrogdsilva/"
            >
              <img
                className="contact__socialMediaImg"
                src={instragram}
                alt="social media"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/pedrogdsilva410"
            >
              <img
                className="contact__socialMediaImg"
                src={twitter}
                alt="social media"
              />
            </a>
          </div>
        </div>
        <div className="devDiogo">
          <a href="mailto:diasdiogo630@gmail.com">diasdiogo630@gmail.com</a>
          <div className="contact__socialMedia">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/diogofdias"
            >
              <img
                className="contact__socialMediaImg"
                src={facebook}
                alt="social media"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/_dfrd_01/"
            >
              <img
                className="contact__socialMediaImg"
                src={instragram}
                alt="social media"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
