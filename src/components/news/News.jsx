import React from 'react'
import { useRef } from "react";
import { Link}  from "react-router-dom"
import { motion, useScroll } from "framer-motion";
import '../news/news.css'
import { getNews } from '../../news.js'; // Import the function to get news data


function News() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const news = getNews();

  // Function to truncate the text if it exceeds the maxLength
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    // If text length exceeds maxLength, truncate it and add "..." at the end
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <section className="pt-5 title">
        <h2 className="pt-2">
          <em>Latest Blog Post</em>
        </h2>
        <p>Stay up to date with latest industry trends and tutorials!</p>
      </section>

      <section className="news-section">
        {news.map((item) => (
          <div key={item.id} className="card news-div">
            <img
              src={item.imageData}
              className="card-img-top"
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title"><strong>{truncateText(item.title, 50)}</strong> </h5>
              <p className="card-text">{truncateText(item.paragraph, 150)}</p>
              <Link to={`/news/${item.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default News
