import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon paths so markers show up correctly in Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const AnyMapContainer: any = MapContainer;
const AnyTileLayer: any = TileLayer;

export type AvilaMapProps = {
  className?: string;
};

const AvilaMap: React.FC<AvilaMapProps> = ({ className }) => {
  const center: [number, number] = [40.6565, -4.7015];

  const places = useMemo(
    () => [
      {
        name: 'Monasterio de Santo Tomás',
        position: [40.650261, -4.68885] as [number, number],
        url: 'https://maps.app.goo.gl/a2Dk21nhvyNtyFax9',
      },
      {
        name: 'Basílica de San Vicente',
        position: [40.65778, -4.69694] as [number, number],
        url: 'https://maps.app.goo.gl/gbpwdkr3Bvpj9KUL9',
      },
      {
        name: 'Basílica de Santa Teresa',
        position: [40.655419, -4.702712] as [number, number],
        url: 'https://maps.app.goo.gl/KTTndfF7rCZTc7BGA',
      },
      {
        name: 'Catedral de Ávila',
        position: [40.6558, -4.6972] as [number, number],
        url: 'https://maps.app.goo.gl/ATD8mnvfHTiJfhr27',
      },
      {
        name: 'Puerta del Alcázar',
        position: [40.6565, -4.7024] as [number, number], // approximate
        url: 'https://maps.app.goo.gl/NRLvK2SbgHYV4xsC6',
      },
      {
        name: 'Plaza del Mercado Chico',
        position: [40.656472, -4.70025] as [number, number],
        url: 'https://maps.app.goo.gl/HbzP8iGXSJPBtNeP8',
      },
      {
        name: 'Plaza del Mercado Grande',
        position: [40.6557, -4.7029] as [number, number], // approximate
        url: 'https://maps.app.goo.gl/bdA53PeCHU3FBPvV9',
      },
      {
        name: 'Los Cuatro Postes',
        position: [40.6598, -4.7026] as [number, number], // approximate
        url: 'https://maps.app.goo.gl/2Yd5DU1KTHbMosNX7',
      },
    ],
    []
  );

  return (
    <div className={className}>
      <AnyMapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-80 rounded-lg overflow-hidden"
      >
        <AnyTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places.map((p) => (
          <Marker key={p.name} position={p.position}>
            <Popup>
              <div className="space-y-1">
                <strong>{p.name}</strong>
                <div>
                  <a
                    className="text-primary underline"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </AnyMapContainer>
    </div>
  );
};

export default AvilaMap;
