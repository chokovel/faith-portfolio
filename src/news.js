import reactjs from "./assets/react-js.png";
import api from "./assets/api.jpg";
import productLaptop from "./assets/product-laptop.jpg";
import pinkotabBg from "./assets/pinkotab-bg.jpg";

let data = {
  news: [
    {
      id: 1,
      title: "Crowdplay Website",
      paragraph:
        "Crowdplay is an online platform designed for artist profiling and music recording. It provides solutions for talented artist to showcase their skill and manage clients bookings, for artists and individuals to book sessions for recording, video & audio production, advertisement, broadcasting etc.",
      imageData: reactjs,
    },
    {
      id: 2,
      title: "Crowdplay Website",
      paragraph:
        "Crowdplay is an online platform designed for artist profiling and music recording. It provides solutions for talented artist to showcase their skill and manage clients bookings, for artists and individuals to book sessions for recording, video & audio production, advertisement, broadcasting etc.",
      imageData: pinkotabBg,
    },
    {
      id: 3,
      title: "Crowdplay Website",
      paragraph:
        "Crowdplay is an online platform designed for artist profiling and music recording. It provides solutions for talented artist to showcase their skill and manage clients bookings, for artists and individuals to book sessions for recording, video & audio production, advertisement, broadcasting etc.",
      imageData: productLaptop,
    },
  ],
};

export const getNews= () => {
  return data.news;
};