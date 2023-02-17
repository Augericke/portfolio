import Layout from "@/components/layout";
import BlogsView from "@/components/pages/blog";
import { PostMeta } from "@/types/post";
import fs from "fs";
import path from "path";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const postDirectory = path.join(process.cwd(), "src/pages/blog");
  let postFilenames = fs.readdirSync(postDirectory);
  const postModules = await Promise.all(
    postFilenames
      .filter((item) => item.endsWith(".mdx"))
      .map(async (p) => import(`./${p}`)),
  );
  const postMetadata: PostMeta[] = postModules.map((m) => m.meta as PostMeta);
  return {
    props: {
      postMetadata: postMetadata,
    },
  };
}

export default function Blog({
  postMetadata,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const posts = postMetadata;
  return (
    <Layout
      pageMeta={{
        title: "Austin Gericke | Blog",
        description:
          "This is where I write about my projects or other random things I have learned.",
      }}
    >
      <BlogsView posts={posts} />
    </Layout>
  );
}
