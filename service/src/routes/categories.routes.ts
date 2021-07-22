import { Request, Response, Router } from 'express';
import Category from '../schemas/category';

export class CategoriesRoutes {
  public router = Router();

  private path = '/categories';

  constructor() {
    this.router.get(`${this.path}`, this.getCategories);
    this.router.get(`${this.path}/:id`, this.getCategory);
    this.router.post(`${this.path}`, this.createCategory);
    this.router.put(`${this.path}/:id`, this.updateCategory);
    this.router.delete(`${this.path}/:id`, this.deleteCategory);
  }

  private getCategories = async (req: Request, res: Response) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }

  private getCategory = async (req: Request, res: Response) => {
    try {
      const category = await Category.findById(req.params.id);
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }

  private createCategory = async (req: Request, res: Response) => {
    try {
      const newCard = new Category({
        name: req.body.name || 'new Category',
        imageUrl: req.body.imageUrl || '',
        cards: [],
      });
      await newCard.save();
      res.status(201).json({ newCard });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }

  private updateCategory = async (req: Request, res: Response) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id, req.body,
        { useFindAndModify: false },
      );
      res.json(updatedCategory);
    } catch (error) {
      res.status(500).send({
        message: `Error updating Tutorial with id=${req.params.id}`,
      });
    }
  }

  private deleteCategory = async (req: Request, res: Response) => {
    try {
      const category = await Category.deleteOne({ _id: req.params.id });
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }
}
