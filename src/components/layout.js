import * as React from 'react'
import { Link } from 'gatsby'

const bannerStyle = {
    fontSize: 180,
    fontWeight: 'bold',
    position: 'fixed',
    zIndex: -1,
    opacity: .05,
    lineHeight: 0.85,
    textTransform: 'uppercase',
    left: 0,
    top: 200,
}

const Layout = ({ pageTitle, children }) => {

  return (
    <div className="text-slate-300  max-w-3xl m-9 md:mx-auto md:m-0">
        <div className="banner" style={bannerStyle}>Anna Klibanov</div>
      <nav className="flex py-5" data-page={pageTitle}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <div className="copyright text-center text-gray-600 text-xs my-2">2022 © Anna Klibanov. All rights reserved.</div>
        <div className="copyright text-center text-gray-600 text-xs my-2">Made with <a  target="_blank" href="https://www.gatsbyjs.com/" className='underline'>GatsbyJS</a> + <a target="_blank" hrerf="https://tailwindcss.com/" className='underline'>TailwindCSS</a></div>
        </footer></div>
  )
}

export default Layout