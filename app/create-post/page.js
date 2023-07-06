"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import app from "../../components/utilis/firebase.config";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useUserAuth } from "../../components/UserAuthContext";
import Provider from "@/components/Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreatePost() {
  const router = useRouter();
  const { user } = useUserAuth();

  //inputs section
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);

  const db = getFirestore(app);
  const storage = getStorage(app);

  useEffect(() => {
    if (user) {
      setInputs((values) => ({ ...values, email: user.email }));
      setInputs((values) => ({ ...values, id: Date.now().toString() }));
    }
  }, [user]);

  useEffect(() => {
    if (submit == true) {
      savePost();
    }
  }, [submit]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //data submit to firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    const storageRef = ref(storage, "arun-images/" + file?.name);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Upload a file!");
      })
      .then((resp) => {
        getDownloadURL(storageRef).then(async (url) => {
          setInputs((values) => ({ ...values, image: url }));
          setSubmit(true);
        });
      });
  };

  const savePost = async () => {
    await setDoc(doc(db, "posts", Date.now().toString()), inputs);
    toast("Posted successfully");

    //redirect
    const interval = setInterval(() => {
      router.push("/dashboard");
    }, 2000);
    return () => clearInterval(interval);
  };

  return (
    <div>
      <ToastContainer />

      <h2
        className="text-[30px] 
        font-extrabold text-blue-500 flex justify-start items-start mb-10"
      >
        Add Todo
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
              placeholder="Title"
              required
              className="input input-bordered"
              onChange={handleChange}
            />
          </label>

          <label className="input-group">
            <span>DESCRIPTION</span>
            <input
              type="text"
              name="desc"
              placeholder="desc"
              required
              className="input input-bordered"
              onChange={handleChange}
            />
          </label>
          <label className="input-group">
            <span>LOCATION</span>
            <input
              placeholder="Location"
              name="location"
              required
              className="input input-bordered"
              onChange={handleChange}
            />
          </label>
          <label className="input-group">
            <span>ZIP</span>
            <input
              type="text"
              placeholder="Zip"
              name="zip"
              required
              className="input input-bordered"
              onChange={handleChange}
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

export default Provider(CreatePost);
