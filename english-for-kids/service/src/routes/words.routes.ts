import { Router } from 'express';
import Word from '../schemas/word';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const words = await Word.find({ category: req.query.category });
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newWord = new Word({
      category: req.query.category,
      word: req.body.word,
      image: req.body.image,
      audio: req.body.audio,
      translation: req.body.translation,
    });
    await newWord.save();
    res.status(201).json({ newWord });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedWord = await Word.deleteOne({ _id: req.params.id });
    res.json(deletedWord);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});

router.delete('/', async (req, res) => {
  try {
    const deletedWords = await Word.deleteMany({ category: req.query.category });
    res.json(deletedWords);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});

module.exports = router;
