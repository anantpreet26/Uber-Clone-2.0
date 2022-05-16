import React, { useEffect ,useState} from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { auth, provider ,db} from "../pages/firebase";

import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";


function Login(props) {
  const { user, loading, error } = useUserContext();

  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  });
  
  return (
    <Wrapper>
      <UberLogo src={"https://i.ibb.co/ZMhy8ws/uber-logo.png"} />
      <Title>Log in to access your account</Title>
      
      <Form>
      {error && <Para>{error}</Para>}
      {loading ? <Head2>Loading...</Head2> : <> {user ? <Dashboard /> : <Auth />} </>}
      </Form>

      <HeadImage src={"https://i.ibb.co/CsV9RYZ/login-image.png"} />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign In With Google
      </SignInButton>
    </Wrapper>
  );
}
const Para = tw.p`bg-red-800 text-white text-center rounded-md font-bold mb-4 m-4  max-w-sm`;
const Wrapper = tw.div`p-4 h-screen flex flex-col bg-gray-400 items-center`;
const Head2 = tw.h2`text-center`;
// const InputContainer = tw.div`bg-white flex items-center p-2 mb-2 my-8 `;
// const InputBoxes = tw.div`flex flex-col flex-1 border-none`;
// const Input = tw.input`h-10 bg-gray-000 my-2 rounded-2 p-2 outline-none border-solid border-4 border-gray-600`;
// const SignIn = tw.div``;
const SignInButton = tw.button`bg-black text-white text-center text-lg py-4 mt-3 self-center w-full`;
// const SignInButton2 = tw.button`bg-black text-white text-center text-lg py-4 mt-1 w-1/2`;
const Form =tw.div`
items-center justify-center flex-col`;
const UberLogo = tw.img`h-20 w-auto object-contain `;
const Title = tw.div`capitalize text-5xl pt-4 text-gray-000 `;
const HeadImage = tw.img`h-[190px] w-[400px]`;
// const Info  = tw.div`
// text-l medium `

export default Login;
