import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    cards: { type: Array },
  },
);

const Category = mongoose.model('Category', CategorySchema);

export default Category;
