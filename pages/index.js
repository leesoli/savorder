import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="font-serif">
      <Head>
        <title>Mazesoba</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header/>
      <main>

      </main>
    </div>
  )
}
