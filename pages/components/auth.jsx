import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import tw from "tailwind-styled-components";


const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  return (
    <Wrapper>
      {!index ? <Signin /> : <Signup />}
      <Para onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </Para>
    </Wrapper>
  );
};

export default Auth;

const Wrapper = tw.div`rounded-md flex items-center justify-center flex-col p-5 w-96 shadow-md`;
const Para = tw.p`cursor-pointer m-3`;
