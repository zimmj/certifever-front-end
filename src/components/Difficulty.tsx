// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

interface DifficultyProps {
  onSelectDifficulty: (selectedDifficulty: string) => void;
}

const Difficulty: React.FC<DifficultyProps> = ({ onSelectDifficulty }) => {
  const difficulties = ['Beginner', 'Advanced', 'Expert'];

  return (
    <div>
      <h2>Choose a difficulty level please:</h2>
      <ul>
        {difficulties.map((difficulty, index) => (
          <li key={index}>
            <button onClick={() => onSelectDifficulty(difficulty)}>
              {difficulty}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Difficulty;
