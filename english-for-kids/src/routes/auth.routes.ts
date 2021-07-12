import { Router } from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';
import User from '../schemas/user';

const router = Router();

module.exports = router;

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'There is no such user' });
    
    const isPasswordMatch = password === user.password;
    if (!isPasswordMatch) return res.status(400).json({ message: 'Incorrect password' });

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' },
    );
    res.json({ token, userId: user.id });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
  return res.json();
});
