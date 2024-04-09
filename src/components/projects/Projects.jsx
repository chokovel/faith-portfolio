import '../projects/projects.css'
import crowdplay from '../../assets/crowdplay.png'
import React, { useState, useEffect } from "react";
import { getEntries } from "../../projects.js";

function Projects() {
  const entries = getEntries();

  return (
    <>
      <section className="pt-5 pb-5 pro-sec">
        <section className="pt-5 pb-3 title">
          <h2>
            <strong>
              <em>My Projects</em>
            </strong>
          </h2>
          <p>Check out a few of my personal works!</p>
        </section>
        
        {entries.map((entry) => (
          <div key={entry.id} className="card-body projects p-5">
            <div className="info card-body mb-5">
              <h4 className="card-title">
                <em>{entry.title}</em>
              </h4>
              <p className="card-text pt-3">{entry.paragraph}</p>
              <div
                className="language"
                dangerouslySetInnerHTML={{ __html: entry.tools }}
              />
            </div>

            <div className="image-container project_img">
              <div className="scrollable-image">
                <img src={entry.imageData} alt={entry.title} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Projects
