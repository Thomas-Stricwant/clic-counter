import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
     <p> Vous avez cliqué {counter} fois</p>
      <button onClick={onIncrement}>
        Incrémenter
      </button>
      <button onClick={onDecrement}>
         Décrémenter
      </button>
    </div>
  );
};

export default Home;
