// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

interface LanguageProps {
  onSelectLanguage: (selectedLanguage: string) => void;
}

const Language: React.FC<LanguageProps> = ({ onSelectLanguage }) => {
  const languages = [
    'Javascript',
    'Python',
    'PHP',
    'React',
    'Angular',
    'Vue',
    'Tailwind',
  ];

  return (
    <div>
      <h2>Choose a programming language to test yourself please:</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <button onClick={() => onSelectLanguage(language)}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
