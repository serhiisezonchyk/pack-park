import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
interface Props {
  children: React.ReactNode;
  className?: string;
  location: [number, number];
}
const MapComponent: React.FC<Props> = ({ children, className, location }) => {
  const { resolvedTheme} = useTheme();

  return (
    <MapContainer
      className={cn('w-96 h-96', className)}
      center={location}
      zoom={8}
      zoomControl={false}
      style={{ zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://{s}.basemaps.cartocdn.com/${
          resolvedTheme === 'dark' ? 'dark' : 'light'
        }_all/{z}/{x}/{y}{r}.png`}
      />
      {children}
    </MapContainer>
  );
};

export default MapComponent;
