import { Modal, Button } from "react-bootstrap";

function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      //centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{props.modalcontain}</div>
      </Modal.Body>
      <Modal.Footer>
        {props.addUpdateFlag ? (
          <Button onClick={props.addUpdateHandler}>Add</Button>
        ) : (
          <Button onClick={props.addUpdateHandler}>Update</Button>
        )}
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
