const jwt = require('jsonwebtoken');

const generateToken = (user, exWord) => {
  const payload = {
    userId: user._id,
    username: user.username,
    email: user.email
  };

  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('No secret key found.');
  }

  
  const combinedKey = secretKey + exWord;

  return jwt.sign(payload, combinedKey, { 
    expiresIn: '1h'
  });
};

module.exports = { generateToken };


// jwtUtils.js

/* const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    userId: user._id.toString(), 
    username: user.username,
    email: user.email
  };
  
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('No secret key found.');
  }

  return jwt.sign(payload, secretKey, { 
    expiresIn: '1h',
    algorithm: 'HS256' 
  });
};

module.exports = { generateToken };
 */


/* const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateToken = (user) => {
  const payload = {
    userId: user._id.toString(),
    username: user.username, 
    email: user.email
  }  
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('No secret key found. Ensure you have set a SECRET_KEY environment variable.');
  }

  return jwt.sign(payload, secretKey, { 
    expiresIn: '1h',
   
  });
};



module.exports = { generateToken };
 */