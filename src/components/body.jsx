import classes from "../styles/body.module.css";
import GameCard from "./gameCard";
import Style from "../styles/popup.module.css";

const Body = ({ darkMode, setIsOpen, gamesData, setGamesData }) => {
  return (
    <div className={classes.container}>
      <h1 style={darkMode ? { color: "white" } : { color: "black" }}>
        Welcome to my games library!
      </h1>
      <p style={darkMode ? { color: "white" } : { color: "black" }}>
        You can add the list of games here
      </p>
      <button
        className={Style.add}
        style={{ width: "10rem", backgroundColor: "rgb(79, 79, 80)" }}
        onClick={() => setIsOpen(true)}
      >
        Add a game!
      </button>
      <br />

      <div className={classes.flexBox}>
        {gamesData.map((data, index) => (
          <GameCard
            key={index} //Unique identifier
            name={data.name}
            details={data.details}
            poster={data.poster}
            darkMode={darkMode}
            data={data}
            index={index}
            gamesData={gamesData}
            setGamesData={setGamesData}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
