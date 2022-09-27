import * as React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import JSONData from "./portfolio.json"



const PortfolioPage = ({ data }) => {
  const getImagePath = (title) => {
    const imagePath = data.allFile.nodes.find(({ name })=> name == 'portfolio_'+title.toLowerCase().replace('&','and').replaceAll(' ','-'))
    return imagePath
  } 
  return (
    <Layout pageTitle="portfolio">

      
      <section className="py-5 portfolio">
        <h2 className="w-full my-2 mb-8 text-3xl font-bold">
          Portfolio
        </h2>
        <div className="w-full grid grid-cols-2cols gap-9">
        {JSONData.content.map((item, index) => {
          if(getImagePath(item.title)) {
            return <div key={index} className="portfolio-item text-lg">
              <GatsbyImage 
                image={getImagePath(item.title).childImageSharp.gatsbyImageData} 
                alt={item.title} 
                className = "h-[200px] w-full "
                imgClassName="rounded-md"
                placeholder="blurred"
                objectPosition={"top"} />
              <div className="title font-semibold text-pink-600 text-xl mt-4"><a target="_blank" href={item.liveURL ? item.liveURL: item.github } className="hover:underline">{item.title}</a></div>
                <div className="tags flex flex-wrap gap-2 mt-2 mb-5 text-xs">
                  {item.tags && item.tags.map(tag => (
                    <span key={tag} className={"tag tag-" + tag} > { tag }</span>
                  ))}
                </div>
                <div className="description mb-2">
                  {item.description}
                </div>
                {item.liveURL && <a href={item.liveURL} target="_blank" className="link text-pink-600 hover:underline mb-3">View Live</a>}
                {(item.liveURL && item.github) && <span className="sep"> · </span>}
                {item.github && <a href={item.github} target="_blank" className="link text-pink-600 hover:underline mb-3">GitHub</a>}
              
              </div>
          }
        
        }
        )}
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
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
`

export default PortfolioPage

export const Head = () => <title>Portfolio - Anna Klibanov - Product Designer / Front-End Web Developer</title>
