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
        position: [40.6544972222, -4.6972277778] as [number, number],
        url: 'https://www.google.com/maps/search/?api=1&query=Puerta+del+Alcazar,+C.+Don+Gerónimo,+17,+05001+Ávila,+Spain',
      },
      {
        name: 'Plaza del Mercado Chico',
        position: [40.656472, -4.70025] as [number, number],
        url: 'https://maps.app.goo.gl/HbzP8iGXSJPBtNeP8',
      },
      {
        name: 'Plaza del Mercado Grande',
        // User provided coordinates.
        position: [40.6544722222, -4.6965277778] as [number, number],
        url: 'https://maps.app.goo.gl/4igCRXYJWcMc5aQn6',
      },
      {
        name: 'Los Cuatro Postes',
        position: [40.6592008, -4.7107829] as [number, number],
        url: 'https://maps.app.goo.gl/y51pn2gpeJeeMFaJ9',
      },
    ],
    []
  );

  return (
    <div className={className}>
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-80 rounded-lg overflow-hidden"
      >
        <TileLayer
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
      </MapContainer>
    </div>
  );
};

export default AvilaMap;