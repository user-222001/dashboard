"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "@/components/UserAuthContext";
import app from "../../components/utilis/firebase.config";
import { doc, getFirestore, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Provider from "@/components/Provider/Provider";

function EditPost() {
  const router = useRouter();
  const database = getFirestore(app);

  //user and coming id of edit todo
  const { user, postid } = useUserAuth();
  console.log(postid);

  //user posts data filter by id
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    getUserPost();
  }, [user]);

  const getUserPost = async () => {
    const docRef = doc(database, "posts", postid);
    const docSnap = await getDoc(docRef);
    setUserPost(docSnap.data());
  };
  console.log(userPost);

  //update post
  const [titleel, settitleel] = useState("");
  const [locationel, setlocationel] = useState("");
  const [zipel, setzipel] = useState("");
  const [descel, setdescel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = doc(database, "posts", postid);
    await updateDoc(updateData, {
      title: titleel,
      location: locationel,
      zip: zipel,
      desc: descel,
    });
    router.push("/dashboard");
  };

  return (
    <div>
      <h2
        className="text-[30px] 
        font-extrabold text-blue-500 flex justify-start items-start mb-10"
      >
        edit Todo
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  items-center justify-center gap-10 "
      >
        <div className=" grid grid-cols-2 w-full gap-10">
          <label className="input-group">
            <span>TITLE</span>
            <input
              type="text"
              name="title"
              id="title"
              placeholder={userPost.title}
              required
              className="input input-bordered"
              // value={userPost.title}
              onChange={(e) => settitleel(e.target.value)}
            />
          </label>

          <label className="input-group">
            <span>DESCRIPTION</span>
            <input
              type="text"
              name="desc"
              placeholder={userPost.location}
              required
              className="input input-bordered"
              onChange={(e) => setdescel(e.target.value)}
            />
          </label>

          <label className="input-group">
            <span>LOCATION</span>
            <input
              name="location"
              required
              placeholder={userPost.location}
              className="input input-bordered"
              onChange={(e) => setlocationel(e.target.value)}
            />
          </label>
          <label className="input-group">
            <span>ZIP</span>
            <input
              type="text"
              placeholder={userPost.zip}
              name="zip"
              required
              className="input input-bordered"
              onChange={(e) => setzipel(e.target.value)}
            />
          </label>
        </div>
        <div className="flex gap-10">
          <button
            type="submit"
            className="bg-blue-500   px-10 py-4
rounded-md text-white"
          >
            Submit
          </button>
          <button
            onClick={() => {
              router.push("/dashboard");
            }}
            type="button"
            className="bg-red-500 px-10 py-4
rounded-md text-white"
          >
            close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Provider(EditPost);
