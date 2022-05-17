import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";

// import Link from "next/link";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
  const router = useRouter();
  const {Duration,Selected} = router.query;
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    
      <Wrapper>
            <LogoC>
            <UberLogo
            src={"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"}
          />
          </LogoC>
        <ConfirmButtonContainerC>
            <Container>
            <Logo
            src={"https://i.ibb.co/2716P6Q/114283334.jpg"}
          />
          <Booking>Booking Confirmed</Booking>
          </Container>
        </ConfirmButtonContainerC>
        <ConfirmButtonContainer action='/api/checkout_sessions' method='POST'>
          <ConfirmButton>Confirm Payment</ConfirmButton>
        </ConfirmButtonContainer>
        </Wrapper>
      
  
  );
}

const Wrapper =tw.div`flex flex-col h-screen m-4`;
const LogoC =tw.div`flex `;
const UberLogo = tw.img`mx-auto h-32 w-44`;
const ConfirmButtonContainer = tw.form`flex m-4 border border-solid border-gray-500 p-2`;
const ConfirmButtonContainerC = tw.div`flex border border-solid border-green-500 p-4 border-8	`;

const ConfirmButton = tw.button`bg-black text-white flex-1 h-14 `;
const Container = tw.div`flex mx-auto`;
const Booking = tw.div`flex bg-white text-black text-xl flex-1 justify-content items-center `;
const Logo = tw.img` mx-[10px] h-16 w-16`;
