import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import resumePDF from "./AnnaKlibanovResume.pdf"



const resume = [
  {
    year: "2010-Present",
    title: "Freelance Designer/Developer",
    company: "GoBanana Design",
    description:
      "Extensive experience working with clients across all industries and media. Worked with clients on small projects like single-page websites as well as large-scale projects including print and digital materials from concept to full execution installations."
  },
  {
    year: "2020-2022",
    title: "Scrum Master (CSM)",
    company: "Edsby",
    description:
      "Led a 20+ person engineering team in Agile development. Facilitated relationships with the Product Owner, business team, customer needs, and other stakeholders to ensure a clear and seamless product development process with best practices and user-centred design processes."
  },
  {
    year: "2011-2022",
    title: "Senior Product Designer / Senior UX/UI Desiner / Front-End Developer",
    company: "Edsby",
    description:
      "Designed and implemented user interfaces of the software to create an easy and pleasant user experience, taking into account market research, user testing, customer needs, and business requirements to iterate through designs for the most effective solutions. Collaborated with the engineering team to ensure implementation of designs and seamless product deployment. Designed, created, and maintained all public-facing marketing materials across different media."
  },
  {
    year: "2010-2011",
    title: "Graphic and Web Designer / Front-End Web Developer",
    company: "Ingle International",
    description:
      "Designed and developed websites for clients, created intuitive user interfaces for web applications, and worked closely with programmers to achieve optimal functionality. Created other materials for the company and its clients, such as interactive flash presentations and print materials."
  },
  {
    year: "2008-2011",
    title: "Web Designer and Technician",
    company: "York University",
    description:
      "Maintained the web sites for the Fine Arts Computing department and Visual Resources Centre. Assisted faculty with technical problems such as setting up new computers and equipment, troubleshot more complicated issues to relay the information to the next level of support."
  },
]

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="home">
      <div className="pt-10">
        <div className="h-60">
          <StaticImage
            src="../images/profile.jpg"
            alt="Anna Klibanov headshot"
            className = "h-full w-full "
            imgClassName="rounded-full"
            objectFit="contain"
            imgStyle={{
              width: 'auto',
              margin: '0 auto'
            }}
          />
        </div>
        <h1 className="my-4 text-5xl font-bold leading-tight">
            Hi, I'm Anna
        </h1>
        <p className="leading-snug text-3xl font-semibold mb-8">
          I've been designing and building software for over 14 years with a strong focus on an intuitive and seamless user experience. I'm creative, adaptive, and love to learn to overcome obstacles and achieve my goals.
        </p>
        <p className="leading-normal text-xl mb-8">
            Most recently I worked at Edsby, creating software for K-12 education aimed at students, parents, teachers, and administrators, seeking to unify the learning management and remote learning experience across all four stakeholders. Over my tenure at Edsby, I worked from the initial product idea to its current iteration with over 215 million users worldwide and winning more than 70 awards. I was responsible for the design and front-end developement of the product as well as all public-facing materials including the website, marketing materials, case studies, and promotional video content.
        </p>
      </div>
      <section className="py-5 resume"><a id="resume" />
        <h2 className="w-full my-2 mb-8 text-3xl font-bold">
            Work Experience
        </h2>
        <div className="w-full  flex flex-col flex-grow flex-shrink">
        {resume.map(resumeItem => (
          <div className="resume-item mb-8 flex-1 flex flex-wrap" key={resumeItem.title}>
              <div className="date w-1/6 min-w-[110px]  text-slate-400">
                {resumeItem.year}
              </div>
              <div className="right w-full md:w-5/6 ">
                  <div className="title font-semibold text-pink-600">{resumeItem.title}</div>
                  <div className="company text-slate-300 mb-3">{resumeItem.company}</div>
                  <div className="description text-base  mb-5">
                    {resumeItem.description}
                  </div>
              </div>
          </div>
        ))}
        </div>
      </section> 
      <section className="py-5 skills">
        <div className="container text-base mx-auto pt-4 pb-12 text-xl">
          <h2 className="w-full my-2 mb-8 text-3xl font-bold">
              Skills
          </h2>
          <div className="md:flex justify-between w-full">
                <ul className="list-disc ml-[20px] leading-loose">
                  <li>Product design</li>
                  <li>UX/UI design</li>
                  <li>User research and testing</li>
                  <li>Wireframing and prototyping</li>
                  <li>Web development</li>
                  <li>Branding</li>
                  <li>Project management</li>
                  <li>Agile (Scrum) methodologies</li>
                </ul>
                <ul className="list-disc ml-[20px] leading-loose">
                  <li>Team leadership</li>
                  <li>Verbal, written, and interpersonal communication</li>
                  <li>Adobe Creative Suite</li>
                  <li>Figma</li>
                  <li>MS Visual Studio</li>
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </ul>
            </div>
        </div>
      </section>
      <section className="py-5 contact">
        <div className="container mx-auto pt-4 pb-12 text-xl">
            <h2 className="w-full my-2 mb-8 text-3xl font-bold">Contact</h2>
            <p className="leading-normal mb-6">
                I'm currently considering opportunities as a Product Designer or if my skillset matches the missing puzzle piece to your project I'm available for freelance work.
            </p>
            <a href="mailto:hithere@gobanana.ca" className="block text-slate-400 hover:underline hover:text-pink-600">hithere@gobanana.ca</a>
            <span className="">@gobanana66</span> on <a href="https://twitter.com/gobanana66" target="_blank" className="text-slate-400 hover:underline hover:text-pink-600">Twitter</a>, <a target="_blank" href="https://dribbble.com/gobanana66" className="text-slate-400 hover:underline hover:text-pink-600">Dribbble</a>, <a target="_blank" href="https://github.com/gobanana66" className="text-slate-400 hover:underline hover:text-pink-600">GitHub</a>
            <a href={resumePDF} className="block w-fit bg-pink-600 hover:bg-blue-700 text-white text-sm mt-10 py-2 px-4 rounded-full">Download Resume</a>
        </div>
      </section>
    </Layout>
     
  )
}

export default IndexPage

export const Head = () => <title>Anna Klibanov - Product Designer / Front-End Web Developer</title>
