import React from 'react'
import './about.css'
import Laptop from "../../assets/product-laptop.jpg";
import Backend from "../../assets/backend.jpg";
import Frontend from "../../assets/react-js.png";

const About = () => {
  return (
    <section className="about-section">
      {/* Profile Summary */}
      <article className="about-summary justify-content-center">
        <h2>About Me</h2>
        <p>
          I am a versatile and results-driven Full Stack Developer with over
          three years of experience, specializing in both PHP/Laravel Backend
          and React Frontend development. My commitment to achieving
          organizational goals is evident in my ability to adapt and comprehend
          new technologies swiftly.
        </p>
      </article>
    </section>
  );
}

export default About
