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
  } catch (error) {
    
  }
}) 

module.exports = router;
