import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TESTING Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="WE'RE STILLLLL BACK TESTING Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div className="buttonLink">
          <a href="www.google.com">test link</a>
        <div>
      </main>

      <Footer />
    </div>
  )
}
