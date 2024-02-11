/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import axios from "axios";


const Create = ({ setRefresh, refresh, changeView }) => {
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [brand, setBrand] = useState("");
  const [price_day, setPrice_day] = useState(0);
  const [color, setColor] = useState("");
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState(null);

  const updateImg = (id) =>{
    axios
      .put(`http://localhost:3000/upload/${id}`, formData)
      .then((res) => {
        console.log('image uploaded congrats',res.data)
        window.location.replace("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const myFormData = new FormData();
    myFormData.append("images", file);
    setImage(myFormData);
    setFormData(myFormData);
  };



  const add = () => {
    const obj = {
      model: model,
      year: year,
      brand: brand,
      price_day: price_day,
      color: color,
      image: "",
    };

    axios
      .post("http://localhost:3000/addCar", obj)
      .then((res) => {
        updateImg(res.data.insertId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="create">
        <input
          className="input-add"
          type="text"
          placeholder="Model"
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          className="input-add"
          type="text"
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          className="input-add"
          type="text"
          placeholder="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          className="input-add"
          type="text"
          placeholder="Price_day"
          onChange={(e) => setPrice_day(e.target.value)}
        />
        <input
          className="input-add"
          type="color"
          placeholder="Color"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="input-add"
          type="file"
          placeholder="Image"
          onChange={handleFileChange}
        />
      </div>
      <button onClick={() => add()} className="btn btn-animate">
        add
      </button>
    </div>
  );
};

export default Create;

