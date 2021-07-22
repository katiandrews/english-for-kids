import { Request, Response, Router } from 'express';
import Word from '../schemas/word';

export class WordsRouter {
  public router = Router();

  private path = '/words';

  constructor() {
    this.router.get(`${this.path}`, this.getWords);
    this.router.post(`${this.path}`, this.createWord);
    this.router.delete(`${this.path}/:id`, this.deleteWord);
    this.router.delete(`${this.path}`, this.deleteManyWords);
  }

  private getWords = async (req: Request, res: Response) => {
    try {
      const words = await Word.find({ category: req.query.category });
      res.json(words);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }

  private createWord = async (req: Request, res: Response) => {
    try {
      const {
        word, image, audio, translation,
      } = req.body;
      const newWord = new Word({
        category: req.query.category,
        word,
        image,
        audio,
        translation,
      });

      await newWord.save();
      res.status(201).json({ newWord });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }

  private deleteWord = async (req: Request, res: Response) => {
    try {
      const deletedWord = await Word.deleteOne({ _id: req.params.id });
      res.json(deletedWord);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }

  private deleteManyWords = async (req: Request, res: Response) => {
    try {
      const deletedWords = await Word.deleteMany({ category: req.query.category });
      res.json(deletedWords);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }
}

// const router = Router();

// router.get('/', async (req, res) => {
//   try {
//     const words = await Word.find({ category: req.query.category });
//     res.json(words);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong, try again' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const { word, image, audio, translation } = req.body;
//     const newWord = new Word({
//       category: req.query.category,
//       word,
//       image,
//       audio,
//       translation,
//     });

//     await newWord.save();
//     res.status(201).json({ newWord });

//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong, try again' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedWord = await Word.deleteOne({ _id: req.params.id });
//     res.json(deletedWord);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong, try again' });
//   }
// });

// router.delete('/', async (req, res) => {
//   try {
//     const deletedWords = await Word.deleteMany({ category: req.query.category });
//     res.json(deletedWords);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong, try again' });
//   }
// });

// module.exports = router;
