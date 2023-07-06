import React from "react";

//posts card design
function PostItem({ post }) {
  return (
    <>
      {post ? (
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">TITLE: {post.title}</h2>
            <p>DESC: {post.desc}</p>
            <p>LOCATION: {post.location}</p>
            <p>ZIP: {post.zip}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PostItem;
