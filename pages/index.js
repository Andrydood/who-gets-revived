import React, { useState } from 'react';

const Index = () => {
  const names = ['andrydood', 'jadamog', 'rukoo', 'fattytuna'];
  const [name, setName] = useState(null);

  const rollTheDice = () => {
    const randomNumber = Math.floor(Math.random()*4);
    const selectedName = names[randomNumber];
    setName(selectedName);
  }


  return(
    <div>
      <h1>Who Gets Revived?</h1>
      <button onClick={rollTheDice}>Click here to find out!</button>
      {name ? <h3>It's {name}!</h3> : null}
    </div>
  );
};

export default Index;