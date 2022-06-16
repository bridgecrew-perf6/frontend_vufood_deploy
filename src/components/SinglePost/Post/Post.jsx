import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import images from "../../../constants/images";
import "./Post.css";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://vu-food-web.herokuapp.com/api/posts/" + path
      );
      setPost(res.data);
      console.log(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="app__post section__padding">
      <div className="app__post-title">
        <h2>{post.title}</h2>
      </div>
      <div className="app__post-desc">
        <p>{post.desc}</p>
      </div>
      <div className="app__post-image">
        <img src={post.image} alt="" />
      </div>
    </div>
  );
};

export default Post;
