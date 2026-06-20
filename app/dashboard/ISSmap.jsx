"use client";

import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


export default function ISSMap({
    currentPosition, pathCoordinates
})
{

  return (
    <MapContainer
        center={currentPosition}
        zoom={3}
        style={{
            height: "350px",
            width: "100%",
        }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={currentPosition} />

      <Polyline positions={pathCoordinates} />
    </MapContainer>
  )
}