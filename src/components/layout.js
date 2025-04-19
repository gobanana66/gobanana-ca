import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { StaticImage } from "gatsby-plugin-image";
import "../utils/fontawesome"




const resumePDF = "/AnnaKlibanovResume-2025.pdf"

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

const Layout = ({ pageTitle, description = '', children }) => {

  const fullTitle = pageTitle
    ? `${toTitleCase(pageTitle)} – Anna Klibanov`
    : 'Anna Klibanov – Senior Product/UX Designer'

  const metaDescription = description || "Anna Klibanov is a Senior UX/UI and product designer blending strategy, user-centered design, and front-end development.";


  return (
    <div className="text-slate-300  max-w-6xl md:mx-auto">
       <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>
       <header className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold no-underline"><div className="rounded-full overflow-hidden">
            <img src="/profile.jpg" className="h-[40px]" />
        </div>Anna Klibanov</Link>
        <nav className="flex items-center py-5" data-page={pageTitle}>
          <ul>
            {/* <li><Link to="/work">Work</Link></li> */}
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
       </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="copyright text-center text-gray-600 text-xs my-2">{new Date().getFullYear()} © Anna Klibanov. All rights reserved.</div>
        <div className="copyright text-center text-gray-600 text-xs my-2">Made with <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com/" className='underline'>GatsbyJS</a> + <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/" className='underline'>TailwindCSS</a></div>
        </footer></div>
  )
}

export default Layout