import { useState } from 'react';
import Button from '../../shared/Button/button';

export default function WordControl() {
  const [wordInfo, setInfo] = useState({ word: '', wordImage: '', translation: '' });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...wordInfo, [event.target.name]: event.target.value });
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
    setInfo({ ...wordInfo, [event.target.name]: url });
  };

  const clearInputs = () => {
    setInfo({ word: '', wordImage: '', translation: '' });
  };

  return (
    <div className='card card-template'>
      <div className="card-image" style={{ backgroundImage: `url('${wordInfo.wordImage}')` }}>
        <label htmlFor="imageInput" className='fileinput'>
          Upload image
          <input type='file' name='imageUrl' id='imageInput' onChange={changeFileHandler} />
        </label>
      </div>
      <div className="card-description">
        <label htmlFor="word">
          Word <br />
          <input type="text" name="word" value={wordInfo.word} onChange={changeHandler} />
        </label>
        <label htmlFor="translation">
          Translation <br />
          <input type="text" name="translation" value={wordInfo.translation} onChange={changeHandler} />
        </label>
      </div>
      <div className="buttons">
        <Button classNames='button-secondary' text='Add word' onClick={() => { }} />
        <Button classNames='button-warning' text='Clear' onClick={clearInputs} />
      </div>
    </div>
  );
}
