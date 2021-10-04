import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ConfirmSiren from "./confirmSiren";
import SirenForm from "./sirenForm";

function MyVerticallyCenteredModal(props) {
  const [submit, setSubmit] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Body className="sirenBody">
        {/* <a onClick={props.onHide} className="closeModal">
          <i className="far fa-times-circle"></i>
        </a> */}
        {!submit ? (
          <SirenForm submit={setSubmit} click={props.onHide} />
        ) : (
          <ConfirmSiren click={props.onHide} />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default function SirenModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        variant="primary"
        className="modalMainButton SmodalMainButton"
        onClick={() => setModalShow(true)}
      >
        Начать
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
