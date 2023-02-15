import React, { useEffect } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';

const App = () => {
  useEffect(() => {
    const event = new Event('my-event');
    console.log("EVENT", event)
  }, [])

  return (
    <Styled styles={styles}>
      <h1>ASDADSADSADSADSAD</h1>
    </Styled>
  );
};

export default App;
