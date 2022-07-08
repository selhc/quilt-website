import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Members } from '@/components/Members'
import { Actors } from '@/components/Actors'

export default function Home() {
  return (
    <>
      <Head>
        <title>QUILT - QUint-cities healthcare Interoperability Logistics Taskforce</title>
        <meta
          name="description"
          content="Learn about the QUint-cities healthcare Interoperability Logistics Taskforce."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Members />
        <Schedule />
        <Actors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
