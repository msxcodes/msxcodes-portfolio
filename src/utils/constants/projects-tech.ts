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
    category: "website",
    featured: true,
    githubLink: "https://github.com/msxcodes/portfolio",
    liveLink: "https://msxcodes-portfolio.vercel.app",
  },
  {
    id: 2,
    title: "Netspeq-Solution",
    img: netspeq,
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
    category: "website",
    githubLink: "https://github.com/msxcodes/netspeq-solutions",
    liveLink: "https://netspeq-solutions.netlify.app",
  },

  {
    id: 3,
    title: "BlogX",
    img: blogx,
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
    category: "website",
    githubLink: "https://github.com/msxcodes/blogx",
    liveLink: "https://blogxweb.netlify.app",
  },
  {
    id: 4,
    title: "MaxMovie",
    img: maxMovie,
    des: "MaxMovie is a website where you can find wide range of movies. It is still under development",
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
    category: "app",
    githubLink: "https://github.com/msxcodes/max-movie",
    liveLink: "https://max-movie.vercel.app",
  },
  {
    id: 5,
    title: "GetYourSquad",
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
    category: "app",
    featured: true,
    githubLink: "https://github.com/msxcodes/getyoursquad",
    liveLink: "https://getyoursquad.in",
  },
  {
    id: 6,
    title: "Protfolio Web",
    img: reactPortfolio,
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