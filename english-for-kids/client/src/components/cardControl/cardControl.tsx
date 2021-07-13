import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../hooks/http.hook';
import setCategories from '../../redux/actions/setCategories';
import Button from '../../shared/Button/button';
import { ICategory } from '../../shared/models/category-model';

export default function CardControl() {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const [categoryInfo, setInfo] = useState({ name: '', imageUrl: '' });

  const categoriesCards = useSelector(
    ({ categories }: { categories: { items: ICategory[] } }) => categories.items,
  );

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

  const clearInputs = () => {
    setInfo({ name: '', imageUrl: '' });
  };

  const createCard = async () => {
    const { newCard } = await request('categories/', 'POST', categoryInfo);
    dispatch(setCategories([...categoriesCards, newCard]));
    clearInputs();
  };

  return (
    <div className='card'>
      <div className="card-image" style={{ backgroundImage: `url('${categoryInfo.imageUrl}')` }}>
        <label htmlFor="imageInput" className='fileinput'>
          Upload image
          <input
            type="file"
            name='imageUrl'
            id='imageInput'
            onChange={changeFileHandler}
          />
        </label>
      </div>
      <div className="card-description">
        <label htmlFor="name">
          Category name <br />
          <input
            type="text"
            name="name"
            value={categoryInfo.name}
            onChange={changeHandler}
          />
        </label>
      </div>
      <div className="buttons">
        <Button classNames='button button-secondary'
          text='Create card' onClick={createCard} />
        <Button classNames='button button-warning'
          text='Clear' onClick={clearInputs} />
      </div>
    </div>
  );
}
