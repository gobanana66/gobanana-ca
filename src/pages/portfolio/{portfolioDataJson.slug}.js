import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import data from "../../data/portfolioData.json"
import Parser from 'html-react-parser';

const CaseStudy = ({ params }) => {
  const item = data.find(i => i.slug === params.slug)

  if (!item) {
    return (
      <Layout pageTitle="Not Found">
        <h1 className="text-3xl">404 – Case Study Not Found</h1>
        <Link to="/portfolio" className="text-cyan-400 underline mt-4 block">← Back</Link>
      </Layout>
    )
  }

  return (
    <Layout pageTitle={item.title}>
       <section className="py-5 portfolio">
       <h2 className="w-full my-2 mb-8 text-3xl font-bold">{item.title}</h2>
      <p className="mt-4 mb-6">{item.summary}</p>
      {item.tags && (
        <div className="mb-4 text-sm flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className={"tag tag-" + tag}>{tag}</span>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-5">
        <h3>Overview</h3>
        <p>{item.overview}</p>
        <h3>Problem</h3>
        <p>{item.problem}</p>
        <h3>Solution</h3>
        <p>{item.solution}</p>
        <h3>Impact</h3>
        <div>{item.impact} </div>
      </div>
      <div className="flex gap-4">
        {item.liveURL && <a href={item.liveURL} className="text-cyan-400 underline" target="_blank" rel="noreferrer">View Live</a>}
        {item.github && <a href={item.github} className="text-cyan-400 underline" target="_blank" rel="noreferrer">GitHub</a>}
      </div>
      <Link to="/portfolio" className="mt-10 block text-sm text-gray-500 underline">← Back to Portfolio</Link>
      </section>
    </Layout>
  )
}

export default CaseStudy
