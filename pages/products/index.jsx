import { Footer, Header } from '@/components/common'
import React, { useEffect } from 'react'
import Details from '@/components/details'
import Head from 'next/head'

function Product() {

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content={`Products`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
          
      </Head>
      <main style={{paddingTop: "100px"}}>
        <Header />
        <Details />
        <Footer />
      </main>
    </div>
  )
}

export default Product;