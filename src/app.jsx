import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import Popup from "./components/popup";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [gamesData, setGamesData] = useState([
    {
      id: Math.random(),
      name: "Candy crush",
      details: "This is a fun game and is available on mobile.",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vI0PJAUA0IHuX-3AD1II0hPbFasEXmAuUg&usqp=CAU",
    },
    {
      id: Math.random(),
      name: "Super Contra",
      details: "This is a very old and awesome game.",
      poster: "https://upload.wikimedia.org/wikipedia/en/4/4e/Super_contra.jpg",
    },
    {
      id: Math.random(),
      name: "PubG",
      details: "Pubg is very popular game",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IYxxD0o9aMYE4vdQPU6zDTIJ3eY9EUAKVQ&usqp=CAU",
    },
    {
      id: Math.random(),
      name: "Mario",
      details: "Mario is kids friendly and top performing game.",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZjF_mZPIHTcMig6ZN037mlQl70g6oByzDw&usqp=CAU",
    },
  ]);
  return (
    <div
      style={
        darkMode ? { backgroundColor: "black" } : { backgroundColor: "white" }
      }
    >
      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        gamesData={gamesData}
        setGamesData={setGamesData}
      />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Body
        darkMode={darkMode}
        setIsOpen={setIsOpen}
        gamesData={gamesData}
        setGamesData={setGamesData}
      />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
