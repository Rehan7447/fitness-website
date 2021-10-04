import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ConfirmGoodess from "./confirmGoodess";
import GoodessForm from "./goodessForm";

function MyVerticallyCenteredModal(props) {
  const [submit, setSubmit] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="museBody">
        {/* <a onClick={props.onHide} className="closeModal">
          <i className="far fa-times-circle"></i>
        </a> */}
        {!submit ? (
          <GoodessForm submit={setSubmit} click={props.onHide} />
        ) : (
          <ConfirmGoodess click={props.onHide} />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default function GoodessModal() {
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
        onHide={() => {
          setModalShow(false);
        }}
      />
    </>
  );
}
