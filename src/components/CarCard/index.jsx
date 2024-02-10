import React from 'react'
import "./CarCard.css"
const CarCard = ({car}) => {
  //  model;
  //  year;
  //  brand;
  //  price_day;
  //  color;
  return (
    <a href={'/car/'+car.id}>
    <div className='card'>
        <img  className="card-image"src={car.image} alt="" />
        <div className="card-text">
            <div className="title">{`${car.brand} ${car.model}`}</div>
            <div className="price">{`${car.price_day} TND`}</div>
            <div className="color-carCard" style={{background:car.color}} ></div>
        </div>
    </div></a>
  )
}

export default CarCard