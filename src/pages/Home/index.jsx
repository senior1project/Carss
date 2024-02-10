import React, { useEffect, useState } from 'react'
import Landing from '../../components/Landing'
import Search from '../../components/Search'
import './home.css'
import axios from 'axios'

const Home = () => {
    const [filter,setFilter]= useState({text:"",min:0,max:10000000000})
    const [listeTotal,setListeTotal] = useState([])
    useEffect(()=>{
       axios.get("http://127.0.0.1:3000/getAll").then((response)=>{
        setListeTotal(response.data);
       })
    },[])

   
  return (
  <div className='container-home'>
<Landing setFilter={setFilter} filter={filter}/>
<Search filter={filter} listCar={listeTotal}/>

</div>
  )
}

export default Home