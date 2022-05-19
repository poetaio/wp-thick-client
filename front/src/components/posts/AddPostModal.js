import React, { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';

const AddPostModal = ({show, handleClose, onAddPost}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isValidationMessageVisible, setIsValidationMessageVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);

  const showValidationMessage = (message) => {
    setValidationMessage(message)
    setIsValidationMessageVisible(true);
    setTimeout(() => setIsValidationMessageVisible(false), 2000);
  }

  const handleAddPost = () => {
    if (!title) {
      showValidationMessage("Please enter title");
      return;
    }

    if (!text) {
      showValidationMessage("Please enter text");
      return;
    }

    handleClose();
    onAddPost(title, text);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {isValidationMessageVisible &&
            <Alert variant="danger">
              {validationMessage}
            </Alert>
          }
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter title"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddPost}>
          Add Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPostModal;