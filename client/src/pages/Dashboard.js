import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Comment, Form } from "semantic-ui-react";
import PostDelete from "../components/PostDelete";
import PostEdit from "../components/PostEdit";
import { AuthContext } from "../providers/AuthProvider";


const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [newContent, setNewContent] = useState([]);
  const [editedPost, setEditedPost] = useState(false)
  const auth = useContext(AuthContext)

  useEffect(() => {
    getPosts();
    setEditedPost(false)
  }, [editedPost])

  const getPosts = async () => {
    try {
      let res = await axios.get("/api/posts");
      setPosts(res.data);
      console.log(res.data);
    }
    catch (err) {
      alert("error getting Posts")
    }
  };

  const deletePost = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    setPosts(posts.filter((p) => p.id !== id));
  };

  const addPost = async (post) => {
    setPosts([post, ...posts]);
  }

  const handleSubmit = async (e) => {
    let newPost = { content: newContent, user_id: auth.id }
    let res = await axios.post(`/api/posts`, newPost)
    setNewContent("");
    addPost(res.data);
    console.log(res.data)
  }

  const renderPosts = () => {
    if (posts.length === 0) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Post anything here!</h1>
        </div>
      )
    }
    return (
      posts.map((post) => (
        <Comment key={post.id}>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
          <Comment.Content>
            <Comment.Author>Me</Comment.Author>
            <Comment.Metadata>
              {/* This is a placeholder for created_at */}
              <div>1 day ago</div>
            </Comment.Metadata>
            <Comment.Text>
              {post.content}
            </Comment.Text>
            <Comment.Actions>
              <PostEdit {...post} setEditedPost={setEditedPost} />
              <PostDelete {...post} deletePost={deletePost} />
            </Comment.Actions>
          </Comment.Content>

        </Comment>
      )))
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Dashboard</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Form.TextArea
            required
            placeholder='Add a post'
            value={String(newContent)}
            onChange={(e) => setNewContent(e.target.value)}
            rows={4}
          />
        </Form.Field>
        <Form.Field style={{ display: "flex", justifyContent: "right" }}>
          <Button type="submit">Post</Button>
        </Form.Field>
      </Form>
      {/* <div class="ui comments fluid" style={{border: "2px solid green"}}> */}
      <Comment.Group size="big" style={{ border: "2px solid green", maxWidth: "100vw" }}>
        {renderPosts()}
      </Comment.Group>
    </div>
    // </div>
  )
}

export default Dashboard;