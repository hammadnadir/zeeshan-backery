import Head from "next/head";
import { Footer, Header } from "@/components/common";
import { Banner, Products } from "@/components/home";
import Featured from "@/components/home/featured";
import Topbar from "@/components/common/topbar";
import Categories from "@/components/home/categories";
import Clients from "@/components/home/clients";

export default function Home() {

  return (
    <>
      <Head>
        <title>Fyp</title>
        <meta name="description" content={`Fyp Zeeshan`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ paddingTop: "40px" }}>
        {/* <Topbar /> */}
        {/* <Header /> */}
        <Banner />
        <Featured />
        <Categories />
        <Products />
        <Clients />
        <Footer />
      </main>
    </>
  );
}

