import React, { useState } from 'react'
import { Button, Form, Modal, TextArea } from 'semantic-ui-react'

const ExpenseAdd = () => {
  const [open, setOpen] = useState(false)



  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Add Expense</Button>}
      >
        <Modal.Header>Add an Expense</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <TextArea
              />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Add"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
      <div>ExpenseAdd</div>
    </>
  )
}

export default ExpenseAdd