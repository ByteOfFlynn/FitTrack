import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import ExerciseModel from './exerciseModel.mjs';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const isValidDateFormat = (dateString) => {
  const regex = /^(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])-\d{2}$/;
  return regex.test(dateString);
};

app.post('/exercises', asyncHandler(async (req, res) => {
  const { name, reps, weight, unit, date } = req.body;
  if (!name || !reps || !weight || !unit || !date) {
    return res.status(400).json({ Error: 'Invalid Request' });
  }
  if (!isValidDateFormat(date)) {
    return res.status(400).json({ Error: 'Invalid Request' });
  }
  try {
    const exercise = await ExerciseModel.create({
      name,
      reps,
      weight,
      unit,
      date,
    });
    return res.status(201).json(exercise);
  } catch (error) {
    return res.status(400).json({ Error: 'Invalid request' });
  }
}));

app.get('/exercises', asyncHandler(async (req, res) => {
  const exercises = await ExerciseModel.find();
  return res.status(200).json(exercises);
}));

app.get('/exercises/:_id', asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const exercise = await ExerciseModel.findById(_id);
  if (exercise) {
    return res.status(200).json(exercise);
  } else {
    return res.status(404).json({ Error: 'Not found' });
  }
}));

app.put('/exercises/:_id', asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const { name, reps, weight, unit, date } = req.body;
  if (!name || !reps || !weight || !unit || !date) {
    return res.status(400).json({ Error: 'Invalid request' });
  }
  if (!isValidDateFormat(date)) {
    return res.status(400).json({ Error: 'Invalid Request' });
  }
  try {
    const exercise = await ExerciseModel.findByIdAndUpdate(
      _id,
      { name, reps, weight, unit, date },
      { new: true }
    );
    if (exercise) {
      return res.status(200).json(exercise);
    } else {
      return res.status(404).json({ Error: 'Not found' });
    }
  } catch (error) {
    return res.status(400).json({ Error: 'Invalid request' });
  }
}));

app.delete('/exercises/:_id', asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const exercise = await ExerciseModel.findByIdAndDelete(_id);
  if (exercise) {
    return res.status(204).send();
  } else {
    return res.status(404).json({ Error: 'Not found' });
  }
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});