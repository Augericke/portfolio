import { StaticImageData } from "next/image";
import Cofffee from "../../../../../../public/assets/cofffeeProjectImage.jpg";
import Topple from "../../../../../../public/assets/toppleProjectImage.png";
import Dabitts from "../../../../../../public/assets/dabittsProjectImage.png";
import Letter from "../../../../../../public/assets/letterProjectImage.png";
import Lightbulb from "../../../../../../public/assets/lightbulbProjectImage.png";

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
    title: "Letter Loco!",
    image: Letter,
    description:
      "If you're a fan of word games you should checkout the crazy hard one I made for IOS while I was learning Swift.",
    skills: ["SwiftUI", "Core Data", "CloudKit", "Python"],
    blogLink:
      "https://apps.apple.com/us/app/letter-loco/id6448546757?platform=iphone",
    externalLink:
      "https://apps.apple.com/us/app/letter-loco/id6448546757?platform=iphone",
  },
  {
    title: "dabitts",
    image: Dabitts,
    description:
      "A low friction habit tracking app with analytics on where and how you have been spending the majority of your time.",
    skills: ["Typescript", "Next.js", "Node", "Postgres", "Prisma"],
    blogLink: "/blog/dabitts",
    githubLink: "https://github.com/Augericke/dabitt-backend",
    externalLink: "https://www.dabitts.com/",
  },
  {
    title: "lightbulb.fyi",
    image: Lightbulb,
    description:
      "Freelanced as a fullstack software engineer for lightbulb.fyi - a platform connecting knowledge workers and their audience through question and answer prompts.",
    skills: ["Typescript", "Next.js", "Postgres", "Stripe"],
    blogLink: "https://www.lightbulb.fyi/",
    externalLink: "https://www.lightbulb.fyi/",
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
