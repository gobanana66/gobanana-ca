import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import "../utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const resumePDF = "/AnnaKlibanovResume-2025.pdf";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

const Layout = ({
  pageTitle,
  description = "",
  children,
  showFooter = true,
}) => {
  const fullTitle = pageTitle
    ? `${pageTitle} – Anna Klibanov`
    : "Anna Klibanov – Senior Product/UX Designer";

  const metaDescription =
    description ||
    "Anna Klibanov is a Senior UX/UI and product designer blending strategy, user-centered design, and front-end development.";

  return (
    <div className="text-slate-300  max-w-7xl md:mx-auto">
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>
      <header className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold no-underline text-white"
        >
          <div className="rounded-full overflow-hidden">
            <img src="/profile.jpg" className="h-[40px]" />
          </div>
          Anna Klibanov
        </Link>
        <nav className="flex items-center py-5" data-page={pageTitle}>
          <ul>
            {/* <li><Link to="/work">Work</Link></li> */}
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="mailto:anna.klibanov@gmail.com">Email</Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/annaklibanov/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>

      {showFooter && (
        <footer className="mt-20 py-20 text-center text-xs text-gray-500 border-t border-t-white/20">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Let’s Build Something Together
          </h1>
          <p className="leading-normal text-3xl mb-8">
            If you're looking for a designer who can balance vision and
            execution, let’s chat. I'm open to freelance, collaborations, or the
            next great full-time adventure.
          </p>
          <div className="links text-center text-3xl leading-relaxed pb-8">
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
              <a
                href="mailto:anna.klibanov@gmail.com"
                className="btn py-5 px-10"
              >
                <FontAwesomeIcon icon={["fas", "envelope"]} /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/annaklibanov/"
                target="_blank"
                className="btn py-5 px-10"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} /> Connect With Me
              </a>
            </div>
          </div>
        </footer>
      )}

      <footer>
        <div className="copyright text-center text-gray-600 text-xs my-2">
          {new Date().getFullYear()} © Anna Klibanov. All rights reserved.
        </div>
        <div className="copyright text-center text-gray-600 text-xs my-2">
          Made with{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.gatsbyjs.com/"
            className="underline"
          >
            GatsbyJS
          </a>{" "}
          +{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://tailwindcss.com/"
            className="underline"
          >
            TailwindCSS
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
