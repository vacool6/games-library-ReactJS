import styles from "../styles/popup.module.css";
import AddGame from "../helpers/data";

import React from "react";
import { useForm } from "react-hook-form";

const Popup = (props) => {
  const { register, handleSubmit } = useForm();

  // props.setIsOpen(false);

  const { setIsOpen, isOpen } = props;
  return (
    isOpen && (
      <form>
        <div className={styles.bg}>
          <div className={styles.modal}>
            <h1>Add game</h1>
            <input
              name="gameName"
              className={styles.input}
              {...register("gameName")}
              type="text"
              placeholder="Game Name"
            />
            <input
              name="gameImg"
              className={styles.input}
              {...register("gameImg")}
              type="text"
              placeholder="Game Image"
            />
            <input
              name="gameDescription"
              className={styles.input}
              {...register("gameDiscrption")}
              type="text"
              placeholder="Game Describtion"
            />
            <div className={styles.buttons}>
              <button
                className={styles.add}
                id="submit"
                onClick={handleSubmit((data) => {
                  AddGame(data, props.gamesData, props.setGamesData);
                  setIsOpen(false);
                })}
              >
                Add
              </button>
              <button className={styles.close} onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  );
};

export default Popup;
