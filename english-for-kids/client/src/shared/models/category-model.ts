import { IWord } from './WordCard';

export interface ICategory {
  _id: string;
  name: string;
  imageUrl: string;
  cards: IWord[];
}
