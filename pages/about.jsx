import { Footer, Header } from "@/components/common";
import Head from "next/head";
import React from "react";
import About from "../components/About";

function AboutUs() {

  return (
    <div>
      <Head>
        <title>{'About'}</title>
        <meta name="description" content={`About`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{paddingTop: "100px"}}>
        <Header />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default AboutUs;
