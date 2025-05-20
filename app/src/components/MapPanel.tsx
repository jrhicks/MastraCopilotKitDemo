import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import { useCopilotAction } from "@copilotkit/react-core";

export function MapPanel() {
  const [location, setLocation] = useState<[number, number]>([37.7749, -122.4194]);

  useCopilotAction({
    name: "setMapLocation",
    description: "Set the location of the map",
    parameters: [
      {
        name: "latitude",
        type: "number",
        description: "The latitude of the location to set",
        required: true,
      },
      {
        name: "longitude",
        type: "number",
        description: "The longitude of the location to set",
        required: true,
      },
    ],
    handler: async ({ latitude, longitude }) => {
      setLocation([latitude, longitude]);
    },
  });

  return (
    <MapContainer center={location} zoom={13} style={{ height: '100%', width: '100%' }} key={location.join(",")}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={location}>
        <Popup>
          Lat: {location[0]}, Lng: {location[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}