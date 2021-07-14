import { Router } from "express";
import Word from "../schemas/word";

const router = Router();

router.get('/', async (req, res) => {
  try {
    const words = await Word.find({ category: req.query.category });
    res.json(words);
  } catch (error) {}
}) 

router.post('/', async (req, res) => {
  try {
    const newWord = new Word({
      category: req.query.category,
      word: req.body.word,
      image: req.body.image,
      audio: req.body.audio,
      translation: req.body.translation
    });
    await newWord.save();
    res.status(201).json({ newWord });
  } catch (error) {}
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedWord = await Word.deleteOne({ _id: req.params.id });
    res.json(deletedWord);
  } catch (error) {}
}) 

router.delete('/', async (req, res) => {
  try {
    const deletedWords = await Word.deleteMany({ category: req.query.category });
    res.json(deletedWords);
  } catch (error) {}
}) 

module.exports = router;