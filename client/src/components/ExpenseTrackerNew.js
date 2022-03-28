// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { Button, Form, Header, Icon, Modal, TextArea } from "semantic-ui-react";

// const ExpenseTrackerNew = () => {
//   const navigate = useNavigate()
//   const [name, setName] = useState("");
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleSubmit = async (e) => {
//     const newExpenseTracker = { name, description, price, transactionDate }
//     let res = await axios.post("/api/expenses", newExpenseTracker)
//     navigate(`/expensetracker/${res.data.id}`)
//     setOpen(false)
//   }

//   return (
//     <>
//       <Button color='green' onClick={handleOpen}> <Icon name="add" />Add</Button>
//       <Modal
//         closeIcon
//         size="large"
//         open={open}
//         onClose={handleClose}
//         dimmer="blurring"
//       >
//         <Header icon="dollar sign" content="New Expense Tracker" />
//         <Form>
//           <Form.Field>
//             <input placeholder='Name of this tracker' />
//           </Form.Field>
//           <Form.Field>
//             <TextArea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows={5}
//               placeholder=""
//             />
//           </Form.Field>
//         </Form>
//         <Modal.Actions onClick={handleClose} style={{ display: "flex", justifyContent: "center" }}>
//           <Button
//             color='green'
//             type="submit"
//             onClick={handleSubmit}
//           >
//             <Icon name='checkmark' /> Add
//           </Button>
//           <Button color='red'>
//             <Icon name='remove' /> Cancel
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     </>
//   )
// }

// export default ExpenseTrackerNew;