import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import tw from "tailwind-styled-components/";


const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <Form>
      <Head2> Login </Head2>
      <Form2 onSubmit={onSubmit}>

        <Input 
        placeholder="Email" 
        type="email" 
        ref={emailRef} />

        <Input 
        placeholder="Password" 
        type="password" 
        ref={psdRef} />

        <Button type="submit">Sign In</Button>
        <Para onClick={forgotPasswordHandler}>Forgot Password?</Para>

      </Form2>
    </Form>
  );
};

export default Signin;
const Form = tw.div`w-full`;
const Head2 = tw.h2`text-center`;
const Para = tw.p`cursor-pointer m-3`;
const Button =tw.button`bg-teal-700 text-white p-3 w-full rounded-md text-lg drop-shadow-md mx-[12px]`;
const Input = tw.input`p-3 m-3 text-lg rounded-md w-11/12 border border-solid drop-shadow-md	`;
const Form2 = tw.form`flex items-center justify-center flex-col`;


