import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve('./client/index.html'));
});
router.get('/signup', (req, res) => {
  res.sendFile(path.resolve('./client/signup.html'));
});

export default router;