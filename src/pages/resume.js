import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";

const resumePDF = "/AnnaKlibanovResume-2025.pdf";

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
      "Partner cross-functionally with engineering and product leadership to define roadmap and OKRs.",
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
      "Mentored junior designers.",
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
      "Delivered UX, branding, and development work for clients across tech, retail, and nonprofit sectors.",
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
    <Layout>
      <div className="pt-10 flex flex-wrap  justify-between items-baseline">
        {" "}
        {}{" "}
        <h1 className="my-4 text-5xl font-bold leading-tight">
          Anna Klibanov{" "}
          <a
            className="flex text-sm font-normal"
            href="mailto:anna.klibanov@gmail.com"
          >
            anna.klibanov @gmail.com{" "}
          </a>{" "}
        </h1>{" "}
        <a
          href={resumePDF}
          download
          target="_blank"
          rel="noreferrer"
          className="btn mt-10 block w-fit"
        >
          Download Resume{" "}
        </a>{" "}
      </div>{" "}
      <section className="py-5" id="resume">
        <h2 className="w-full my-2 mb-8 text-3xl font-bold">
          {" "}
          Work Experience{" "}
        </h2>{" "}
        <div className="w-full  flex flex-col flex-grow flex-shrink">
          {" "}
          {resume.map((resumeItem) => (
            <div
              className="resume-item mb-2 flex-1 flex flex-wrap"
              key={resumeItem.title}
            >
              <div className="w-full">
                <div className="title font-semibold text-pink-500">
                  {" "}
                  {resumeItem.title}{" "}
                </div>{" "}
                <div className="company text-slate-300 mb-4 text-sm">
                  <span> {resumeItem.company} </span>{" "}
                  <span className="date text-slate-400">
                    <span className="startyear"> {resumeItem.startyear}– </span>{" "}
                    <span className="endyear"> {resumeItem.endyear} </span>{" "}
                  </span>{" "}
                </div>{" "}
                <div className="description text-sm mb-7">
                  {" "}
                  {resumeItem.description}{" "}
                  <ul className="list-disc ml-4">
                    {" "}
                    {resumeItem.bullets.map((resumeBullet, index) => (
                      <li className="mb-2" key={index}>
                        {" "}
                        {resumeBullet}{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-5" id="skills">
        <h2 className="w-full my-2 mb-8 text-3xl font-bold"> Skills </h2>{" "}
        <div className="w-full">
          <p className="mb-3">
            <span className="font-bold text-pink-500">
              {" "}
              Product & Process:{" "}
            </span>
            Product Design, UX / UI Design, User Research & Usability Testing,
            Design Systems, SDLC Process Integration, Agile & Scrum, Roadmap
            Planning, Product - Led Growth{" "}
          </p>{" "}
          <p className="mb-3">
            <span className="font-bold text-pink-500">
              Collaboration & Leadership:{" "}
            </span>
            Cross - functional Collaboration, Team Leadership & Mentorship,
            Stakeholder Communication{" "}
          </p>{" "}
          <p className="mb-3">
            <span className="font-bold text-pink-500">
              Tools & Technologies:{" "}
            </span>
            Figma, Adobe Creative Suite, Visual Studio Code, Git, HTML / CSS /
            JS, Jira, Remote Collaboration Tools{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-5" id="skills">
        <h2 className="w-full my-2 mb-8 text-3xl font-bold"> Education </h2>{" "}
        <div className="w-full">
          <p className="mb-3">
            <span className="font-bold text-pink-500">
              Certified ScrumMaster(CSM){" "}
            </span>
            Scrum Alliance | 2020{" "}
          </p>{" "}
          <p className="mb-3">
            <span className="font-bold text-pink-500">
              Bachelor of Design(Honours){" "}
            </span>
            York University / Sheridan College | 2006– 2010{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-5 contact">
        <a
          href={resumePDF}
          download
          target="_blank"
          rel="noreferrer"
          className="btn mt-10 block w-fit"
        >
          Download Resume{" "}
        </a>{" "}
      </section>{" "}
    </Layout>
  );
};

export default IndexPage;
export const Head = () => <Seo title="Resume" />;
