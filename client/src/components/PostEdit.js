import axios from "axios";
import React, { useState } from "react";
import { Button, Comment, Form, Header, Icon, Modal, TextArea } from "semantic-ui-react";

const PostEdit = (props) => {
  const { content, id, user_id, setEditedPost } = props
  const [post, setPost] = useState(content)
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const handleEdit = async (e) => {
    let postId = id
    let postEdited = { content: post, user_id: user_id }
    let res = await axios.put(`/api/posts/${postId}`, postEdited)
    setPost(res.data.content)
    setEditedPost(true)
    setOpen(false)
    console.log(res)
    console.log(res.data)
  }

  return (
    <>
      <Comment.Action onClick={handleOpen}>Edit</Comment.Action>
      <Modal
        closeIcon
        size="tiny"
        open={open}
        onClose={handleClose}
        dimmer="blurring"
      >
        <Header icon="edit" content="Edit this post" />
        <Form>
          <TextArea 
            value={post}
            onChange={(e) => setPost(e.target.value)}
            rows={5}
          />
        </Form>
        <Modal.Actions onClick={handleClose}>
          <Button
            color='green'
            type="submit"
            onClick={()=>handleEdit(id)}
          >
            <Icon name='checkmark' /> Edit
          </Button>
          <Button color='red'>
            <Icon name='remove' /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default PostEdit;