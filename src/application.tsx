import { useEvent, useStore } from 'effector-react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './application.css';
import { $counter, buttonClicked } from './model';

export function App() {
  const handleClick = useEvent(buttonClicked);
  const counter = useStore($counter);

  return (
    <div className="App">
      <div>
        <a href="https://effector.dev" target="_blank">
          <img
            src="https://effector.dev/img/comet.png"
            className="logo effector"
            alt="Effector logo"
          />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {counter}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
