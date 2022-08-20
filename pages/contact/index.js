import Header from '../../components/Header';
import Map from '../../components/Map';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import Image from 'next/image';

export default function Contact() {

  return (
      <div>
        <Header/>
          <div className="relative w-full h-80 mb-8">
            <Image layout="fill" objectFit="cover" src="/restaurant.jpg"/>
          </div>
        <div className="flex flex-col sm:flex-row p-8 sm:p-12 sm:justify-between">
          <div className="tracking-wider">
            <h3 className="text-xl font-medium my-2">Location</h3>
            <p className="pb-8">1234 Elaine Blvd<br></br>Irvine, CA 92602</p>

            <h3 className="text-xl font-medium my-2">Store Hours</h3>
            <p className="pb-8">Mon- Thurs: 11am - 9pm<br></br>Fri - Sat: 5pm-2am<br></br>Sun: Closed</p>
            <p className="pb-8">For store/business inquiries, email mazesoba@gmail.com.</p>
            <h3 className="text-xl font-medium my-2">Follow</h3>
            <div className="flex justify-between w-24">
              <BsInstagram className="text-2xl hover:cursor-pointer hover:text-gray-500 hover:scale-105 duration-200"/>
              <BsFacebook className="text-2xl hover:cursor-pointer hover:text-gray-500 hover:scale-105 duration-200"/>
              <BsTwitter className="text-2xl hover:cursor-pointer hover:text-gray-500 hover:scale-105 duration-200"/>
            </div>
          </div>

          <div className="sm:w-1/3 sm:my-0 my-16">
            <Map/>
          </div>
        </div>

      </div>
  )
}