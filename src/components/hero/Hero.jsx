import React from 'react'
import './hero.css'
import Button from '../custom/Button';
import Nav from '../navbar/Nav'

function Hero() {
  return (
    <>
      <Nav />
      <section className="hero-section">
        <section className="hero-text">
          <p className="hero-tag mb-0">Hello,</p>
          <h1 className="hero-title">
            I'm <span className="hero-title-span">Faith</span> Alugbue.
          </h1>
          <p className="hero-title-description pb-3">
            I'm a seasoned Software Developer, Digital Marketer, and Web
            Development Instructor, I bring over three years of expertise to the
            table. Welcome to a visionary space where development seamlessly
            integrates with creativity and education.
          </p>
          <Button
            label="Contact Me"
            href="https://www.linkedin.com/in/faithalugbue/"
          />
          <Button label="Download CV" href={"www.com/"} class="cv-button" />
        </section>
        <section className="hero-image"></section>
      </section>
    </>
  );
}

export default Hero
