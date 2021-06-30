import { useSelector } from "react-redux";
import Button from "../../shared/Button/button";
import { ICategory } from "../../shared/models/category-model";
import Table from "../../shared/Table/Table";
import './Statistics.scss';

const tableColumns = ['Category', 'Word', 'Translation', 'Trained', 'Correct', 'Incorrect'];

export default function Statistics() {
  const categoriesData = useSelector(
    ({ categories }: { categories: { items: ICategory[] } }) => categories.items,
  );

  return (
    <>
      <div className='page-header'>
        <h1 className={'page-title'}>Games and trains statistic</h1>
        <div className="button-container">
          <Button classNames='button-primary' text='Repeat difficult words' onClick={() => { }} />
          <Button classNames='button-secondary' text='Reset' onClick={() => { }} />
        </div>
      </div>
      <div className="statistics">
        <Table thead={tableColumns} wordsData={categoriesData} />
      </div>
    </>
  );
}
