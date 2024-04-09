import React from 'react'
import '../contact/contact.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import x from "../../assets/x.webp";
import linkedin from "../../assets/linkedin.webp";
import git from "../../assets/git.png";

const email = <FontAwesomeIcon icon={faEnvelope} />;
const phone = <FontAwesomeIcon icon={faPhone} />;

function Contact() {
  return (
    <>
      <section className="pt-5 pb-5 contact-sec">
        <section className="pb-5 title">
          <h2>
            <strong>
              <em>Hire me</em>
            </strong>
          </h2>
          <p className='p-2'>
            I would like to make your ideas come to live. Feel free to contact
            me at anytime
          </p>
        </section>
        <section className="contact-container">
          <div className="row contact-details">
            <div className="col md-6 lg-6 pt-5 pb-5">
              <p>
                {email}
                <a
                  className="contact-link"
                  href="mailto:faithalugbue@gmail.com"
                >
                  faithalugbue@gmail.com
                </a>
              </p>

              <p>
                {phone}
                <a className="contact-link" href="tel:+2349038252433">
                  +234 90 3825 2433
                </a>
              </p>

              <div className="d-flex">
                <a
                  href="https://github.com/chokovel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-spacing"
                    src={git}
                    alt="github-account"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/faithalugbue/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-spacing"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
                <a
                  href="https://facebook.com/alugbuefaith"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-spacing"
                    src={facebook}
                    alt="facebook"
                  />
                </a>
                <a
                  href="http://twitter.com/FaithAlugbue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-spacing" src={x} alt="twitter" />
                </a>
                <a
                  href="http://instagram.com/faithalugbue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-spacing"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </div>
            </div>

            <div className="col md-6 lg-6">
              <form>
                <fieldset>
                  <legend>Contact details</legend>
                  <div class="form-outline" data-mdb-input-init>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      class="form-control"
                    />
                    <label class="form-label" for="firstname">
                      Name or Company
                    </label>
                  </div>

                  <div class="form-outline" data-mdb-input-init>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                    <label class="form-label" for="email">
                      Email input
                    </label>
                  </div>

                  <div class="form-outline" data-mdb-input-init>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      class="form-control"
                    />
                    <label class="form-label" for="number">
                      Phone Number
                    </label>
                  </div>

                  <div class="form-outline" data-mdb-input-init>
                    <textarea
                      class="form-control"
                      id="textAreaExample"
                      rows="4"
                    ></textarea>
                    <label class="form-label" for="textAreaExample">
                      Message
                    </label>
                  </div>

                  <input type="button" value="Submit" />
                </fieldset>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Contact
