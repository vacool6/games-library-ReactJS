import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import Popup from "./components/popup";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={
        darkMode ? { backgroundColor: "black" } : { backgroundColor: "white" }
      }
    >
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Body darkMode={darkMode} setIsOpen={setIsOpen} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
