import { ICategory } from "../../shared/models/category-model";

const initialState = {
  items: [
    {
      "id": 0,
      "name": "Animals",
      "imageUrl": "https://static.vecteezy.com/system/resources/previews/002/382/021/large_2x/cute-animal-icon-set-free-vector.jpg",
      "cards": [
        {
          "word": "Raccoon",
          "wordImage": "https://static.vecteezy.com/system/resources/previews/000/299/482/large_2x/vector-gray-raccoon-with-happy-face.jpg",
          "audio": "",
          "translation": "Енот"
        },
        {
          "word": "Beaver",
          "wordImage": "https://static.vecteezy.com/system/resources/previews/000/295/457/non_2x/vector-beaver-in-circle-banner.jpg",
          "audio": "",
          "translation": "Барсук"
        },
        {
          "word": "Panda",
          "wordImage": "https://static.vecteezy.com/system/resources/previews/000/367/590/non_2x/vector-panda.jpg",
          "audio": "",
          "translation": "Панда"
        },
        {
          "word": "Crocodile",
          "wordImage": "https://static.vecteezy.com/system/resources/previews/000/531/736/large_2x/cute-cartoon-crocodile-alligator-on-white-background-vector-illustration.jpg",
          "audio": "",
          "translation": "Крокодил"
        },
        {
          "word": "Raven",
          "wordImage": "https://static.vecteezy.com/system/resources/previews/000/299/181/large_2x/ravan-on-white-background-vector.jpg",
          "audio": "",
          "translation": "Ворон"
        },
        {
          "word": "Turtle",
          "wordImage": "https://static.vecteezy.com/system/resources/previews/000/369/176/large_2x/cute-turtle-with-happy-face-vector.jpg",
          "audio": "",
          "translation": "Черепаха"
        },
        {
          "word": "Camel",
          "wordImage": "https://static.vecteezy.com/system/resources/previews/001/426/822/large_2x/isolated-camel-on-white-background-free-vector.jpg",
          "audio": "",
          "translation": "Верблюд"
        },
        {
          "word": "Hedgehog",
          "wordImage": "https://static.vecteezy.com/system/resources/previews/002/047/547/large_2x/cute-baby-hedgehog-illustration-vector.jpg",
          "audio": "",
          "translation": "Ёж"
        }
      ]
    }
  ]
}

const categories = (categories = initialState, action: { type: string; payload: ICategory[]; }) => {
  if (action.type === 'SET_CATEGORIES') {
    return {
      items: action.payload,
    }
  }
  return categories;
}

export default categories;