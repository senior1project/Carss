import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CarInfo.css'
import axios from 'axios'
import dayjs from "dayjs"
const CarInfo = () => {
    const {id} = useParams()
    const [car,setCar]= useState({})
    const [start_date,setStartDate] = useState('')
    const [end_date,setEndDate] = useState('')
    const [successfulRent,setSuccessfulRent] = useState(null)

    useEffect(()=>{

      axios.get(`http://127.0.0.1:3000/getId/${id}`).then((response)=>{
              setCar(response.data[0])
      })

    },[])

    const action = ()=>{
      const nbJours = dayjs(end_date).diff(start_date,"days")
      const total = car.price_day * (nbJours+1)
      axios.post("http://127.0.0.1:3000/rent",{
        start_date,
        end_date,
        total,
        users_id:1,
        vehicle_id:car.id
}).then((response)=>{
  console.log(response.data);
  setSuccessfulRent(true)
}).catch((error)=>{
  setSuccessfulRent(false)
})
    }
  return (
    <div className="container-CarInfo">
      <img src={car.image} alt="" className="car-image" />
      <div className="car-info">
        <span className="car-title">{`${car.brand} ${car.model}`}</span>
        <span className="car-price">{`${car.price_day} TND`}</span>
        <div className="car-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor
          possimus alias sed molestias? Consequuntur quia iste exercitationem
          voluptas quaerat, corrupti facere fugiat consectetur iure eius quidem.
          Culpa, dolorum quia.
        </div>
        {successfulRent == null ? (
          <div className="rent-form">
            <div>
            <label htmlFor="BeginDate">Start Date :</label>
            <input
              id="BeginDate"
              type="date"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            /></div>
            <div>
            <label htmlFor="EndDate"> End Date :</label>
            <input
              id="EndDate"
              type="date"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            /></div>
            <button
              onClick={() => {
                action();
              }}
            >
              Confirm Rent
            </button>
          </div>
        ) : successfulRent == true ? (
          <div className="success">Rent with success</div>
        ) : (
          <div className="error">An error occured</div>
        )}
      </div>
    </div>
  );
}

export default CarInfo