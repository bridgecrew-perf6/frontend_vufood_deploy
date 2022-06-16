import React, { useEffect, useState } from "react";
import { data } from "../../../constants";
import ItemCate from "../ItemCate/ItemCate";
import "./CateItem.css";
import axios from "axios";
const CateItem = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const fetchCate = async () => {
      const res = await axios.get(
        "https://vu-food-web.herokuapp.com/api/categories/"
      );
      data.cateName = res.data;
      data.category = res.data;
      console.log(res.data);
      setCate(res.data.name);
    };
    fetchCate();
  });
  return (
    <div className="app__cateitem section__padding">
      <div className="app__cateitem-menu">
        <ul>
          <li style={{ color: "white" }}>All</li>
          {data.cateName.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="app__cateitem-items">
        {data.category.map((item, idx) => (
          <ItemCate key={idx} item={item} />
        ))}
      </div>
      <div className="app__cateitem-showmore">
        <button className="app__button">SHOW MORE</button>
      </div>
    </div>
  );
};

export default CateItem;
