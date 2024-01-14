import { Footer, Header } from '@/components/common'
import MapSection from '@/components/common/map'
import Contact from '@/components/contact'
import Head from 'next/head'
import React from 'react'

function ContactUs() {

  return (
    <div>
      <Head>
      <title>Contact</title>
        <meta name="description" content={`Contact`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <main style={{paddingTop: "40px"}}>
        {/* <Header /> */}
        <Contact />
        <MapSection />
        <Footer />
      </main>
    </div>
  )
}
export default ContactUs

