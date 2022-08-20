import {useRef, useEffect} from 'react'
import {Loader} from '@googlemaps/js-api-loader';

export default function Map () {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: {
          lat: 33.684566,
          lng: -117.826508
        },
        zoom: 15,
      });
    });
  });

  return (
    <div className="w-full h-80 sm:h-100" id="map" ref={googlemap}></div>
  )
}