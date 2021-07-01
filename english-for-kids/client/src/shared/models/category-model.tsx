import { IWord } from './WordCard';

export interface ICategory {
  id: number;
  name: string;
  imageUrl: string;
  cards: IWord[];
}
