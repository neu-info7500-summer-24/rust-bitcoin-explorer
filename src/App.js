import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import BlockList from './components/BlockList/BlockList';
import TransactionList from './components/TransactionList/TransactionList';
import Charts from './components/Charts/Charts';

function App() {
  console.log("App loaded");
  return (
    // <div>Hello</div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blocks" element={<BlockList />} />
        <Route path="/transactions" element={<TransactionList />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </Router>
  );
}

export default App;

