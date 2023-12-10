import Head from "next/head";
import { Footer, Header } from "@/components/common";
import { Banner, Products } from "@/components/home";
import Featured from "@/components/home/featured";

export default function Home() {

  return (
    <>
      <Head>
        <title>Fyp</title>
        <meta name="description" content={`Fyp Zeeshan`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{paddingTop: "40px"}}>
        <Header />
        <Banner />
        <Featured />
        <Products />
        <Footer />
      </main>
    </>
  );
}

