import Header from '../../components/Header';
import Image from 'next/image';

export default function Story() {
  return (
    <div>
      <Header />
      <section className="flex flex-col sm:flex-row px-12 pt-28 pb-36 sm:justify-between  sm:max-w-7xl xl:mx-auto">
        <div className="flex justify-between sm:w-2/3 sm:max-w-xl">
          <div className="relative h-96 sm:h-80 w-3/12">
            <Image src="/gabriel-forsberg.jpg" alt="check cooking yakitori" layout="fill" objectFit="cover"/>
          </div>
          <div className="relative h-96 w-5/12 sm:h-80">
            <Image src="/alva-pratt.jpg" alt="inside view of restaurant" layout="fill" objectFit="cover"/>
          </div>
          <div className="relative h-96 w-3/12 sm:h-80">
            <Image src="/kris-sevinc.jpg" alt="outside view of restaurant" layout="fill" objectFit="cover"/>
          </div>
        </div>
        <p className="my-16 sm:my-0 text-center text-lg sm:text-right sm:text-2xl sm:w-1/3 p-4 sm:p-0 sm:max-w-md sm:ml-8">Makisoba started in 1965 by a young couple who loved to cook and serve others. Julia and Peter, whom are now retired, have passed down their recipe and family-owned business to their children, Janette and Lowry.
        </p>
      </section>
      <section className="sm:px-36 py-36 bg-[#91A58D] text-white">
      <p className="w-3/4 text-lg sm:text-3xl text-center mx-auto">Since our establishment in 1965, the store motto has always been cook freshly once ordered. Our philosophy is to be a store that is loved by all, immersed in hospitality</p>
      </section>
    </div>
  )
}