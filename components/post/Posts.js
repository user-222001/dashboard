import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import app from "../../components/utilis/firebase.config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function Posts() {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      setPosts((posts) => [...posts, data]);
    });
  };

  const onDeletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.reload();
  };
  return (
    <div>
      <div
        className="grid grid-cols-1 
    sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3
    gap-5 mt-5 px-10"
      >
        {posts.map((item, index) => (
          <div key={index}>
            <PostItem post={item} modal={true} />
            <button
              className="bg-red-400 w-full p-1 mt-1
rounded-md text-white"
              onClick={() => onDeletePost(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
