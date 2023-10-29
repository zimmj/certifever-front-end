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
      <h2 className='text-xl font-bold'>Choose a programming language to test yourself please:</h2>
      <br />
      <ul className="space-x-2.5" >
        {languages.map((language, index) => (
          <li className='inline' key={index}>
            <button className="btn btn-lg btn-neutral" onClick={() => onSelectLanguage(language)}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
