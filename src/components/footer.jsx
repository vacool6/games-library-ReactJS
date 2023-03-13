import custom from "../styles/footer.module.css";

function Footer(props) {
  const { darkMode } = props;
  const customStyles = {
    color: "white",
    fontSize: "1.5rem",
  };

  const lightCustomStyles = {
    color: "black",
    fontSize: "1.5rem",
  };
  return (
    <div className={darkMode ? custom.lightContainer : custom.container}>
      <div style={darkMode ? lightCustomStyles : customStyles}>
        Copyrite 2023
      </div>
    </div>
  );
}

export default Footer;
