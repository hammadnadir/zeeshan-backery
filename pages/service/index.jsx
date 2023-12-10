import { Footer, Header } from '@/components/common'
import Head from 'next/head'
import React from 'react'
import Service from '@/components/service'

function Service_page() {


  return (
    <div>
      <Head>
      <title>Sevice</title>
        <meta name="description" content={`Sevice`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.png" /> */}
       
      </Head>
      <main style={{paddingTop: "100px"}}>
        <Header />
        <Service />
        <Footer />
      </main>
    </div>
  )
}


export default Service_page