import { getDocs, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';


export const Home = ({isAuth}) => {
  const [postList, setPostList] = useState([])

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPost = async() => {
        const data = await getDocs(postCollectionRef);
        setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getPost()
  });

  const deletePost = async(id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc)
  }

  return (
    <div> {postList.map((post) => {
      return (
        <>
          <h1> {post.title} </h1>
          <p>{post.postText}</p> 
          <div>@{post.author.name}</div>
          {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => deletePost(post.id)}>&#128465;</button>}
        </>
      )
    } )}</div>
  )
}
