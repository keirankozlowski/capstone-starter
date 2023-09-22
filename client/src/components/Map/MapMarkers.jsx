import { Marker } from "@react-google-maps/api";

export default function MapMarkers() {
  return (
    <>
      <Marker
        position={{ lat: 40.73061, lng: -73.935242 }}
        icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
      />
      <Marker
        position={{ lat: 40.779434, lng: -73.963402 }}
        icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
      />
    </>
  );
}
