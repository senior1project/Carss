import React, { useState, useEffect } from "react";

import "./Admin.css";
import axios from "axios";
import Create from "./Create.jsx";
import List from "./List.jsx";
import Search from "./Search.jsx";

const Admin = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState("List");
  const [refresh, setRefresh] = useState(false);
  const [serachItem, setSearchItem] = useState("");
  const fetch = () => {
    axios
      .get("http://127.0.0.1:3000/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  const changeView = (view) => {
    setView(view);
  };

  const handelSearch = () => {
    axios.get().then((res) => {
      setData(res.data);
    });
    setRefresh(!refresh).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <nav className="car-nav">
        <a href="/admin">List Of Cars</a>
        <br />
        <a href="/admin/addcar" style={{ margin: "20px 0", display: "block" }}>
          Add new car
        </a>
      </nav>
      <List data={data} fetch={fetch} />
    </div>
  );
};

// eslint-disable-next-line no-undef
export default Admin;
