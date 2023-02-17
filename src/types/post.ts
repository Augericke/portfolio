import { StaticImageData } from "next/image";

export type PostMeta = {
  isPublished: boolean;
  title: string;
  abstract: string;
  headerImage: StaticImageData;
  tags: string[];
  slug: string;
  githubLink?: string;
  externalLink?: string;
};
