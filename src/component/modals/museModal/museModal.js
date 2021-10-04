import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ConfirmMuse from "./confirmMuse";
import MuseForm from "./museForm";

function MyVerticallyCenteredModal(props) {
  const [submit, setSubmit] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Body className="museBody">
        {/* <a onClick={props.onHide} className="closeModal">
          <i className="far fa-times-circle"></i>
        </a> */}
        {!submit ? (
          <MuseForm submit={setSubmit} click={props.onHide} />
        ) : (
          <ConfirmMuse click={props.onHide} />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default function MuseModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        variant="primary"
        className="modalMainButton GMModalMainButton"
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
