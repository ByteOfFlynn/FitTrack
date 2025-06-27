import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
  process.env.MONGODB_CONNECT_STRING,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Successfully connected to MongoDB using Mongoose!');
});

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, enum: ['kgs', 'lbs'], required: true },
  date: { type: String, required: true },
});

const ExerciseModel = mongoose.model('exercises', exerciseSchema);

export default ExerciseModel;