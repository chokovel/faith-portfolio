import crowdplayImage from "./assets/crowdplay.png";
import acceleratedPartyRentalsImage from "./assets/acceleratedpartyrentals.png";
import coralspringsimage from "./assets/coralsprings.png";
import malishstore from "./assets/malishstore.png";

let data = {
  entries: [
    {
      id: 1,
      title: "Crowdplay Website",
      paragraph:
        "Crowdplay is an online platform designed for artist profiling and music recording. It provides solutions for talented artist to showcase their skill and manage clients bookings, for artists and individuals to book sessions for recording, video & audio production, advertisement, broadcasting etc.",
      tools: `
      <li>PHP/Laravel </li>
      <li>HTML </li>
      <li>CSS </li>
      <li>Bootstrap </li> `,
      imageData: crowdplayImage,
    },
    {
      id: 2,
      title: "Malish Store",
      paragraph:
        "Malish Store is an Ecommerce platform that helps showcase products and manage sales.",
      tools: `
      <li>NodeJs, Express, Typescript</li>
      <li>React</li>
      <li>HTML, Styled Component </li>
      <li>MongoDB</li>`,
      imageData: malishstore,
    },
    {
      id: 3,
      title: "Accelerated Part Rental",
      paragraph:
        "Accelerated Part Rental is an online platform designed for showcasing rental equipment and for management of party rental bookings with location map, blog, and gallery.",
      tools: `
      <li>PHP/Laravel </li>
      <li>HTML </li>
      <li>CSS </li>
      <li>Bootstrap </li> `,
      imageData: acceleratedPartyRentalsImage,
    },
    {
      id: 4,
      title: "Coral Spring School",
      paragraph:
        "Coral Spring School is a platform for schools that efficiently handles all administrative and educational activities on a single platform, it enables schools to digitally administer and monitor regular school events, blog, and gallery.",
      tools: `
      <li>PHP/Laravel </li>
      <li>HTML, CSS, Bootstrap </li>
      <li>MySQL </li>
      <li>CPanel </li> `,
      imageData: coralspringsimage,
    },
  ],
};

export const getEntries = () => {
  return data.entries;
};
