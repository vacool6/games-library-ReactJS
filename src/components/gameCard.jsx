import classes from "../styles/gameCard.module.css";

const GameCard = (props) => {
  const { name, details, poster, darkMode } = props;
  return (
    <div className={darkMode ? classes.lightContainer : classes.container}>
      <h2 style={{ margin: "1rem" }}>{name}</h2>
      <hr />
      <p style={{ marginLeft: "1rem", marginTop: "3rem" }}>{details}</p>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={poster} alt="Game poster"></img>
      </div>
    </div>
  );
};

export default GameCard;
