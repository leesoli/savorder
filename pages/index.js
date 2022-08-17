import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import MainImage from '../public/mitya-ivanov.jpg';
import Link from 'next/link';
import { useContext } from 'react';
import {Context} from '../contexts/index';

export default function Home() {
  const { changePage } = useContext(Context);

  return (
    <div>
      <Head>
        <title>Mazesoba</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="flex flex-col items-center sm:items-start bg-main-image h-screen">
        <Header/>

          <div className="sm:text-start text-center text-white sm:ml-12 mt-48 text-5xl sm:max-w-md">Traditional Japanese buckwheat noodles, made entirely from scratch.</div>
          <Link href="/order">
            <button
              onClick={() => {
                changePage('order')
              }}
              className="uppercase mt-12 sm:ml-12 bg-white text-gray-800 text-lg py-2 px-4 hover:bg-gray-800 hover:text-white hover:border-2 hover:border-white transition duration-200 ease-in-out">Order now</button>
          </Link>

      </main>

    </div>
  )
}
