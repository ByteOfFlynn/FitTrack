import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';

const HomePage = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };
    fetchExercises();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/exercises/${id}`, {
        method: 'DELETE',
      });
      if (response.status === 204) {
        setExercises(exercises.filter(exercise => exercise._id !== id));
      } else {
        console.error('Delete operation failed');
      }
    } catch (error) {
      console.error('Error deleting exercise:', error);
    }
  };
  return (
    <div>
      <h2>Exercise List</h2>
      <ExerciseTable exercises={exercises} onDelete={handleDelete} />
      <Link to="/create">Create Exercise</Link>
    </div>
  );
};

export default HomePage;