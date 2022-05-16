import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5hbnQyNiIsImEiOiJjbDFqYzZ5dGUxbXpkM2VydHN6YW15cjN6In0.zTqE0IgykWdguQTKoBgVcg";
function Map({ pickup, dropOff }) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [76.666732779999986, 31.29208373999997],
      zoom: 5,
    });
    //Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
    // console.log(pickup, dropOff);
    if (pickup) addToMap(map, pickup);
    if (dropOff) addToMap(map, dropOff);
    if (pickup && dropOff) {
      map.fitBounds([pickup, dropOff], {
        padding: 100,
      });
    }
  }, [pickup, dropOff]);

  const addToMap = (map, coordinates) => {
    // console.log/(coordinates);
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id={"map"} />;
}
const Wrapper = tw.div`
bg-red-500 h-1/2
`;
export default Map;
