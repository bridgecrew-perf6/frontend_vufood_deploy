import React, { useRef, useState } from "react";
import "./Write.css";
import { Link, useNavigate } from "react-router-dom";
import images from "../../constants/images";
import { useAlert, positions, Provider as AlertProvider } from "react-alert";
import axios from "axios";

const Write = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();
  const alert = useAlert();
  const [success, setSuccess] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://vu-food-web.herokuapp.com/api/posts/",
        {
          title: titleRef.current.value,
          desc: descRef.current.value,
          image: imageRef.current.value,
        }
      );
      console.log(res.data);
      setSuccess(true);
      navigate("/achieve") && alert.show("Published");
    } catch (err) {
      console.log(err);
      setSuccess(false);
      alert.show("Something went wrong");
    }
  };
  return (
    <div className="app__writepost">
      <div className="main__writePage">
        <div className="writePage__write">
          <form onSubmit={handleSubmit}>
            <textarea
              className="write__tittle"
              type="text"
              placeholder="Input your title..."
              ref={titleRef}
            />
            <textarea
              className="write__content"
              type="text"
              placeholder="Write your story...."
              ref={descRef}
            />
            <textarea
              className="write__tittle"
              type="text"
              placeholder="Input your image link..."
              ref={imageRef}
            />
            {/* <Link to="/achieve"> */}
            <button type="submit" onClick={() => {}}>
              PUBLISH
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Write;
