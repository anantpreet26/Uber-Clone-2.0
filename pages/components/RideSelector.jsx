import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/";
import { carList } from "../../data/carList";
import Link from "next/link";

function RideSelector({ pickupCoordinates, dropoffCoordinates }) {

  const [selected, setSelected] = useState(null);

  const [rideDuration, setRideDuration] = useState(0);
  const handleClick = (index) => {
    setSelected(index)
  };

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW5hbnQyNiIsImEiOiJjbDFqYzZ5dGUxbXpkM2VydHN6YW15cjN6In0.zTqE0IgykWdguQTKoBgVcg`
    ).then((res) => res.json())
      .then((res) => setRideDuration(res.routes[0].duration / 100))
      .catch((err) => console.log(err));
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList >
        {carList.map((car, index) => (
          <Link
          key={`uber-${index}`}
          href={{
            pathname: "../enjoy",
            query: {
              Selected: selected,
            },
          }}
          passHref={true}
        >
          <Car onClick={() =>handleClick(index) }
          key={`uber-${index}`} >
            <CarImage src={car.imgUrl} />
            <CarDetails >
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{"₹" + (rideDuration * car.multiplier * 17).toFixed(2)}</Price>
          </Car>
          </Link>
        ))}
      </CarList>
    </Wrapper>
  );
}
const Wrapper = tw.div`overflow-auto border-b-2 dark:bg-white-9 00 dark:border-gray-600`;
const Title = tw.div`text-gray-500 text-center text-xs py-2 border-b dark:text-white dark:border-gray-600`;
const CarList = tw.div`p-4`;
const Car = tw.div`flex justify-between items-center py-4 hover:bg-gray-100`;
const CarImage = tw.img`h-14 mr-4`;
const CarDetails = tw.div`flex flex-col flex-1`;
const Service = tw.div`font-medium`;
const Time = tw.div`text-xs text-blue-500 dark:text-blue-300`;
const Price = tw.div`text-sm`;
export default RideSelector;
