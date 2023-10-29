import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import baselhack from './assests/images/logohack.png';
import './App.css';
import Language from './components/Language';
import Difficulty from './components/Difficulty';
import Questions from './components/Questions';


const App: React.FunctionComponent = () => {
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
  return (
<body data-theme="cmyk" className="mx-20  ">
      <header className="bg-neutral flex justify-between w-full">
      
      <div className=''>
        <img src={certifever} alt="Logo Certifever" className='' />
        </div>
        
        <div className='uppercase font-bolid text-white align-middle text-3xl place-self-center'>
           Certifever  for ever
        </div>
        <div className=''>
          <img src={baselhack} alt="HackBasel" className="" />
        </div> 
        
      </header>
      <div className="bg-slate-200 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      {!selectedLanguage ? (
        <Language onSelectLanguage={handleLanguageSelect} />
      ) : !selectedDifficulty ? (
        <Difficulty onSelectDifficulty={handleDifficultySelect} />
      ) : apiUrl ? (
        <Questions apiUrl={apiUrl} />
      ) : (
        <div>
          <h2>Uploading...</h2>
        </div>
      )}
    </div>
      <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <main className=" md:w-2/3 lg:w-3/4 px-5 py-40">
          <h1 className="text-2xl md:text-4xl">Welcome to Certifever</h1>
          <p>
            Certifever help you to learn very quick any content. You can upload
            a PDF with a topic or you can choice a topic and you will get some
            questions for learning the topic
          </p>
        </main>
      </div>

      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">AI Prompters Team</header>
          <a className="link link-hover" href="./">Anurag Grag</a>
          <a className="link link-hover" href="./">Liam Hoo</a>
          <a className="link link-hover" href="./">Martin Mraz</a>
          <a className="link link-hover" href="./">Ibrahim Kuray</a>
        </nav>
        <nav>
          <header className="footer-title">AI Prompters Team</header>
          <a className="link link-hover" href="./">Chris Vogel</a>
          <a className="link link-hover" href="./">David Zimmerli</a>
          <a className="link link-hover"href="./">Joel Zimmerli</a>
        </nav>
        <nav>
          <header className="footer-title">Created 2023</header>
          <a className="link link-hover" href="https://www.baselhack.ch/">
            BaselHack
          </a>
          <a className="link link-hover" href="./">Project Idea of Roland Brand</a>
          <a
            className="link link-hover"
            href="https://github.com/zimmj/certifever-front-end"
          >
            GitHub Reposotory
          </a>
        </nav>
      </footer>
    </body>
  );
};

export default App;
