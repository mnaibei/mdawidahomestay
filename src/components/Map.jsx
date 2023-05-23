import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize map
      const map = L.map('map').setView([-1.32626971, 36.77450926], 13);
      mapRef.current = map;

      // Add tile layer (using OpenStreetMap tiles)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
      }).addTo(map);

      // Add marker for Mdawida Homestay
      const marker = L.marker([-1.32626971, 36.77450926]).addTo(map);
      marker.bindPopup('<b>Mdawida Homestay</b>').openPopup();
    }
  }, []);

  return <div id="map" style={{ height: '400px' }} />;
};

export default Map;
