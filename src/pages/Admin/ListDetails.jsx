/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { Image } from "cloudinary-react";
function ListDetails({ car, fetch }) {
  const [newmodel, setNewModel] = useState("");
  const [newyear, setNewYear] = useState(0);
  const [newbrand, setNewBrand] = useState("");
  const [newprice_day, setNewPrice_day] = useState(0);
  const [newcolor, setNewColor] = useState("");
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState(null);
  const [show, setShow] = useState(false);
  const dialogRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const myFormData = new FormData();
    myFormData.append("images", file);
    setImage(myFormData);
    setFormData(myFormData);
  };


    const updateImg = (id) => {
      axios
        .put(`http://localhost:3000/upload/${id}`, formData)
        .then((res) => {
          console.log("image changed congrats", res.data);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    };

  const modify = (id) => {
    axios
      .put(`http://localhost:3000/update/${id}`, {
        model: newmodel,
        year: newyear,
        brand: newbrand,
        price_day: newprice_day,
        color: newcolor,
        image: "",
      })
      .then((res) => {
        updateImg(id);
        fetch();
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
        setShow(false);
      });
  };
  const remove = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((response) => {
        fetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="car-card">
        <div className="cares-list-item-staff">
          <img src={car?.image} className="car-card-img" />
          <div>Brand: {car.brand}</div>
          <div>Year: {car.year}</div>
          <div>Price: {car.price_day}</div>
          <div>Color: {car.color}</div>
        </div>
        <button
          className="btn"
          onClick={() => {
            setShow(!show);
            dialogRef.current.showModal();
          }}
        >
          Change
        </button>
        <button
          className="btn"
          onClick={() => {
            remove(car.id);
          }}
        >
          Remove
        </button>

        <dialog ref={dialogRef}>
          <div className="dialogForm">
            <input
              className="input-add"
              placeholder="New Model"
              onChange={(event) => setNewModel(event.target.value)}
            />
            <input
              className="input-add"
              placeholder="New Year"
              onChange={(event) => setNewYear(event.target.value)}
            />
            <input
              className="input-add"
              placeholder="New Brand"
              onChange={(event) => setNewBrand(event.target.value)}
            />
            <input
              className="input-add"
              placeholder="New Price_day"
              onChange={(event) => setNewPrice_day(event.target.value)}
            />
            <input
              type="color"
              className="input-add"
              placeholder="New Color"
              onChange={(event) => setNewColor(event.target.value)}
            />
            <input
              className="input-add"
              placeholder="New Image"
              type="file"
              onChange={handleFileChange}
            />
            <button className="btn btn-animate" onClick={() => modify(car.id)}>
              Save
            </button>
            <button
              className="btn btn-animate"
              onClick={() => dialogRef.current.close()}
            >
              Close
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default ListDetails;
