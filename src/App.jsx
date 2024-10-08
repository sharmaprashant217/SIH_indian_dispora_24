import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurStory from "./components/OurStory";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import NextPage from "./components/NextPage";
function App() {
  const [state, setState] = useState("Home");

  return (
    <>
      <Navbar setState={setState} />
      {state === "Home" && <Home />}
      {state === "Shop" && <Shop />}
      {state === "OurStory" && <OurStory />}
      {state === "Contact" && <Contact />}
      {state === "LogIn" && <LogIn setState={setState} />}
      {state === "NextPage" && <NextPage />}
    </>
  );
}

export default App;
