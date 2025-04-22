import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo";

const getImagesBySlug = (slug, allFile) => {
  const prefix = `portfolio_${slug}`;
  const matches = allFile.nodes.filter(({ name }) => name.startsWith(prefix));

  // Sort images by suffix number (default image has no number = 0)
  const sorted = matches.sort((a, b) => {
    const getIndex = (name) => {
      const match = name.match(/-(\d+)$/);
      return match ? parseInt(match[1]) : 0;
    };
    return getIndex(a.name) - getIndex(b.name);
  });
  return sorted;
};

const CaseStudy = ({ params, data }) => {
  const { portfolioDataJson: item, allFile } = data;

  const slug = item.slug;
  let CustomTemplate = null;

  try {
    // Attempt to load a custom template using dynamic require
    CustomTemplate = require(`../../templates/work/${slug}.js`).default;
  } catch (err) {
    CustomTemplate = null; // fallback to default layout
  }

  if (CustomTemplate) {
    return <CustomTemplate item={item} allFile={allFile} params={params} />;
  }

  const images = getImagesBySlug(item.slug, allFile);
  const heroImage = images[0];
  const overviewImages = images.slice(1, 3);
  const gridImages = images.slice(3);

  function parseArrayFieldsToHTML(obj, options = {}) {
    const { fieldsToConvert = [], appendSuffix = "Html" } = options;
    const result = {
      ...obj,
    };

    fieldsToConvert.forEach((field) => {
      const value = obj[field];
      if (Array.isArray(value) && value.length > 1) {
        result[`${field}${appendSuffix}`] = `<ul>${value
          .map((item) => `<li>${item}</li>`)
          .join("")}</ul>`;
      } else if (Array.isArray(value)) {
        result[`${field}${appendSuffix}`] = `<p>${value.join("")}</p>`;
      }
    });

    return result;
  }

  if (!item) {
    return (
      <Layout pageTitle="Not Found">
        <h1 className="text-3xl"> 404– Case Study Not Found </h1>
      </Layout>
    );
  }

  const itemHtml = parseArrayFieldsToHTML(item, {
    fieldsToConvert: ["impact", "problem", "solution"],
  });

  return (
    <Layout pageTitle={item.title}>
      <section className="py-5 portfolio">
        <div className="grid items-top gap-9 mb-12">
          <div>
            <h2 className="w-full my-2 mb-3 font-normal text-white/50">
              {item.title}
            </h2>
            <p className="mt-4 mb-6 text-4xl"> {item.summary} </p>
          </div>
        </div>
        {heroImage && (
          <GatsbyImage
            image={heroImage.childImageSharp.gatsbyImageData}
            alt={`${item.title} hero image`}
            className="shadow-xl rounded-lg  max-h-[700px] mb-20"
          />
        )}
        <div className="portfolio-section">
          <h3> Overview </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: itemHtml.overview,
            }}
          />
        </div>
        {overviewImages?.length > 0 && (
          <div className="grid grid-cols-2 gap-12 my-20">
            {overviewImages.map((img, i) =>
              img?.childImageSharp?.gatsbyImageData ? (
                <GatsbyImage
                  key={i}
                  image={img.childImageSharp.gatsbyImageData}
                  alt={`${item.title} overview image ${i + 2}`}
                  className="shadow-xl rounded-md"
                  objectFit="contain"
                />
              ) : null
            )}
          </div>
        )}

        <div className="portfolio-section">
          <h3> Problem </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: itemHtml.problemHtml,
            }}
          />
        </div>
        <div className="portfolio-section">
          <h3> Solution </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: itemHtml.solutionHtml,
            }}
          />
        </div>
        <div className="portfolio-section">
          <h3> Impact </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: itemHtml.impactHtml,
            }}
          />
        </div>
        {gridImages.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
              {gridImages.map((img, i) => (
                <GatsbyImage
                  key={i}
                  image={img.childImageSharp.gatsbyImageData}
                  alt={`${item.title} grid image ${i + 4}`}
                  className="shadow-xl rounded-lg"
                  objectFit="contain"
                />
              ))}
            </div>
          </>
        )}
      </section>
      <div className="none grid-cols-4 grid-cols-2  sm:grid-cols-4 basis-[20vw] flex-1"></div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    portfolioDataJson(slug: { eq: $slug }) {
      title
      summary
      overview
      impact
      problem
      solution
      slug
    }
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
        publicURL
      }
    }
  }
`;

export default CaseStudy;
export const Head = ({ data }) => {
  const item = data.portfolioDataJson;
  const heroImage = getImagesBySlug(item.slug, data.allFile)[0];
  const ogImageUrl = heroImage?.publicURL;

  return (
    <Seo
      title={item.title}
      description={item.summary}
      pathname={`/work/${item.slug}`}
      image={ogImageUrl}
    />
  );
};
