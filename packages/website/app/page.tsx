import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import MoreStories from "./more-stories";

import { getAllPosts } from "@/lib/api";
import { DEVELOPER_NAME, DEVELOPER_PREFERRED_NAME ,DEVELOPER_PICTURE} from "@/lib/constants";
import {Paragraph,AboutMe} from "@/lib/components"

function Intro() {
  return (
    <section id="intro">
      <AboutMe
      heading={`I am ${DEVELOPER_NAME} (${DEVELOPER_PREFERRED_NAME}).`}
      description={`Certified professional with excellent experience related to frontend development. Proficiently working with HTML5, SAAS, CSS3, JavaScript, React, NEXTJs, Gatsby, GraphQL, PHP, WordPress, MySQL Server. Ability to quickly learn new applications, systems, and technical concepts. Expertise with Technologies and/or Frameworks like Vue.js, Docker, Wordpress, Storyblok, Twitter Bootstrap, WebPack, Gulp, Composer, SASS, REST services. Extensive experience in building JavaScript applications, designing responsive newsletters for promotion purposes and email blasting using HTML5. Planning, organizing and developing web applications and databases. Experience in code testing, reviewing and unit testing. Particular attention to details, security procedures and practices, responsible and self-organizing. Working within a team and independently.`}
      imgSource={DEVELOPER_PICTURE}
      />
      
    </section>
  );
}

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  // const allPosts = await getAllPosts(isEnabled);
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  return (
    <>
      <Intro />
      </>
    
  );
}
