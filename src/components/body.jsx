import classes from "../styles/body.module.css";
import GameCard from "./gameCard";
import { gamesData as arrayData } from "../helpers/data";

const Body = ({ darkMode, setIsOpen }) => {
  return (
    <div className={classes.container}>
      <h1 style={darkMode ? { color: "white" } : { color: "black" }}>
        Welcome to my games library!
      </h1>
      <p style={darkMode ? { color: "white" } : { color: "black" }}>
        You can add the list of games here
      </p>
      <button onClick={() => setIsOpen(true)}>Add a game!</button>
      <br />

      <div className={classes.flexBox}>
        {arrayData.map((data, index) => (
          <GameCard
            key={index} //Unique identifier
            name={data.name}
            details={data.details}
            poster={data.poster}
            darkMode={darkMode}
            data={data}
            index={index}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
