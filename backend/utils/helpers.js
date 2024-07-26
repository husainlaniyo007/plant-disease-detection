const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generate a hashed password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

// Compare a password with a hashed password
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Generate a JWT token
const generateToken = (user) => {
  const payload = { user: { id: user.id } };
  const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
  return token;
};

// Verify a JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, 'your_jwt_secret');
  } catch (err) {
    return null;
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};

