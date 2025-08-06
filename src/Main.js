import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NaviBar from './navibar';
import App from './App';
import Completed from './pages/Completed';


function Main() {
  let [completedList, setCompletedList] = useState([]);

  return (
    <Router>
      <NaviBar />
      <Routes>
        <Route path="/" element={<App completedList={completedList} setCompletedList={setCompletedList} />} />
        <Route path="/pages/completed" element={<Completed completedList={completedList} setCompletedList={setCompletedList} />} />
        
      </Routes>
    </Router>
  );
}

export default Main;