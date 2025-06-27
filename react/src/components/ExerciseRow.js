import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ExerciseRow = ({ exercise, onDelete }) => {
  const { _id, name, reps, weight, unit, date } = exercise;
  return (
    <tr>
      <td>{name}</td>
      <td>{reps}</td>
      <td>{weight}</td>
      <td>{unit}</td>
      <td>{date}</td>
      <td>
        <Link to={`/edit/${_id}`}>
          <FaEdit />
        </Link>
      </td>
      <td>
        <button onClick={() => onDelete(_id)}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ExerciseRow;