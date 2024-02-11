/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useState } from "react";
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
      .then(() => {
        updateImg(id);
        fetch();
        setShow(false);
        window.location.reload()
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
    <div className="cares">
      <div className="container">
        <div className="">
          <h2>{car.model}</h2>
          <div className="cares-list-item-names" onClick={() => {}}></div>
          <Image
            cloudName="your_cloud_name"
            publicId={car.imagePublicId}
            width="300"
            crop="scale"
          />
          <div className="cares-list-item-staff">
            <img src={car?.image} />
            <h2>{car.brand}</h2>
            <h2>{car.year}</h2>
            <h2>{car.brand}</h2>
            <h2>{car.price_day}</h2>
            <div
              style={{
                backgroundColor: `${car.color}`,
                height: "30px",
                width: "60px",
                border: "1px solid",
              }}
            ></div>
          </div>
          <button className="btn" onClick={() => setShow(!show)}>
            Change
          </button>
          {show && (
            <div>
              <input
                className="update-input"
                placeholder="New Model"
                onChange={(event) => setNewModel(event.target.value)}
              />
              <input
                className="update-input"
                placeholder="New Year"
                onChange={(event) => setNewYear(event.target.value)}
              />
              <input
                className="update-input"
                placeholder="New Brand"
                onChange={(event) => setNewBrand(event.target.value)}
              />
              <input
                className="update-input"
                placeholder="New Price_day"
                onChange={(event) => setNewPrice_day(event.target.value)}
              />
              <input
                className="update-input"
                placeholder="New Color"
                onChange={(event) => setNewColor(event.target.value)}
              />
              <input
                className="update-input"
                placeholder="New Image"
                type="file"
                onChange={handleFileChange}
              />
              <button className="btn" onClick={() => modify(car.id)}>
                Save
              </button>
            </div>
          )}
          <button className="btn" onClick={() => remove(car.id)}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListDetails;
