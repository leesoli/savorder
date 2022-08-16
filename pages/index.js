import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import MainImage from '../public/note-thanun-unsplash.jpg';
import Link from 'next/link';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Mazesoba</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header/>
      <main>
        <section className="relative h-screen w-full">
          <Image
            src={MainImage} objectFit="cover" layout="fill"
            alt="closeup of hot soba"
          />
          <Link href="/order">
            <button
              className="absolute text-white text-lg py-2 px-4 bg-[#B6B29D] opacity-80 top-1/2 left-1/3 sm:left-[43%] md:left-[45%]">Place Order</button>
          </Link>
        </section>
      </main>

    </div>
  )
}
