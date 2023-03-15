import styles from "../styles/popup.module.css";
import AddGame from "../helpers/data";

import React,{ useState } from "react";

const Popup = (props) => {
  const [gname,setGname]=useState('')
  const [gimage,setGImage]=useState('')
  const [gdescribtion,setGdescription]=useState('')

  const [gameFormValue,setGameFormValue]=useState({
    gname:'',
    gimage:'',
    gdescribtion:''
  })
  const AddGameClickeHandler=()=>{
    setGameFormValue({gname:gname, gimage:gimage,gdescribtion:gdescribtion})
    AddGame(gameFormValue.gname,gameFormValue.gimage,gameFormValue.gdescribtion)
    props.setIsOpen(false)
    
  }

  const InputGnameHandler=(e)=>{
    setGname(e.target.value)
  }
  const InputImageNameHandler=(e)=>{
    setGImage(e.target.value)
  }
  const InputDescNameHandler=(e)=>{
    setGdescription(e.target.value)
  }

  const { setIsOpen, isOpen } = props;
  return (
    isOpen && (
      <div className={styles.bg}>
        <div className={styles.modal}>
          <h1>Add game</h1>
          <input type="text" name="gname"  onChange={InputGnameHandler} placeholder="gane Name"/>
          <input type='text' name="gimage" onChange={InputImageNameHandler} placeholder="Game Image"/>
          <input type='text' name="gdescription" onChange={InputDescNameHandler}  placeholder="Game Describtion"/>
          <button style={{ height: "2.5rem" }} onClick={() => setIsOpen(false)}>
            Close
          </button>
          <button style={{ height: "2.5rem" }} onClick={AddGameClickeHandler}>Add</button>
        </div>
      </div>
    )
  );
};

export {Popup };


