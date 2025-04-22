import * as React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Contact" showFooter={false}>
      <section id="hero" className="py-20">
        <div className="text-center">
          <div className="bg-slate-800/50 rounded-xl p-12 max-w-4xl mx-auto shadow-md backdrop-blur mb-20">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Let’ s Build Something Together{" "}
            </h1>{" "}
            <p className="leading-normal text-3xl mb-8">
              If you 're looking for a designer who can balance vision and
              execution, let’ s chat.I 'm open to freelance, collaborations, or
              the next great full - time adventure.{" "}
            </p>{" "}
            <div className="links text-center text-3xl leading-relaxed pb-8">
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
                <a
                  href="mailto:anna.klibanov@gmail.com"
                  className="btn py-5 px-10"
                >
                  <FontAwesomeIcon icon={["fas", "envelope"]} /> Email Me{" "}
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/annaklibanov/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn py-5 px-10"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} /> Connect With Me{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <span className=""> @gobanana66 </span> on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gobanana66"
            className="text-slate-400 hover:underline hover:text-cyan-400"
          >
            GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dribbble.com/gobanana66"
            className="text-slate-400 hover:underline hover:text-cyan-400"
          >
            Dribbble{" "}
          </a>{" "}
        </div>{" "}
      </section>{" "}
    </Layout>
  );
};

export default IndexPage;
