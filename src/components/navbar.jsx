/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "../styles/navbar.module.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const darkTheme = {
    backgroundColor: "white",
    color: "black",
    border: "none",
    padding: "0.5rem",
  };

  const theme = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "0.5rem",
  };

  return (
    <div className={darkMode ? styles.lightContainer : styles.container}>
      <div
        style={{ fontSize: "1.5rem" }}
        className={darkMode ? styles.darkLogo : styles.lightLogo}
      >
        LOGO
      </div>
      <div className={styles.links}>
        <a href="#" style={{ textDecoration: "none", color: "#3d63eb" }}>
          Home
        </a>
        <a href="#" style={{ textDecoration: "none", color: "#3d63eb" }}>
          Explore
        </a>
        <a href="#" style={{ textDecoration: "none", color: "#3d63eb" }}>
          More
        </a>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          style={darkMode ? darkTheme : theme}
        >
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
