import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WebRouter from "./router/WebRouter";
import Navbar from "./components/layout/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <WebRouter />
      <Footer />
    </>
  );
}

export default App;
