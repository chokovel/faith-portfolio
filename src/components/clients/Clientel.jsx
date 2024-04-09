import React from 'react'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import '../clients/clientel.css'

import reeksoft from "../../assets/reeksoftlogo.png";
import decagon from "../../assets/decagon.png";
import adnaira from "../../assets/adnaira.png";
import provehub from "../../assets/provehub.png";

function Clientel() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <section className="pt-5 title">
        <h2 className="pt-2">
          <em>My Clientel</em>
        </h2>
        <p>Companies I have worked with!</p>
      </section>
      <section>
        <ul className='ul' ref={ref}>
          <li className='li' >
            <img src={reeksoft} alt="Reeksoft logo" />
          </li>
          <li className='li' >
            <img src={decagon} alt="Decagon logo" />
          </li>
          <li className='li' >
            <img src={adnaira} alt="AdNaira" />
          </li>
          <li className='li' >
            <img src={provehub} alt="Provehub" />
          </li>
          <li className='li' >
            <img src={reeksoft} alt="Reeksoft logo" />
          </li>
          <li className='li' >
            <img src={decagon} alt="Decagon logo" />
          </li>
          <li className='li' >
            <img src={adnaira} alt="AdNaira" />
          </li>
          <li className='li' >
            <img src={provehub} alt="Provehub" />
          </li>
        </ul>
      </section>
    </>
  );
}

export default Clientel
