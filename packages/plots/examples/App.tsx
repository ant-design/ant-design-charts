import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExampleList } from './pages';
import { DemoRadar } from './pages/radar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExampleList />} />
      <Route path="/radar" element={<DemoRadar />} />
    </Routes>
  );
}

export default App;
