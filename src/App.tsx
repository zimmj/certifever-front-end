import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <body>
      <header className="bg-neutral">
        <img src={logo} alt="Logo HackBasel" className="App-logo" />
        <h1> Certifever help</h1>
      </header>

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
          <a className="link link-hover">Anurag Grag</a>
          <a className="link link-hover">Liam Hoo</a>
          <a className="link link-hover">Martin Mraz</a>
          <a className="link link-hover">Ibrahim Kuray</a>
        </nav>
        <nav>
          <header className="footer-title">AI Prompters Team</header>
          <a className="link link-hover">Chris Vogel</a>
          <a className="link link-hover">David Zimmerli</a>
          <a className="link link-hover">Joel Zimmerli</a>
        </nav>
        <nav>
          <header className="footer-title">Created 2023</header>
          <a className="link link-hover" href="https://www.baselhack.ch/">
            BaselHack
          </a>
          <a className="link link-hover">Project Idea of Roland Brand</a>
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
