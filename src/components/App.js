import '../style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScoreBoardList from './scoreBoardList';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <br />
        <Routes>
          <Route path="/scoreboard" Component={ScoreBoardList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
