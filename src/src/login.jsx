import React,{useState} from 'react'
import axios from 'axios'
import Cookies from "js-cookie"
import {useNavigate} from 'react-router-dom'


function Signup(){
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()


 const sign=()=>{
      axios.post(`http://localhost:5000/signup`,{username:username,password:password})
      .then((result)=>{Cookies.set("token",result.data.token)    
          Cookies.set('id',result.data.user.id)
          navigate('/')})
      .catch((err)=>{console.log(err)})
   }


  return (
    <div className='sign' >
        <h1 >Sign up</h1>
        <div className="signin" >Email:<input type="text"onChange={(e)=>{setUsername(e.target.value)}}  /></div>
        <div className="signin" >Password:<input type="password"onChange={(e)=>{setPassword(e.target.value)}} /></div>
        <button className='signButton' onClick={()=>{sign()}}>Sign up</button>
    </div>
  )
}



export default Signup