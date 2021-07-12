import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema(
  {
  name: { type: String, required: true, unique: true },
  image: { type: String },
  cards: { type: Array },
}
);

const Category = mongoose.model('Category', CategorySchema);

export default Category;