import mongoose, { Schema } from 'mongoose';

const WordSchema = new Schema(
  {
    word: String,
    wordImage: String,
    audio: String,
    translation: String,
  },
);

const Word = mongoose.model('Word', WordSchema);

export default Word;
