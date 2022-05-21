
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InteractionContainer from './components/interactionPage/InteractionContainer';
import WelcomeContainer from './components/welcomePage/WelcomeContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeContainer />} />
          <Route path="ai" element={<InteractionContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
