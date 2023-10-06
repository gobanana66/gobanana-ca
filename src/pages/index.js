import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import resumePDF from "./AnnaKlibanovResume.pdf"
import GatsbyConfig from '../../gatsby-config'


const resume = [
  {
    year: "2010–Present",
    title: "Freelance Designer/Developer",
    company: "GoBanana Design",
    bullets: [
      "Extensive experience working with clients across all industries and media", 
      "Worked with clients on small projects like single-page websites as well as large-scale projects including print and digital materials from concept to full execution installations."]
  },
  {
    year: "2022–2023",
    title: "Senior UX/UI Designer",
    company: "ActiveState",
    bullets: [
      "Managed a design team to deliver low-and high-fidelity wireframes, mockups, and prototypes that offered exceptional user experiences",
      "Employed tools and metrics to measure the success of designs, conduct user experiments, and promote Product Led Growth",
      "Worked closely with engineering teams on the effective execution of the designs",
      "Collaborated with cross-functional teams and product managers in roadmap planning and setting quarterly goals"
    ]
  },
  {
    year: "2020–2022",
    title: "Scrum Master (CSM)",
    company: "Edsby",
    bullets: [
      "Led a 20+ person engineering team in Agile development",
      "Facilitated relationships with the Product Owner, business team, customer needs, and other stakeholders to ensure a clear and seamless product development process with best practices and user-centred design processes",
    ]
  },
  {
    year: "2011–2022",
    title: "Senior Product Designer / Front-End Developer",
    company: "Edsby",
    bullets: [
      "Developed UI elements and prototypes for mobile/web applications",
      "Constructed wireframes, user flows, low-and high-fidelity mockups, and prototypes for new and existing products and features",
      "Conducted market research and user testing/interviews to iterate through designs for the most effective solutions",
      "Collaborated with the engineering team to ensure implementation of designs and seamless product deployment",
      "Designed, created, and maintained all public-facing marketing materials across different media",       
      ]
  },
  {
    year: "2010–2011",
    title: "Graphic and Web Designer / Front-End Web Developer",
    company: "Ingle International",
    bullets: [
      "Designed and developed websites for clients",
      "Created intuitive user interfaces for web applications",
      "Worked closely with programmers to achieve optimal functionality",
      "Created other materials for the company and its clients, such as interactive flash presentations and print materials"
    ]
  },
  // {
  //   year: "2008–2011",
  //   title: "Web Designer and Technician",
  //   company: "York University",
  //   description:
  //     "Maintained the web sites for the Fine Arts Computing department and Visual Resources Centre. Assisted faculty with technical problems such as setting up new computers and equipment, troubleshot more complicated issues to relay the information to the next level of support.",
  // },
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
            placeholder="none"
            imgStyle={{
              width: 'auto',
              margin: '0 auto'
            }}
          />
        </div>
        <h1 className="my-4 text-5xl font-bold leading-tight">
            Hi, I'm Anna
        </h1>
        <p className="leading-normal text-xl mb-8">
        Over the last 15 years, I've worked across diverse industries designing and building software. My most scaled work was at Edsby, an education platform servicing over 215 million users worldwide and winning more than 70 awards. My passion lies in crafting functional and user-centric products, where I meticulously consider both high-level perspectives and minute details. My skill set, spanning creative, practical, and technical domains, gives me a unique approach to product design and management. I'm creative, adaptive, and love to learn. I am motivated by a challenge and love the reward of overcoming obstacles.
        </p>
      </div>
      <section className="py-5" id="resume">
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
                  <div className="description text-sm  mb-5">
                    {resumeItem.description} 
                    <ul className="list-disc ml-4">
                    {resumeItem.bullets.map((resumeBullet,index) => (
                        <li key={index}>{resumeBullet}</li>
                    )
                      )
                    }
                    </ul>
                 
                      </div>
              </div>
          </div>
        ))}
        </div>
      </section> 
      <section className="py-5" id="skills">
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
                  <li>Design systems</li>
                  <li>Web development</li>
                  <li>Branding</li>
                  <li>Project management</li>
                  
                </ul>
                <ul className="list-disc ml-[20px] leading-loose">
                <li>Agile (Scrum) methodologies</li>
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
            <span className="">@gobanana66</span> on <a href="https://twitter.com/gobanana66" target="_blank" rel="noreferrer" className="text-slate-400 hover:underline hover:text-pink-600">Twitter</a>, <a target="_blank" rel="noreferrer" href="https://dribbble.com/gobanana66" className="text-slate-400 hover:underline hover:text-pink-600">Dribbble</a>, <a target="_blank" rel="noreferrer" href="https://github.com/gobanana66" className="text-slate-400 hover:underline hover:text-pink-600">GitHub</a>
            <a href={resumePDF} target="_blank" rel="noreferrer" className="block w-fit bg-pink-600 hover:bg-blue-700 text-white text-sm mt-10 py-2 px-4 rounded-full">Download Resume</a>
        </div>
      </section>
    </Layout>
     
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>{GatsbyConfig.siteMetadata.title}</title>
    <meta name="description" content={GatsbyConfig.siteMetadata.description} />
  </>
)