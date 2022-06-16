import React from "react";
import { data } from "../../../constants";
import "./Article.css";
import { Link } from "react-router-dom";

const Article = ({ post }) => {
  return (
    <div className="app__article section__padding">
      <div className="app__article-title">
        <h1>{post.title}</h1>
      </div>
      <div className="app__article-desc">
        <p>{post.desc}</p>
      </div>
      <div className="app__article-readmore">
        <Link to={`/singlepost/${post._id}`}>
          <span>Read more</span>
        </Link>
      </div>
      <div className="app__article-line"></div>
    </div>
  );
};

export default Article;
