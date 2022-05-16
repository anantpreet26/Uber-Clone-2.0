import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import tw from "tailwind-styled-components/";



const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <Form className="form">
      <Head2> New User</Head2>
      <Form2 onSubmit={onSubmit}>
        <Input placeholder="Email" type="email" ref={emailRef} />
        <Input placeholder="Name" type="name" ref={nameRef} />
        <Input placeholder="Password" type="password" ref={psdRef} />
        <Button type="submit">Register</Button>
      </Form2>
    </Form>
  );
};

export default Signup;

const Form = tw.div`w-full`;
const Head2 = tw.div`text-center`;
// const Para = tw.p`cursor-pointer m-3`;
const Button =tw.button`bg-teal-700 text-white p-3 w-full rounded-md text-lg drop-shadow-md mx-[12px]`;
const Input = tw.input`p-3 m-3 text-lg rounded-md w-11/12 border border-solid  drop-shadow-md	`;
const Form2 = tw.form`flex items-center justify-center flex-col`;
