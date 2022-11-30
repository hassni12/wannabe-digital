import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Link from "next/link";
// Link
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="row upset">
          <div className="col-lg-8 col-md-6 col-12 mt-5">
            <section className="container">
              <h2 className="text-start">Thank you for contacting us</h2>
              <small>
                You response has been successfully submitted Our customer
                representative will get back to you soon
              </small>
            </section>
            <div className="col-lg-12 col-md-6 col-12  text-end">
              <Button
                className="btn d-inline-block goback_button_about  rounded-5   "
                value="Go Back"
              >
                Go Back
              </Button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 p-0">
            <img
              src="./images/teamwork business people.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function Modal1() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="btn d-inline-block  submit_button_about outline-none rounded-5 mt-2 border-0" 
        onClick={() => setModalShow(true)}
      >
        Submit
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// render(<App />);
