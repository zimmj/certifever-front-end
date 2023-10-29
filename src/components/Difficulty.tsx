// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

interface DifficultyProps {
  onSelectDifficulty: (selectedDifficulty: string) => void;
}

const Difficulty: React.FC<DifficultyProps> = ({ onSelectDifficulty }) => {
  const difficulties = ['Beginner', 'Advanced', 'Expert'];

  return (
    <div>
      <h2 className='text-xl font-bold'>Choose a difficulty level please:</h2>
      <ul className='space-y-2.5'>
        {difficulties.map((difficulty, index) => (
          <li key={index}>
            <button className='btn btn-lg btn-neutral' onClick={() => onSelectDifficulty(difficulty)}>
              {difficulty}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Difficulty;
