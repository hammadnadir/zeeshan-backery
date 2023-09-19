import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bites Cake Crafters</title>
        <meta name="description" content="Bites Cake Crafters is providing homemade baked goodies for every taste." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section class="landing">
          <div class="landing-inner">
            <img class="logo" src="/logo.png" alt="TheLittleBakery" />
            <p>Homemade Baked Goodies For Every Taste</p>
            <h1>Coming Soon</h1>
            <div class="countdown"></div>
          </div>
        </section>
      </main>
    </>

  )
}
