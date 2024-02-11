const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../database-mysql/index');
const { authenticateToken } = require('../'); 
const secretKey = process.env.JWT_SECRET || '123456789';

const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.createUser(username, hashedPassword, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
      console.log(results);
      const token = jwt.sign({ username: results.username }, secretKey);
      res.json({ message: 'User created', token });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findUser(username, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
      console.log(results);
      if (!results || results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      const match = bcrypt.compareSync(password, results[0].password);
      if (match) {
        const token = jwt.sign({ username: results[0].username }, secretKey);
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Unauthorized' });
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const FINDALL= (req,res)=>{
  userModel.findAll( (err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log( results)
        res.json(results);
    }
})
}


const FINDONE = (req,res)=>{
  let brand = req.params.brand
  userModel.findCar(brand,( (err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('found : ', results)
        res.json(results);
    }
}))
}
const FINDID = (req,res)=>{
  let id = req.params.id
  userModel.findByid(id,( (err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('found : ', results)
        res.json(results);
    }
        })
)
}


const UPDATEONE = (req,res)=>{
  let val  = req.body  
  let id =  req.params.id
  userModel.updateCar(val,id,( (err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log( results)
        res.json(results);
    }
}))
}

const DELETEONE = (req,res)=>{

  let id = req.params.id
  userModel.deleteCar(id,( (err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log( results)
        res.json(results);
    }
}))
}

const ADDONE =(req,res)=>{
  let val= req.body
  userModel.addCar(val,( (err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log( results)
        res.json(results);
    }
}))
}


const RENTONE = (req,res)=>{
  let val = req.body
  userModel.rentCar(val,( (err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log( results)
        res.json(results);
    }
}))
}
const RENTS = (req,res)=>{
  userModel.Allrents((err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log( results)
        res.json(results);
    }
})
}








module.exports = {
  signup,
  signin,
  ADDONE,
  UPDATEONE,
  DELETEONE,
  FINDALL,
  FINDONE,
  FINDID,
  RENTONE,
  RENTS
};
