import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Comment, Form, Image, List } from "semantic-ui-react";
import PostDelete from "../components/PostDelete";
import { AuthContext } from "../providers/AuthProvider";


const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [newContent, setNewContent] = useState([]);
  const auth = useContext(AuthContext)

  useEffect(() => {
    getPosts();
  }, [])

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
  }

  const renderPosts = () => {
    if (posts.length === 0) {
      return (
        <div>
          <p style={{ textAlign: "center" }}>Post something here!</p>
        </div>
      )
    }
    return (posts.map((post, id) => {
      return (
        <Comment key={id}>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
          <Comment.Content>
            <Comment.Author>Me</Comment.Author>
            <Comment.Metadata>
              <div>1 day ago</div>
            </Comment.Metadata>
            <Comment.Text>
              {post.content}
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action><PostDelete {...post} deletePost={deletePost} /></Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          
        </Comment>
      )
    }))
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Form.TextArea
            required
            placeholder='Add a post'
            value={String(newContent)}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </Form.Field>

        <Button type="submit">Post</Button>
      </Form>
      <Comment.Group>
        {renderPosts()}
      </Comment.Group>
    </div>
  )
}

export default Dashboard;