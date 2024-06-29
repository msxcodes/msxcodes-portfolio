import getyoursquad from "../../../public/projects/getyoursquad.png";
import reactPortfolio from "../../../public/projects/react-portflio.png";
import netspeq from "../../../public/projects/netspeq.png";
import maxMovie from "../../../public/projects/movie-max.png";
import protfolio from "../../../public/projects/msxcodes-portfolio.png";
import blogx from "../../../public/projects/blogxweb.png";

export const projectData = [
  {
    id: 1,
    title: "My Portfolio",
    link: "#",
    img: protfolio,
    linkTitle: "msxcodes-portfolio.vercel.com",
    des: "This is my personal portfolio website. It is built on top of nextjs, framer-motion and threeJs. Also intigrated emailjs for contact us page which helps the user to connect with us.",
    tech: [
      {
        color: "deepskyblue",
        title: "#nextjs",
      },
      {
        color: "#e59cff",
        title: "#framer-motion",
      },
      {
        color: "cadetblue",
        title: "#tailwindcss",
      },
      {
        color: "gray",
        title: "#threeJs",
      },
    ],
    time: 0.2,
  },
  {
    id: 2,
    title: "Netspeq-Solution",
    link: "https://netspeq-solutions.netlify.app",
    img: netspeq,
    linkTitle: "netspeq-solutions.netlify.app",
    des: "Netspeq Solutions is a clone website of a software company. Developed Using ReactJS and TailwindCSS.",
    tech: [
      {
        color: "skyblue",
        title: "#reactjs",
      },
      {
        color: "cadetblue",
        title: "#tailwindcss",
      },
    ],
    time: 0.5,
  },
  {
    id: 3,
    title: "MaxMovie",
    link: "https://max-movie.vercel.app",
    linkTitle: "max-movie.vercel.app",
    img: maxMovie,
    des: "MaxMovie is a website where you can find wide range of movies. Build using nextjs and fetch data from api listed on TMDB.",
    tech: [
      {
        color: "deepskyblue",
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
    time: 0.8,
  },
  {
    id: 4,
    title: "BlogX",
    link: "https://blogxweb.netlify.app",
    img: blogx,
    linkTitle: "blogxweb.netlify.app",
    des: "BlogX is a blog where you can post and manage your blog. Build using reactjs and tailwind css.",
    tech: [
      {
        color: "skyblue",
        title: "#reactjs",
      },
      {
        color: "cadetblue",
        title: "#tailwindcss",
      },
    ],
    time: 1.1,
  },
  {
    id: 5,
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
    time: 0.5,
  },
  {
    id: 6,
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
    time: 0.8,
  },
];
