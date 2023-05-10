import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import User from './components/User';
import App from './components/App';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import reportWebVitals from './reportWebVitals';
// import ScoreBoard from './components/ScoreBoard';
// import ScoresOnTheBoard from './data/FakeData.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User />
    <App />
    <SignIn />
    <SignOut />
    {/* <ScoreBoard ScoresOnTheBoard={ScoresOnTheBoard.ScoresOnTheBoard} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
