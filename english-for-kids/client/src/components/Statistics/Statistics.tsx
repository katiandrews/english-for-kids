import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../shared/Button/button';
import { ICategory } from '../../shared/models/category-model';
import Table from '../../shared/Table/Table';
import './Statistics.scss';

const tableColumns = ['Category', 'Word', 'Translation', 'Trained', 'Correct', 'Incorrect', '% Correct'];

export default function Statistics() {
  const categoriesData = useSelector(
    ({ categories }: { categories: { items: ICategory[] } }) => categories.items,
  );
  const [value, setValue] = useState(0);

  const forceUpdate = () => {
    setValue(() => value + 1);
  };

  const clearStatistics = () => {
    localStorage.clear();
    forceUpdate();
  };

  return (
    <>
      <div className='page-header'>
        <h1 className={'page-title'}>Games and trains statistic</h1>
        <div className="button-container">
          <Button classNames='button-primary' text='Repeat difficult words' onClick={() => { }} />
          <Button classNames='button-secondary' text='Reset' onClick={clearStatistics} />
        </div>
      </div>
      <div className="statistics">
        <Table thead={tableColumns} wordsData={categoriesData} />
      </div>
    </>
  );
}
