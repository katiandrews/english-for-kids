import { Router } from "express";
import Category from "../schemas/category";

const router = Router();

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {

  }
}) 

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    res.json(category);
  } catch (error) {}
}) 

router.post('/', async (req, res) => {
  try {
    const newCard = new Category({
      name: req.body.name, 
      imageUrl: req.body.imageUrl,
      cards: []
    });
    await newCard.save();
    res.status(201).json({ newCard });
  } catch (error) {}
})

router.put('/:id', async(req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).send({
        message: "Error updating Tutorial with id=" + req.params.id
      });
  }
})

router.delete('/:id', async(req, res) => {
  try {
    const category = await Category.deleteOne({_id: req.params.id})
    res.json(category);
  } catch (error) {
  }
})

module.exports = router;
