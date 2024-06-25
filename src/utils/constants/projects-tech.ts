import getyoursquad from "../../../public/projects/getyoursquad.png";
import reactPortfolio from "../../../public/projects/react-portflio.png";
import netspeq from "../../../public/projects/netspeq.png";
import maxMovie from "../../../public/projects/movie-max.png";

export const projectData = [
  {
    id: 1,
    title: "Netspeq-Solution",
    link: "https://netspeq-solutions.netlify.app",
    img: netspeq,
    linkTitle: "netspeq-solutions.netlify.app",
    des: "Netspeq Solutions is a clone website of a software company. Developed Using ReactJS and TailwindCSS.",
    tech: [
      {
        color: "deepskyblue",
        title: "#reactjs",
      },
      {
        color: "cadetblue",
        title: "#tailwindcss",
      },
    ],
    time: 0.2,
  },
  {
    id: 2,
    title: "Protfolio Web",
    link: "https://msxgenzcoder.netlify.app",
    img: reactPortfolio,
    linkTitle: "msxgenzcoder.netlify.app",
    des: "This is an another portfolio website. It is fully responsvie website developed using ReactJS and TailwindCSS",
    tech: [
      {
        color: "deepskyblue",
        title: "#reactjs",
      },
      {
        color: "cadetblue",
        title: "#tailwindcss",
      },
      {
        color: "#e59cff",
        title: "#framer-motion",
      },
    ],
    time: 0.5,
  },

  {
    id: 3,
    title: "GetYourSquad",
    link: "https://getyoursquad.in",
    linkTitle: "getyoursquad.in",
    img: getyoursquad,
    des: "GetYourSquad provides player or squad to connect to others players and find prefect teammates according to their current gamestyle",
    tech: [
      {
        color: "deepskyblue",
        title: "#reactjs",
      },
      {
        color: "cadetblue",
        title: "#tailwindcss",
      },
      {
        color: "#e59cff",
        title: "#framer-motion",
      },
      {
        color: "aquamarine",
        title: "#nodejs",
      },
    ],
    time: 0.8,
  },
  {
    id: 4,
    title: "MaxMovie",
    link: "",
    linkTitle: "maxmovie.vercel.app",
    img: maxMovie,
    des: "MaxMovie is a website where you can find wide range of movies. Build using nextjs and fetch data from api listed on TMDB.",
    tech: [
      {
        color: "cyan",
        title: "#nextjs",
      },
      {
        color: "cadetblue",
        title: "#tailwindcss",
      },
      {
        color: "#9cb2ff",
        title: "#redux/toolkit",
      },
    ],
    time: 1.2,
  },
];
