import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditExercisePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [exercise, setExercise] = useState({
    name: '',
    reps: 0,
    weight: 0,
    unit: 'kgs',
    date: '',
  });
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await fetch(`/exercises/${id}`);
        if (response.status === 200) {
          const data = await response.json();
          setExercise(data);
        } else {
          console.error('Exercise not found');
        }
      } catch (error) {
        console.error('Error fetching exercise:', error);
      }
    };
    fetchExercise();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExercise(prevExercise => ({
      ...prevExercise,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`/exercises/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(exercise),
      });
      if (response.status === 200) {
        alert('Exercise updated successfully');
        navigate('/');
      } else {
        alert('Failed to update exercise');
        navigate('/');
      }
    } catch (error) {
      console.error('Error updating exercise:', error);
      alert('Failed to update exercise');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Edit Exercise</h2>
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
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditExercisePage;