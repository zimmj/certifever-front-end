import React, { useState } from 'react';
import Language from './components/Language';
import Difficulty from './components/Difficulty';
import Questions from './components/Questions';

const App: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );
  const [apiUrl, setApiUrl] = useState<string | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);

    // difficulty lvl depending on users choice
    if (difficulty === 'Beginner') {
      setApiUrl('http://localhost:3000/expert.json');
    } else if (difficulty === 'Advanced') {
      setApiUrl('http://localhost:3000/advanced.json');
    } else if (difficulty === 'Expert') {
      setApiUrl('https://www.api.org/sda125');
    }
  };

  return <div className="App"></div>;
};

export default App;
