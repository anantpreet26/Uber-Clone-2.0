// import tw from "tailwind-styled-components";
// import Map from "./components/Map";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../pages/firebase";
// import { useRouter } from "next/router";


// export default function Home() {
//     const router = useRouter();
//     const {SSelected,PickUp,DropOff}= router.query;
//     console.log(SSelected)
//     console.log(PickUp)
//     console.log(DropOff)

//     const [user, setUser] = useState(null);
//     useEffect(() => {
        
//       return onAuthStateChanged(auth, (user) => {
//         if (user) {
//           setUser({
//             name: user.displayName,
//             photoURL: user.photoURL,
//           });
//         } else {
//           setUser(null);
//           router.push("/login");
//         }
//       });
//     });
  
//     return (
//       <Wrapper>
  
//         <Map pickup={PickUp} dropOff={DropOff} />
  
//         <ActionItems>
//         <Header>
//             <UberLogo
//               src={"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"}
//             />
//             <Profile>
//               <Name>{user && user.name}</Name>
//               <UserImage
//                 src={user && user.photoURL}
//                 onClick={() => signOut(auth)}
//               />
//             </Profile>
//           </Header>
//           <ActionButtons>
//             <Link href={"/search"} passHref={true}>
//               <ActionButton>
//                 <ActionButtonImage src={"https://i.ibb.co/cyvcpfF/uberx.png"} />
//                 Ride
//               </ActionButton>
//             </Link>
//             <ActionButton>
//               <ActionButtonImage src={"https://i.ibb.co/n776JLm/bike.png"} />
//               Wheels
//             </ActionButton>
//             <ActionButton>
//               <ActionButtonImage
//                 src={"https://i.ibb.co/5RjchBg/uberschedule.png"}
//               />
//               Reserve
//             </ActionButton>
//           </ActionButtons>
//           <InputButton>Where to?</InputButton>
//         </ActionItems>
//       </Wrapper>
//     )
//   }
//   const Wrapper = tw.div`
//   flex flex-col bg-white h-screen 
//   `;
  
//   const ActionItems = tw.div`
//   flex-1 p-4
//   `;
  
//   const Header = tw.div`
//   flex justify-between items-center
//   `;
  
//   const UberLogo = tw.img`
//   h-24
//   `;
  
//   const Profile = tw.div`
//   flex items-center justify-end
//   `;
  
//   const Name = tw.div`
//   mr-8 w-30 text-sm
//   `;
  
//   const UserImage = tw.img`
//   h-16 w-16 rounded-full border border-gray-200 p-2 cursor-pointer
//   `;
  
//   const ActionButtons = tw.div`
//   flex justify-between items-center
//   `;
//   const ActionButton = tw.div`
//   flex flex-1 bg-gray-200 m-1 h-32 flex-col justify-center items-center  rounded-lg transform hover:scale-105 hover:bg-gray-400 transition text-l
//   `;
  
//   const ActionButtonImage = tw.img`
//   h-3/5
//   `;
  
//   const InputButton = tw.div`
//   h-20 bg-gray-200 text-xl p-4 flex items-center rounded-lg mt-8 
//   `;