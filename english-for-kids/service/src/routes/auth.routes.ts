import { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/default';
import User from '../schemas/user';

const router = Router();

module.exports = router;

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'There is no such user' });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign(
      { userId: user.id },
      config.jwtSecret,
      { expiresIn: '1h' },
    );
    return res.json({ token, userId: user.id });

  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong, try again' });
  }
});
