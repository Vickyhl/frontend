//   const apiKey = "  AIzaSyCFwqNlBy326AloYtkGwSDixuNC-15yiH8";
//   const apiKey = "AIzaSyAfF97lrUOpNfEnM84q1Smj9m0EuHiGtwY";
//   const google = window.google;

import { useParams } from "react-router-dom";
import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import "./css/gymMaps.css";

function GymMaps() {
  const [map, setMap] = React.useState(null);
  const { country, city } = useParams();

  React.useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAfF97lrUOpNfEnM84q1Smj9m0EuHiGtwY",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 13,
      });

      const placesService = new window.google.maps.places.PlacesService(map);

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { address: `${city}, ${country}` },
        (results, status) => {
          if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            const location = results[0].geometry.location;
            const radius = 5000;
            const keyword = "gym";

            placesService.nearbySearch(
              { location, radius, keyword },
              (results, status) => {
                if (
                  status === window.google.maps.places.PlacesServiceStatus.OK
                ) {
                  for (let i = 0; i < results.length; i++) {
                    new window.google.maps.Marker({
                      position: results[i].geometry.location,
                      map,
                      title: results[i].name,
                    });
                  }
                }
              }
            );
          } else {
            console.log(
              "Geocode was not successful for the following reason: " + status
            );
          }
        }
      );

      setMap(map);
    });
  }, [country, city]);

  return <div id="map"></div>;
}

export default GymMaps;
