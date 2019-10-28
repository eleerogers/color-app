import React from 'react';
import Palette from './Palette';
import SeedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette palette={SeedColors[4]} />
    </div>
  );
}

export default App;
