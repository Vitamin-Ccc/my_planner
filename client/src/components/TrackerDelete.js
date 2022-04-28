import React, { useState } from "react";
import { Button, Comment, Header, Icon, Modal } from "semantic-ui-react";

const TrackerDelete = (props) => {
  const { id, deleteTracker } = props
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Comment.Action onClick={handleOpen}>
        Delete
      </Comment.Action>
      <Modal
        closeIcon
        size="tiny"
        open={open}
        onClose={handleClose}
        dimmer="blurring"
      >
        <Header icon="trash alternate" content="Delete this tracker" />
        <Modal.Content>
          <p>
            Are you sure you want to delete this tracker?
          </p>
        </Modal.Content>
        <Modal.Actions onClick={handleClose}>
          <Button
            color='green'
            onClick={() => deleteTracker(id)}
          >
            <Icon name='checkmark' /> Yes
          </Button>
          <Button color='red'>
            <Icon name='remove' /> No
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default TrackerDelete;