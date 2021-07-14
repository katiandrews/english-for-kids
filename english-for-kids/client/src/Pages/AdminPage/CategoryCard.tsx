import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/button';
import { IWord } from '../../shared/models/WordCard';
import DeleteIcon from '../../assets/img/delete.svg';
import useHttp from '../../hooks/http.hook';
import { ICategory } from '../../shared/models/category-model';
import setCategories from '../../redux/actions/setCategories';

interface IProps {
  classNames: string;
  name: string;
  imageUrl: string;
  _id: string;
  cards: IWord[];
  onDelete: () => void;
  onClick: () => void;
}

export default function CategoryCard({
  name, imageUrl, _id, cards, onDelete, onClick
}: IProps) {
  const dispatch = useDispatch();
  const categoriesCards = useSelector(
    ({ categories }: { categories: { items: ICategory[] } }) => categories.items,
  );
  const { request } = useHttp();

  const [edit, setEdit] = useState(false);
  const [categoryInfo, setInfo] = useState({ name: '', imageUrl: '' });

  useEffect(() => {
    setInfo({ name, imageUrl });
  }, [edit, name, imageUrl]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...categoryInfo, [event.target.name]: event.target.value });
  };

  const changeFileHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = await new Promise((resolve) => {
      const { files } = event.target;
      const reader = new FileReader();
      reader.onload = (fileLoadedEvent) => {
        const srcData = fileLoadedEvent.target?.result;
        if (srcData) { resolve(srcData); }
      };
      if (files && files.length > 0) {
        reader.readAsDataURL(files[0]);
      }
    });
    setInfo({ ...categoryInfo, [event.target.name]: url });
  };

  const updateCategory = async () => {
    await request(`categories/${_id}`, 'PUT', categoryInfo);
    const categoryIndex = categoriesCards.findIndex((element) => element._id === _id);
    categoriesCards[categoryIndex] = { ...categoriesCards[categoryIndex], ...categoryInfo };
    dispatch(setCategories([...categoriesCards]));
    setEdit(false);
  };

  if (edit) {
    return (
      <div className='card'>
        <div className="card-image" style={{ backgroundImage: `url('${categoryInfo.imageUrl}')` }}>
          <label htmlFor="image" className='fileinput'>
            Change image
            <input
              type="file"
              name='imageUrl'
              id='image'
              onChange={changeFileHandler} />
          </label>
        </div>
        <div className="card-description">
          <label htmlFor="name">
            Category name <br />
            <input
              type="text"
              name="name"
              onChange={changeHandler} />
          </label>
        </div>
        <div className="buttons">
          <Button classNames='button button-secondary'
            text='Update' onClick={updateCategory} />
          <Button classNames='button button-warning'
            text='Cancel' onClick={() => setEdit(false)} />
        </div>
      </div>
    );
  }
  return (
    <div className='card' onClick={onClick}>
      <DeleteIcon onClick={onDelete} className='delete-icon' />
      <div className="card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
      <div className="card-description">
        <h2 className="card-name">{name}</h2>
        <span className="cards-quantity">Words: {cards.length}</span>
      </div>
      <div className="buttons">
        <Button classNames='button-secondary'
          text='Update' onClick={() => setEdit(true)} />
        <Button classNames='button-secondary'
          text='Add word' onClick={() => { }} />
      </div>
    </div>
  );
}
