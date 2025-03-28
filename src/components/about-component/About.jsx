import HeadingContainer from "../utility components/HeadingContainer";
import ExtLink from "../article-components/single-article/ExtLink";
import logo from "../../assets/logo_img.jpg";
import SubHeading from "../utility components/SubHeading";
import List from "./List";
import { Link } from "react-router-dom";
import Logos from "./Logos";
import Services from "./Services";
import Newsletter from "./Newsletter";
import TechStack from "./TechStack";
const AboutContainer = () => {
  return (
    <div>
      <HeadingContainer>
        {/* <Heading
          heading="Things I&apos;ve made trying to put my dent in the universe.
"
        />
        <SubHeading
          subHeading="I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.

"
        /> */}

        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            More of me?
          </span>{" "}
          Okay, here it is
          {/* Scalable AI. */}
        </h1>
      </HeadingContainer>
      <div className="firsr-section text-justify my-5 px-2">
        <div className="first-section-part1 flex flex-col lg:flex-row items-center">
          <div className="first-section-part1-left pr-6">
            <SubHeading>
              Hey, I&apos;m Kumar! A 19 years old boy who have been pursuing B.E in Computer
              Engineering from D.Y Patil Institue of Technology, and I&apos;ve
              been making websites since 2021. I also have a cricket kit,
              kashmir willow bat and no friends to play with🙃. I like working
              out, reading, writing and waiting for post dinner walk.
            </SubHeading>

            <SubHeading>
              Welcome to my spot on the web for writing, projects, tutorials,
              art, and anything else I want to put out there. On the site,
              you&apos;ll find my notes and all the technical{" "}
              <ExtLink>
                <Link to={"/articles"}>articles</Link>
              </ExtLink>{" "}
              I&apos;ve written over the years. Check out the{" "}
              <ExtLink>
                <Link to={"/projects"}>projects</Link>
              </ExtLink>{" "}
              page to see a highlight of my open-source work.
              <br />
            </SubHeading>

            <SubHeading>
              My site has no{" "}
              <span className="font-semibold text-gray-900 dark:text-white decoration-blue-500 decoration-double">
                software development ads, no affiliate links, no tracking or
                analytics, no sponsored posts, and no paywall.
              </span>{" "}
              My motivation for the site is to have a space for self-expression
              and to share what I&apos;ve learned with the world. I hope I will
              inspire others to make their own creative corner on the web in the
              uphill battle against the enshittification of the internet.
            </SubHeading>
          </div>

          <div className="first-section-part1-right flex flex-col">
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

            {/* <img
              className="h-auto max-w-lg transition-all duration-300 rounded-tl-full cursor-pointer filter md:grayscale md:hover:grayscale-0"
              src={logo}
              alt="image description"
            /> */}
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>
        </div>

        {/* <hr className="w-8 h-8 mx-auto my-8 bg-gray-200 border-0 rounded md:my-12 dark:bg-gray-700" /> */}

        <div className="second-section mb-5">
          {/* <h1 className="my-14 text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"> */}
          <h1 className="my-14 text-4xl text-center font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {/* More of me? */}
            </span>{" "}
            What I&apos;m doing now?
            {/* Scalable AI. */}
          </h1>

          <ol className="mx-[auto] max-w-2xl text-justify">
            <List>
              <b>Expanding Technical Expertise:</b> Currently learning advanced
              concepts in web development, focusing on frameworks like React,
              Next.js, and backend technologies such as Node.js and Express.
            </List>
            <List>
              <b>Certifications:</b> Preparing to earn certifications like AWS
              Cloud Practitioner and Solutions Architect to deepen my
              understanding of cloud infrastructure.
            </List>
            <List>
              <b>Open-Source Contributions:</b> Actively contributing to
              open-source projects, collaborating with global developers, and
              improving community-driven tools.
            </List>
            <List>
              <b>Portfolio Website:</b> Continuously building and improving this
              personal website to showcase my skills, projects, and writing.
            </List>
            <List>
              <b>Personal Side Projects:</b> Developing a productivity tool that
              integrates task management and habit tracking.
            </List>
            <List>
              <b>Research Project:</b> Diving deep into the history of place
              names and cultural evolution, with a focus on Mumbai&apos;s unique
              heritage.
            </List>
          </ol>
        </div>

        <div className="third-section my-20 text-center ">
          <h1 className="my-14 text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            I know all these{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {" "}
              Stuff
            </span>
          </h1>
          <Logos />
        </div>

        <div className="fourth-section mt-10 text-center">
          <h1 className="my-14 text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Yes, you can ask me for following{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {" "}
              tasks...
            </span>{" "}
          </h1>
          <Services />
        </div>

        <div className="fifth-section mt-10 text-center">
          <h1 className="my-14 text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Tech Stack, tools used to build this{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {" "}
              portfolio...
            </span>{" "}
          </h1>
          <TechStack />
        </div>

        <div className="newsletter">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
