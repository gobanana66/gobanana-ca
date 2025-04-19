import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import data from "../../data/portfolioData.json"
import Parser from 'html-react-parser';

const CaseStudy = ({ params }) => {
  const item = data.find(i => i.slug === params.slug)

  function parseArrayFieldsToHTML(obj, options = {}) {
    const {
      fieldsToConvert = [],
      appendSuffix = "Html",
    } = options;
  
    const result = { ...obj };
  
    fieldsToConvert.forEach((field) => {
      const value = obj[field];
      if(value.length > 1) {
        if (Array.isArray(value)) {
          const html = `<ul>${value
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul>`;
    
          result[`${field}${appendSuffix}`] = html;
        } 
      } else {
        const html = `<p>${value
          .map((item) => `${item}`)
          .join("")}</p>`;
  
        result[`${field}${appendSuffix}`] = html;
      }
      
    });
    return result;
  }
  

  if (!item) {
    return (
      <Layout pageTitle="Not Found">
        <h1 className="text-3xl">404 – Case Study Not Found</h1>
      </Layout>
    )
  }

  const itemHtml = parseArrayFieldsToHTML(item, {
    fieldsToConvert: ["impact", "problem", "solution"],
  });


  return (
    <Layout pageTitle={itemHtml.title}>
       <section className="py-5 portfolio">
       <h2 className="w-full my-2 mb-8 text-3xl font-bold">{itemHtml.title}</h2>
      <p className="mt-4 mb-6">{itemHtml.summary}</p>
      {itemHtml.tags && (
        <div className="mb-4 text-sm flex flex-wrap gap-2">
          {itemHtml.tags.map(tag => (
            <span key={tag} className={"tag tag-" + tag}>{tag}</span>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-5">
        <h3>Overview</h3>
        <p>{itemHtml.overview}</p>
        <h3>Problem</h3>
        <div dangerouslySetInnerHTML={{ __html: itemHtml.problemHtml }} />
        <h3>Solution</h3>
        <div dangerouslySetInnerHTML={{ __html: itemHtml.solutionHtml }} />
        <h3>Impact</h3>
        <div dangerouslySetInnerHTML={{ __html: itemHtml.impactHtml }} />
        
      </div>
      <div className="flex gap-4">
        {itemHtml.liveURL && <a href={itemHtml.liveURL} className="text-cyan-400 underline" target="_blank" rel="noreferrer">View Live</a>}
        {itemHtml.github && <a href={itemHtml.github} className="text-cyan-400 underline" target="_blank" rel="noreferrer">GitHub</a>}
      </div>
      </section>
    </Layout>
  )
}

export default CaseStudy
export const Head = ({ params }) => {
  const item = data.find(i => i.slug === params.slug)
  return <title>{item ? item.title + " – Anna Klibanov" : "Case Study – Anna Klibanov"}</title>
}