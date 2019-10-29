import React from 'react';
import Palette from './Palette';
import SeedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette {...SeedColors[5]} />
    </div>
  );
}

export default App;
