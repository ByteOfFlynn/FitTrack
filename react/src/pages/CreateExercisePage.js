import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateExercisePage = () => {
  const navigate = useNavigate();
  const [exercise, setExercise] = useState({
    name: '',
    reps: 0,
    weight: 0,
    unit: 'kgs',
    date: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExercise((prevExercise) => ({
      ...prevExercise,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/exercises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(exercise),
      });
      console.log(response.status, await response.text());
      if (response.status === 201) {
        alert('Exercise created successfully');
        setExercise({
          name: '',
          reps: 0,
          weight: 0,
          unit: 'kgs',
          date: '',
        });
        navigate('/');
      } else {
        alert('Failed to create exercise');
      }
    } catch (error) {
      console.error('Error creating exercise:', error);
      alert('Failed to create exercise');
    }
  };

  return (
    <div>
      <h2>Create Exercise</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={exercise.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Reps:</label>
        <input
          type="number"
          name="reps"
          value={exercise.reps}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Weight:</label>
        <input
          type="number"
          name="weight"
          value={exercise.weight}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Unit:</label>
        <select
          name="unit"
          value={exercise.unit}
          onChange={handleInputChange}
        >
          <option value="kgs">kgs</option>
          <option value="lbs">lbs</option>
        </select>
      </div>
      <div>
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={exercise.date}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSave}>Create Exercise</button>
    </div>
  );
};

export default CreateExercisePage;