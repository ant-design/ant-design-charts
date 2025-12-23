import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExampleList } from './pages';
import { DemoBulletLegend } from './pages/bullet-legend';
import { ChangeData } from './pages/change-data';
import { DemoRadar } from './pages/radar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExampleList />} />
      <Route path="/radar" element={<DemoRadar />} />
      <Route path="/bullet-legend" element={<DemoBulletLegend />} />
      <Route path="/change-data" element={<ChangeData />} />
    </Routes>
  );
}

export default App;
