import Head from "next/head";
// import styles from '../styles/Home.module.css'
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react"
export default function MapApi() {
  const [Map, setMap] = useState();

  mapboxgl.accessToken =
    "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA";

  useEffect(() => {
   const map = new mapboxgl.Map({
      container: "map", 
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9,
    
    });
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    setMap(map);
  }, []);


  return (
    <div className="container shadow p-3 mb-5 bg-white rounded ">
      <div id="map"  className="h-25"></div>

    </div>
  );
}
