import '../style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlappyScoreBoardList from './flappyScoreBoardList';
import RunScoreBoardList from './runScoreBoardList';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <br />
        <Routes>
          <Route path="/scoreboard/flappy" Component={FlappyScoreBoardList} />
          <Route path="/scoreboard/run" Component={RunScoreBoardList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
