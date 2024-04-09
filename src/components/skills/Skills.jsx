import React from 'react'
import '../skills/skills.css'
import Card from '../custom/Card'
import node from "../../assets/node.png";
import laravel from "../../assets/laravel.png";
import react from "../../assets/react.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const house = <FontAwesomeIcon icon={faHouse} />;

function Skills() {
  return (
    <>
      <article className="mySkills pb-5">
        <section className="pt-5 title">
          <h2>
            <strong>
              <em>My Skills</em>
            </strong>
          </h2>
          <p>Here are some technologies I've used!</p>
        </section>

        <section className="pt-5 pb-5 d-flex justify-content-center skill">
          <Card
            cardTitle="PHP/Laravel"
            cardDescription={
              "I specialize in crafting dynamic and robust websites using PHP with the Laravel framework, ensuring top-notch performance and security in every application."
            }
            imageSrc={laravel}
          />
          <Card
            className="card-middle"
            cardTitle="NodeJs"
            cardDescription={
              "I leverage the power of Node.js to create scalable and efficient web solutions, delivering high-performance applications that meet modern development standards."
            }
            imageSrc={node}
          />
          <Card
            cardTitle="ReactJs"
            cardDescription={
              "I excel in building interactive and user-friendly interfaces with React.js, employing cutting-edge technology to ensure a seamless and engaging user experience."
            }
            imageSrc={react}
          />
        </section>
      </article>
    </>
  );
}

export default Skills
