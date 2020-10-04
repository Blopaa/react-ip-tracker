import React from "react";
import L from "leaflet";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useInput from "../../hooks/useInput";
import SearchInput from "./SearchInput";

export const MapScreen = () => {
  let nLoc;
  const [{ ipS }, handleInputChange] = useInput({
    ipS: "8.8.8.8",
  });

  const { data, loading } = useFetch(
    `https://ipinfo.io/${ipS}?token=${"c9b830dad3ed67"}`
  );
  const { loc } = data;

  if (!loading) {
    let locArr = loc.split(",");
     nLoc = locArr.map((i) => parseFloat(i));
    // console.log(nLoc);
  }

  useEffect(() => {
    var map = L.map("mapId").setView(!loading ? nLoc : [51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // L.marker([51.5, -0.09])
    //   .addTo(map)
    //   .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    //   .openPopup();
  }, []);
  return (
    <div>
      <SearchInput ipS={ipS} handleInputChange={handleInputChange} />
      <div id="mapId" style={{ height: "100vh" }}></div>
    </div>
  );
};
