import React, { useEffect, useState } from "react";
import { Article } from "../../components";
import { data } from "../../constants";
import "./Achieve.css";
import axios from "axios";
const Achieve = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://vu-food-web.herokuapp.com/api/posts"
      );
      data.article = res.data;
      // console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  });
  return (
    <div className="app__achieve">
      {data.article.map((post, idx) => (
        <Article key={idx} post={post} />
      ))}
      <div className="app__achieve-button">
        <button>Load more</button>
      </div>
    </div>
  );
};

export default Achieve;
