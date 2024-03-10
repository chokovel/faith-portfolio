import React from 'react'
import '../custom/card.css'

const Card = ({cardTitle, cardDescription, imageSrc, imageAlt}) => {
  return (
    <section className="card">
      <section className="card-body">
        {imageSrc && typeof imageSrc === "object" && (
          <div className="font-awesome-icon">{imageSrc}</div>
        )}
        {imageSrc && typeof imageSrc === "string" && (
          <img src={imageSrc} alt={cardTitle} />
        )}

        <h3 className="card-title pt-3">{cardTitle}</h3>

        <p className="card-text">{cardDescription}</p>
      </section>
    </section>
  );
}

export default Card
