import Button from "../../shared/Button/button";

export default function CardControl() {
  return (
    <div className='card'>
      <div className="card-image" style={{ backgroundImage: `url('')` }}>
        <label htmlFor="image" className='fileinput'>
          Upload image
          <input
            type="file"
            name='imageUrl'
            id='image'
          />
        </label>
      </div>
      <div className="card-description">
        <label htmlFor="name">
          Category name <br />
          <input
            type="text"
            name="name"
          />
        </label>
      </div>
      <div className="buttons">
        <Button classNames='button button-secondary'
          text='Create card' onClick={() => { }} />
        <Button classNames='button button-warning'
          text='Clear' onClick={() => { }} />
      </div>
    </div>
  )
}