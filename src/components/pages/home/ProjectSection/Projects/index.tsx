import { StaticImageData } from "next/image";
import Cofffee from "../../../../../../public/assets/cofffeeProjectImage.jpg";
import Topple from "../../../../../../public/assets/toppleProjectImage.png";
import Dabitts from "../../../../../../public/assets/dabittsProjectImage.png";

export type ProjectDetails = {
  title: string;
  image: StaticImageData;
  description: string;
  skills: string[];
  blogLink: string;
  githubLink?: string;
  externalLink?: string;
};

const projects: ProjectDetails[] = [
  {
    title: "dabitts",
    image: Dabitts,
    description:
      "A low friction habit tracking app with analytics on where and how you have been spending the majority of your time.",
    skills: ["Typescript", "Next.js", "Node", "Express", "Postgres"],
    blogLink: "/blog/dabitts",
    githubLink: "https://github.com/Augericke/dabitt-backend",
    externalLink: "https://www.dabitts.com/",
  },
  {
    title: "Topple Debacle",
    image: Topple,
    description:
      "A daily word puzzle where you need to clear the grid by spelling connected words.",
    skills: ["Typescript", "React", "Framer Motion", "SCSS"],
    blogLink: "/blog/topple-debacle",
    githubLink: "https://github.com/Augericke/topple-debacle",
    externalLink: "https://topple-debacle.vercel.app/",
  },
  {
    title: "Cofffee Shop",
    image: Cofffee,
    description:
      "A weekend project using OpenAi's image and text generation tools to create a completely prompted coffee shop website.",
    skills: ["Typescript", "Next.js", "SCSS"],
    blogLink: "/blog/cofffee-shop",
    githubLink: "https://github.com/Augericke/cofffee-shop",
    externalLink: "https://cofffee-shop.vercel.app/",
  },
];

export default projects;
