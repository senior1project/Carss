import React, { useEffect, useState } from 'react'
import CarCard from '../CarCard'
import './search.css'

const Search = ({listCar,filter}) => {
const [filtredList,setFiltredList]= useState(listCar)

    useEffect(() => {
      
     const t = listCar.filter((car) => {
        
       return (

         (car.brand.includes(filter.text) ||
         car.model.includes(filter.text)) &&
         (parseInt(car.price_day) <= (filter.max?filter.max: 10000000000) &&
         parseInt(car.price_day) >= (filter.min?filter.min:0) )
       );
     });

      console.log(t,filter);
      setFiltredList(t)
    }, [filter,listCar])
    

  return (
    <div id='search'><h2>{`${filtredList.length} Car(s) Found`}</h2>

    <div className='container-search'>
   
   {filtredList.map((car)=>{
   return <CarCard key={car.id} car={car}/>




   })}

</div>
    </div>
  )
}

export default Search