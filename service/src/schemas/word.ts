import mongoose, { Schema } from 'mongoose';

const WordSchema = new Schema(
  {
    category: { type: String, required: true },
    word: { type: String, required: true, unique: true },
    image: { type: String },
    audio: { type: String, required: true },
    translation: { type: String, required: true },
  },
);

const Word = mongoose.model('Word', WordSchema);

export default Word;
