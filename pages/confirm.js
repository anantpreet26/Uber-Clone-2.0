import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";
import Link from "next/link";

function Confirm(props) {
  const router = useRouter();
  const { pickupSearched, dropOffSearched} = router.query;

  const [selected, setWord] = useState();


  const [pickup, setPickup] = useState([0, 0]);
  const [dropOff, setDropOff] = useState([0, 0]);

  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};${dropOff[0]},${dropOff[1]}?access_token=pk.eyJ1IjoiYW5hbnQyNiIsImEiOiJjbDFqYzZ5dGUxbXpkM2VydHN6YW15cjN6In0.zTqE0IgykWdguQTKoBgVcg`
    ).then((res) => res.json())
      .then((res) => setRideDuration(res.routes[0].duration / 100))
      .catch((err) => console.log(err));
  }, [pickup, dropOff]);

  useEffect(() => {
    getPickupCoordinates(pickupSearched);
    getDropOffCoordinates(dropOffSearched);
  }, [dropOffSearched, pickupSearched]);

  const getPickupCoordinates = (location) => {
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
      new URLSearchParams({
        access_token:
          "pk.eyJ1IjoiYW5hbnQyNiIsImEiOiJjbDFqYzZ5dGUxbXpkM2VydHN6YW15cjN6In0.zTqE0IgykWdguQTKoBgVcg",
        limit: 1,
      });
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPickup(res.features[0].center));
  };
  const getDropOffCoordinates = (dropOff) => {
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
      new URLSearchParams({
        access_token:
          "pk.eyJ1IjoiYW5hbnQyNiIsImEiOiJjbDFqYzZ5dGUxbXpkM2VydHN6YW15cjN6In0.zTqE0IgykWdguQTKoBgVcg",
        limit: 1,
      });
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setDropOff(res.features[0].center);
      });
  };
  return (
    <Wrapper>
      <Link href={"/search"} passHref={true}>
        <BackButtonContainer>
          <BackButton
            src={"https://img.icons8.com/ios-filled/50/000000/left.png"}
          />
        </BackButtonContainer>
      </Link>
      <Map pickup={pickup} dropOff={dropOff} />
      <RideContainer>
        <RideSelector pickupCoordinates={pickup} dropoffCoordinates={dropOff} changeWord={word=> setWord(word)}/>

        <Link href={{ pathname: "/payment",
          query: {
            Duration: rideDuration,
            Selected: selected,
          },
        }}
        passHref={true}
        >
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
        </Link>
      </RideContainer>
    </Wrapper>
  );
}
const Wrapper = tw.div`flex flex-col h-screen dark:bg-white-900`;
const RideContainer = tw.div`flex flex-col h-1/2`;
const ConfirmButtonContainer = tw.div`flex m-4`;
const ConfirmButton = tw.button`bg-black text-white flex-1 h-14`;
const BackButtonContainer = tw.div`p-2 shadow-lg m-3 absolute top-0 h-10 w-10 bg-white rounded-full z-10 dark:bg-gray-600`;
const BackButton = tw.img``;

export default Confirm;
