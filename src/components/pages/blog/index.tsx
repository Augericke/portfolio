import { PostMeta } from "@/types/post";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/library/revealOnScroll";

import styles from "./blog.module.scss";

type BlogsViewProps = {
  posts: PostMeta[];
};

const BlogsView: React.FC<BlogsViewProps> = ({ posts }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.postsContainer}>
        {posts.map((post) => {
          const { slug, title, abstract, tags, headerImage } = { ...post };
          return (
            <Link key={slug} className={styles.post} href={slug}>
              <div className={styles.infoContainer}>
                <h2>{title}</h2>
                <div className={styles.tagsContainer}>
                  {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <p>{abstract}</p>
              </div>
              <RevealOnScroll customClass={styles.imageContainer}>
                <Image
                  src={headerImage}
                  alt={`Blog title image for the article: ${title}`}
                  placeholder="blur"
                  fill
                  priority={true}
                />
              </RevealOnScroll>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsView;
