/*const Cars=require("../database-mysql/index.js")


////////////jwt////////////

  const authentication = (req, res, next)=>{
    const token = req.header('Authorization')
    if(!token){
       return res.status(401)}
    jwt.verify(token,secretKey,(err, user)=>{
      if(err){
        return res.status(403)}
      req.user = user
      next()
    })
  }


///////////CRUD//////////
const get=async(req,res)=>{
    try{
     const allCars = await Cars.findAll()
      res.json(allCars)}
    catch(error){
      res.status(500).json(error)
    }
  }

const post=async(req, res)=>{
    try{
      const newCar = await Cars.create(req.body)
      res.json(newCar)}
    catch (error){
      res.status(500).json(error)
    }
  }

const deletee=async(req,res)=>{
    const {id} = req.params
    try{
      await Cars.destroy({where:{id}})
      res.json("deleted")}
    catch(error){
      res.status(500).json(error)
    }
  }

const put=async(req,res)=>{
    const {id} = req.params
    try{
      await Cars.update(req.body,{where:{id}})
      res.json("updated successfully")}
    catch(error){
      res.status(500).json(error)
    }
  }

  module.exports ={authentication,get,post,deletee,put}*/

  const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const car = require('../database-mysql/indexx');
const {authentication} = require('../../server/Authentication/authentication.js') 
const secretKey = process.env.JWT_SECRET || '123456789';

//res.json({ token,username });add username in sign in function

const FINDALL=(req,res)=>{
  car.findAll((err, results)=>{
    if(err){
      console.log(err)} 
    res.json(results)})
}

const FIND=(req,res)=>{
  let id=req.params.id
  car.findCarById(id,(err,result)=>{
    if(err){
      console.log(err)}
      res.json(result)})
}


const FINDONE=(req,res)=>{
  let brand=req.params.brand
  car.findCar(brand,((err,results)=>{
    if(err){
        console.log(err)}
     res.json(results)}))
}


const UPDATEONE=(req,res)=>{
  let val=req.body  
  let id=req.params.id
  car.updateCar(val,id,((err,results)=>{
    if(err){
        console.log(err)}
        res.json(results)}))
}

const DELETEONE=(req,res)=>{
  let id=req.params.id
  car.deleteCar(id,((err,results)=>{
    if(err){
        console.log(err)}
    res.json(results)}))
}

const ADDONE=(req,res)=>{
  let val=req.body
  car.addCar(val,((err,results)=>{
    if (err) {
        console.log(err)}
   res.json(results)}))
}

const Makereservation =(req,res)=>{
  let val= req.body
  car.reservation(val,((err,results)=>{
    if (err){
        console.log(err)}
        res.json(results)}))
}

const DELETEResrvation=(req,res)=>{
  let id=req.params.id
   car.deleteReservation(id,((err,results)=>{
    if(err){
      console.log(err)}
    res.json(results)}))
}

const UpdateReservation=(req,res)=>{
  let val =req.body  
  let id=req.params.id
  car.updateReservation(val,id,((err,results)=>{
    if(err){
      console.log(err)}
    res.json(results)}))
}





module.exports={ADDONE,UPDATEONE,DELETEONE,FINDALL,FINDONE,FIND,UpdateReservation,
DELETEResrvation,Makereservation}
