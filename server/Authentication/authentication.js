const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || '123456789';

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');


  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token.split(' ')[1], secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };