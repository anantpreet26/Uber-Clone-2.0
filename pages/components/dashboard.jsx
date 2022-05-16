import React from "react";
import { useUserContext } from "../context/userContext";
import tw from "tailwind-styled-components/";


const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <Wrapper>
      <Head1>Dashboard </Head1>
      <Head2>Name : {user.displayName}</Head2>
      <Head2>Email : {user.email}</Head2>
      <Button onClick={logoutUser}>Log out</Button>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = tw.div``;
const Head1 = tw.h1``;
const Head2 = tw.h2``;
const Button = tw.button``;
