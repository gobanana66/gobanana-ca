import * as React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import JSONData from "../data/portfolioData.json"



const PortfolioPage = ({ data }) => {
  // Memoized image lookup object
  const imageCache = React.useMemo(() => {
    const cache = {}
    data.allFile.nodes.forEach(({ name, ...rest }) => {
      const key = name.replace(/^portfolio_/, "")
      cache[key] = { name, ...rest }
    })
    return cache
  }, [data])

  // Helper to get image based on title
  const getImagePath = (title) => {
    const key = title.toLowerCase().replace("&", "and").replaceAll(" ", "-")
    return imageCache[key]
  }

  return (
    <Layout>
      <section id="hero" className="py-20"><div className="text-center">
        <h1 className="my-4 text-5xl font-bold leading-tight">Designing thoughtful, scalable experiences that make complex products feel simple.</h1>
        <p className="leading-normal text-xl mb-8">
        With over 15 years of experience, I specialize in end-to-end product design—leading strategy, research, and systems thinking to craft intuitive software that solves real problems. I thrive in cross-functional, remote-first teams and bring UX into every stage of the development lifecycle to elevate quality and collaboration.
        </p>
      </div></section><div class="flex items-center justify-center gap-4 my-[50px]">
  <div class="flex-1 h-px bg-white/20"></div>
  <span class="text-white text-md font-semibold tracking-wider uppercase">Featured Work</span>
  <div class="flex-1 h-px bg-white/20"></div>
</div>

      <section className="py-5 portfolio">
        <div className="w-full flex flex-col gap-9">
          {JSONData.map((item, index) => {
            const imageData = getImagePath(item.title)

            return (
              <div key={index} className="card portfolio-item ">
        
                 

                <div class="content w-1/3">
                  <div className="title font-semibold text-cyan-400 text-xl mt-4">
                    <h3
                      to={`/work/${item.slug}`}
                      
                    >
                      {item.title}
                    </h3>
                  </div>
  
                 
  
                  <div className="summary mb-2">{item.summary}</div>
                  {/* {item.tags && (
                    <div className="tags flex flex-wrap gap-2 mt-2 mb-5 text-xs">
                      {item.tags.map((tag) => (
                        <span key={tag} className={"tag tag-" + tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )} */}
                  {item.liveURL && (
                    <a
                      href={item.liveURL}
                      target="_blank"
                      rel="noreferrer"
                      className="link text-cyan-400 hover:underline mb-3"
                    >
                      View Live
                    </a>
                  )}
                  {item.liveURL && item.github && <span className="sep"> · </span>}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="link text-cyan-400 hover:underline mb-3"
                    >
                      GitHub
                    </a>
                  )}
                  <Link className="btn" to={`/work/${item.slug}`}>Learn More</Link>
                </div> <div className="flex-1 portfolio-image">
                  <div className="absolute inset-0"
                    >
                      {imageData && (
                        <GatsbyImage
                          image={imageData.childImageSharp.gatsbyImageData}
                          alt={item.title}
                          className="h-[200px] w-full"
                          imgClassName="rounded-md"
                          placeholder="blurred"
                          objectPosition="top"
                        />
                      )}
                      <img src="/AI Workflow-Voice-to-Activity Logging.png"  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                </div> 
              
                </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default PortfolioPage
