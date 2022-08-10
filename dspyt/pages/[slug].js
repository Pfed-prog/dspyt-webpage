import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Head from "next/head";
import Image from "next/image";

export default function PostPage({
  frontmatter: { title, excerpt, cover_image },
  //slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={cover_image} />
        <link rel="icon" href="/big-data-svgrepo.svg" />
        <meta name="description" content={excerpt} />
      </Head>

      <div className="relative px-4 sm:px-6 lg:px-8 mt-10">
        <div className="card card-page text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </span>
          </h1>

          <Image
            className="rounded-lg"
            quality={25}
            src={cover_image}
            alt={title}
            width={1200}
            height={753}
            loading="lazy"
          />

          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      //slug,
      content,
    },
  };
}