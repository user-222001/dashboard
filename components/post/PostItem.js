import React from "react";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import UserInfo from "./UserInfo";
const PLACEHOLDER = "./images/default.jpg";

function PostItem({ post, modal = false }) {
  return (
    <>
      {post ? (
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">TITLE: {post.title}</h2>
            <p>DATE: {post.date}</p>
            <p>LOCATION: {post.location}</p>
            <p>ZIP: {post.zip}</p>
            <div className="card-actions justify-end">
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PostItem;
