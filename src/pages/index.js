import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import resumePDF from "./AnnaKlibanovResume-2025.pdf";
import GatsbyConfig from "../../gatsby-config";

const resume = [
  {
    startyear: "Nov 2023",
    endyear: "Present",
    title: "Lead Product Designer",
    company: "Texada",
    bullets: [
     "Manage and mentor a multi-product design team, ensuring consistent UX through scalable patterns and a shared design system.",
      "Develop and implement a cross-product design system across multiple tech stacks and frameworks.",
      "Lead the UX vision for a significant product redesign, integrating stakeholder feedback and legacy system constraints into a modern, intuitive interface.",
      "Help innovate, research, and introduce AI features into core user workflows, significantly increasing productivity in everyday tasks.",
      "Introduced UX practices into the SDLC from the ground up, establishing structured research and validation loops.",
      "Collaborated with product and engineering to embed design at every stage of the development process and reduced rework during implementation.",
      "Partner cross-functionally with engineering and product leadership to define roadmap and OKRs."
    ],
  },
  {
    startyear: "Oct 2022",
    endyear: "Nov 2023",
    title: "Senior Product Designer",
    company: "ActiveState",
    bullets: [
     "Led design initiatives for developer tools and CI/CD platforms, supporting Python/Perl open-source package management.",
    "Designed and refined a security and vulnerability dashboard that surfaced critical dependency risks and remediation steps.",
    "Championed Product-Led Growth through UX experiments and research, increasing conversion by 17%.",
    "Integrated design thinking into DevSecOps workflows to enhance the visibility and usability of secure development practices.",
    "Mentored junior designers."
    ],
  },
  {
    startyear: "Sep 2020",
    endyear: "Jul 2022",
    title: "Scrum Master (CSM)",
    company: "Edsby",
    bullets: [
      "Facilitated agile ceremonies for 20+ person engineering team.",
      "Liaised between product, engineering, QA, and customer stakeholders to deliver against roadmap priorities.",
    ],
  },
  {
    startyear: "Apr 2011",
    endyear: "Jul 2022",
    title: "Senior Product Designer / Front-End Developer",
    company: "Edsby",
    bullets: [
      "Designed and implemented responsive interfaces for K–12 and higher-ed platforms used by 215M+ users.",
      "Co-led redesign of the analytics dashboard, improving clarity and accessibility of attendance insights.",
      "Conducted end-to-end research from discovery to usability testing, iterating through high-impact design changes.",
      "Built scalable UI components and maintained design consistency across mobile and web.",
    ],
  },
  {
    startyear: "2010",
    endyear: "Present",
    title: "Freelance Designer/Developer",
    company: "GoBanana Design",
    bullets: [
      "Delivered UX, branding, and development work for clients across tech, retail, and nonprofit sectors."
    ],
  },

  // {
  //   startyear: "2010",
  //   endyear: "2011",
  //   title: "Graphic and Web Designer / Front-End Web Developer",
  //   company: "Ingle International",
  //   bullets: [
  //     "Designed and developed websites for clients",
  //     "Created intuitive user interfaces for web applications",
  //     "Worked closely with programmers to achieve optimal functionality",
  //     "Created other materials for the company and its clients, such as interactive flash presentations and print materials",
  //   ],
  // },
  // {
  //   startyear: "2008",
  //  endyear: "2011",
  //   title: "Web Designer and Technician",
  //   company: "York University",
  //   description:
  //     "Maintained the web sites for the Fine Arts Computing department and Visual Resources Centre. Assisted faculty with technical problems such as setting up new computers and equipment, troubleshot more complicated issues to relay the information to the next level of support.",
  // },
];

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="home">
      <div className="pt-10">
        {/* <div className="h-60">
          <StaticImage
            src="../images/profile.jpg"
            alt="Anna Klibanov headshot"
            className="h-full w-full "
            imgClassName="rounded-full"
            objectFit="contain"
            placeholder="none"
            imgStyle={{
              width: "auto",
              margin: "0 auto",
            }}
          />
        </div> */}
        <h1 className="my-4 text-5xl font-bold leading-tight">Hi, I'm Anna Klibanov</h1>
        <p className="leading-normal text-xl mb-8">
        Over the last 15 years, I’ve designed and built software across industries ranging from education to infrastructure to open-source development. My expertise spans the full product design lifecycle—from discovery and user research to prototyping and delivery. I’m passionate about creating intuitive, impactful experiences that serve real user needs and business goals. I’ve led design strategy, developed scalable design systems, and embedded UX into the SDLC to elevate product quality and collaboration. I thrive in remote-first teams and love solving complex challenges through thoughtful, user-centered design.
        </p>
      </div>
      <section className="py-5" id="resume">
        <h2 className="w-full my-2 mb-8 text-3xl font-bold">Work Experience</h2>
        <div className="w-full  flex flex-col flex-grow flex-shrink">
          {resume.map((resumeItem) => (
            <div
              className="resume-item mb-2 flex-1 flex flex-wrap"
              key={resumeItem.title}
            >
              
              <div className="w-full">
                <div className="title font-semibold text-cyan-400">
                  {resumeItem.title}
                </div>
                <div className="company text-slate-300 mb-3">
                  <span>{resumeItem.company}</span> / <span className="date text-slate-400">
                <span className="startyear">{resumeItem.startyear}–</span>
                <span className="endyear">{resumeItem.endyear}</span>
              </span>
                </div>
                <div className="description text-sm  mb-5">
                  {resumeItem.description}
                  <ul className="list-disc ml-4">
                    {resumeItem.bullets.map((resumeBullet, index) => (
                      <li className="mb-2" key={index}>{resumeBullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-5" id="skills">
        <div className="container text-base mx-auto pt-4 pb-8 text-xl">
          <h2 className="w-full my-2 mb-8 text-3xl font-bold">Skills</h2>
          <div className="w-full">
              <p className="mb-3"><span className="font-bold text-cyan-400">Product & Process:</span> Product Design, UX/UI Design, User Research & Usability Testing, Design Systems, SDLC Process Integration, Agile & Scrum, Roadmap Planning, Product-Led Growth</p>
              <p className="mb-3"><span className="font-bold text-cyan-400">Collaboration & Leadership:</span> Cross-functional Collaboration, Team Leadership & Mentorship, Stakeholder Communication</p>
              <p className="mb-3"><span className="font-bold text-cyan-400">Tools & Technologies:</span> Figma, Adobe Creative Suite, Visual Studio Code, Git, HTML/CSS/JS, Jira, Remote Collaboration Tools</p>
          </div>
        </div>
      </section>
      <section className="py-5" id="skills">
        <div className="container text-base mx-auto pt-4 pb-8 text-xl">
          <h2 className="w-full my-2 mb-8 text-3xl font-bold">Education</h2>
          <div className="w-full">
              <p className="mb-3"><span className="font-bold text-cyan-400">Certified ScrumMaster (CSM)</span> Scrum Alliance | 2020</p>
              <p className="mb-3"><span className="font-bold text-cyan-400">Bachelor of Design (Honours)</span>York University / Sheridan College | 2006–2010</p>
          </div>
        </div>
      </section>
      <section className="py-5 contact">
        <div className="container mx-auto pt-4 pb-8 text-xl">
          <h2 className="w-full my-2 mb-8 text-3xl font-bold">Contact</h2>
          <p className="leading-normal mb-6">
            I'm currently considering opportunities as a Product Designer or if
            my skillset matches the missing puzzle piece to your project I'm
            available for freelance work.
          </p>
          <a
            href="mailto:hithere@gobanana.ca"
            className="block text-slate-400 hover:underline hover:text-cyan-400"
          >
            hithere@gobanana.ca
          </a>
          <span className="">@gobanana66</span> on{" "}
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gobanana66"
            className="text-slate-400 hover:underline hover:text-cyan-400"
          >
            GitHub
          </a>
          {" "}and{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dribbble.com/gobanana66"
            className="text-slate-400 hover:underline hover:text-cyan-400"
          >
            Dribbble
          </a>
         
          
          <a
            href={resumePDF}
            target="_blank"
            rel="noreferrer"
            className="block w-fit bg-cyan-600 hover:bg-cyan-700 text-white text-sm mt-10 py-2 px-4 rounded-full"
          >
            Download Resume
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>{GatsbyConfig.siteMetadata.title}</title>
    <meta name="description" content={GatsbyConfig.siteMetadata.description} />
  </>
);
