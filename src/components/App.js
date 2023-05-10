import '../style/app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ScoreBoardList from './scoreBoardList';
import Navbar from './Navbar';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="app">
        <Navbar />
        <br />
        <Routes>
          <Route path="/scoreboard" Component={ScoreBoardList} />
        </Routes>
      </div>{' '}
    </Router>
  );
}

export default App;
