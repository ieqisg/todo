import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NaviBar from './navibar';
import App from './App';
import Completed from './pages/Completed';
import Deadlines from './pages/Deadlines';

function Main() {
  return (
    <Router>
      <NaviBar />
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/deadlines" element={<Deadlines />} />
      </Routes>
    </Router>
  );
}

export default Main;