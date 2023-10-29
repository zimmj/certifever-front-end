import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import baselhack from './assests/images/logohack.png';
import certifever from './assests/images/certifever.svg';
import './App.css';
import { QuizzMaster } from './component/quizz-master';


const App: React.FunctionComponent = () => {
 
  return (
<body data-theme="cmyk" className="  ">
      <header className="bg-neutral flex justify-between w-full h-32 p-2">

      <div className=''>
        <a className="link link-hover" href="./">
           <img src={certifever} alt="Logo Certifever" className='h-full' />
        </a>
      </div>

        <div className='uppercase font-bolid text-white align-middle text-3xl place-self-center w-full'>
           Certifever  for ever
        </div>
        <div className=''>
          <a className="link link-hover" href="https://www.baselhack.ch/" target="_blank" rel="noreferrer">
            <img src={baselhack} alt="HackBasel" className="h-full float-right " />
          </a>
        </div>

      </header>
      <div className="bg-slate-200 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">


        <main className=" md:w-2/3 lg:w-3/4 px-5 py-20">
          <QuizzMaster></QuizzMaster>

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
          <a className="link link-hover" href="https://www.baselhack.ch/" target="_blank" rel="noreferrer">
            BaselHack
          </a>
          <a className="link link-hover" href="./">Project Idea of Roland Brand</a>
          <a
            className="link link-hover" target="_blank" rel="noreferrer"
            href="https://github.com/zimmj/certifever-ai-prompt"
          >
            GitHub Reposotory
          </a>
        </nav>
      </footer>
    </body>
  );
};

export default App;
