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
    <Layout pageTitle="portfolio">
      <section className="py-5 portfolio">
        <h2 className="w-full my-2 mb-8 text-3xl font-bold">Portfolio</h2>
        <div className="w-full flex flex-col gap-9">
          {JSONData.map((item, index) => {
            const imageData = getImagePath(item.title)

            return (
              <div key={index} className="portfolio-item gap-9 flex flex-col md:flex-row flex-wrap  text-lg">
                <Link
                  to={`/portfolio/${item.slug}`}
                  className="flex-1 rounded-md portfolio-image block"
                  title={item.title}
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
                </Link>

                <div class="content flex-1">
                  <div className="title font-semibold text-cyan-400 text-xl mt-4">
                    <Link
                      to={`/portfolio/${item.slug}`}
                      className="hover:underline"
                    >
                      {item.title}
                    </Link>
                  </div>
  
                  {item.tags && (
                    <div className="tags flex flex-wrap gap-2 mt-2 mb-5 text-xs">
                      {item.tags.map((tag) => (
                        <span key={tag} className={"tag tag-" + tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
  
                  <div className="summary mb-2">{item.summary}</div>
  
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

export const Head = () => (
  <title>Portfolio - Anna Klibanov - Product Designer / Front-End Web Developer</title>
)
