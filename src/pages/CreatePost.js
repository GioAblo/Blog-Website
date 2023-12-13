import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

export const CreatePost = ({isAuth}) => {

  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  
  const navigate = useNavigate();
  const postCollectionRef = collection(db, "posts");

  const createPost = async() => {
    await addDoc(postCollectionRef, {title, postText, author: {
      name: auth.currentUser.displayName, id: auth.currentUser.uid
    }});

    navigate("/")
  }

  useEffect( () => {
    if (!isAuth) {
      navigate("/") 
    }
  }, [])

  return (
    <div>
      <h1>Create Post</h1>
      <label>Title</label>
      <input type='text'  onChange={(e) => setTitle(e.target.value) }/>
      <label>Post:</label>
      <textarea placeholder='Write a post...'  onChange={(e) => setPostText(e.target.value)} />

      <button onClick={createPost}>Submit</button>
    </div>
  )
}
