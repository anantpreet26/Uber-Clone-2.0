import "tailwindcss/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserContextProvider } from "./context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
    <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp
