import classes from "../styles/gameCard.module.css";
import { removeGame } from "../helpers/data";

const GameCard = (props) => {
  const deleteHandler = () => {
    removeGame(props.data.id, props.gamesData, props.setGamesData);
  };
  const { name, details, poster, darkMode } = props;
  return (
    <div className={darkMode ? classes.lightContainer : classes.container}>
      <h2 style={{ margin: "1rem" }}>{name}</h2>
      <span onClick={deleteHandler} className={classes.detelecard}>
        X
      </span>
      <hr />
      <p style={{ marginLeft: "1rem", marginTop: "3rem" }}>{details}</p>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={poster} alt="Game poster"></img>
      </div>
    </div>
  );
};

export default GameCard;
