'use client';
import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapComponent from '@/components/MapComponent';
import FilterButton from '@/components/FilterButton';
import Filters from '@/components/Filters';
import { useMediaQuery } from 'usehooks-ts';

const page = () => {
  const [userLocation, setUserLocation] = React.useState<[number, number]>([
    50.450001, 30.523333,
  ]);
  const matches = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      });
    }
  }, []);

  return (
    <div className='relative w-full h-full flex flex-row'>
      {!matches ? (
        <FilterButton />
      ) : (
        <div className='overflow-hidden hidden md:block md:w-1/2 lg:w-2/5 bg-background overflow-y-auto'>
          <Filters className='px-2' />
        </div>
      )}

      <MapComponent
        location={userLocation}
        className='w-full md:w-1/2 lg:w-3/5 h-full'
      >
        <Marker position={userLocation}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapComponent>
    </div>
  );
};

export default page;
