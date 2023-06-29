"use client";
import Posts from "@/components/post/Posts";
import app from "../components/utilis/firebase.config";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const Content = () => {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      setPosts((posts) => [...posts, doc.data()]);
    });
  };

  //..............
  const onGamePress = async (gameName) => {
    setPosts([]);
    if (gameName == "Other Foods") {
      getPost();
      return;
    }
    const q = query(collection(db, "posts"), where("game", "==", gameName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      setPosts((posts) => [...posts, doc.data()]);
    });
  };

  return <>{posts ? <Posts posts={posts} /> : null}</>;
};

export default Content;
