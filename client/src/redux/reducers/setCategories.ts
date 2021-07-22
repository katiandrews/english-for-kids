import { ICategory } from '../../shared/models/category-model';

const initialState = {
  items: [
    {
      id: 0,
      name: 'Animals',
      imageUrl: '',
      cards: [
        {
          word: 'Raccoon',
          wordImage: '',
          audio: '',
          translation: 'Енот',
        },
        {
          word: 'Beaver',
          wordImage: '',
          audio: '',
          translation: 'Барсук',
        },
        {
          word: 'Panda',
          wordImage: '',
          audio: '',
          translation: 'Панда',
        },
        {
          word: 'Crocodile',
          wordImage: '',
          audio: '',
          translation: 'Крокодил',
        },
        {
          word: 'Raven',
          wordImage: '',
          audio: '',
          translation: 'Ворон',
        },
        {
          word: 'Turtle',
          wordImage: '',
          audio: '',
          translation: 'Черепаха',
        },
        {
          word: 'Camel',
          wordImage: '',
          audio: '',
          translation: 'Верблюд',
        },
        {
          word: 'Hedgehog',
          wordImage: '',
          audio: '',
          translation: 'Ёж',
        },
      ],
    },
  ],
};

const categoriesItems = (categories = initialState, action: { type: string; payload: ICategory[]; }) => {
  if (action.type === 'SET_CATEGORIES') {
    return {
      items: action.payload,
    };
  }
  return categories;
};

export default categoriesItems;
