import React from 'react'
import './hero.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from '../custom/Button';
import Nav from '../navbar/Nav'
import heroBg from "../../assets/pinkotab-bg.jpg";
import FaithAlugbue from "../../assets/faith-alugbue.png";

function Hero() {
  return (
    <>
      <Nav />
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-tag">
            Shaping Digital Excellence in Development, Marketing, and Training
          </p>
          <h2 className="hero-title">
            Hello, I'm <span className="hero-title-span">Faith</span> Alugbue.
          </h2>
          <p className="hero-title-description">
            A seasoned Software Developer, Digital Marketer, and Trainer, with
            over three years of expertise. Join me in redefining digital
            boundaries through innovative software, impactful marketing, and
            empowering training. Welcome to a visionary journey where
            development meets creativity and education.
          </p>
          <Button
            label="Contact Me"
            href="https://www.linkedin.com/in/faithalugbue/"
          />
        </div>
        <div className="hero-image">
          {/* <img src={FaithAlugbue} alt="Alugbue-Faith" /> */}
        </div>
      </div>
    </>
  );
}

export default Hero
