import styles from "../styles/popup.module.css";

const Popup = (props) => {
  const { setIsOpen, isOpen } = props;
  return (
    isOpen && (
      <div className={styles.bg}>
        <div className={styles.modal}>
          <h1>Add game</h1>
          <input />
          <input />
          <button style={{ height: "2.5rem" }} onClick={() => setIsOpen(false)}>
            Close
          </button>
          <button style={{ height: "2.5rem" }}>Add</button>
        </div>
      </div>
    )
  );
};

export default Popup;

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const Popup = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Popup;
