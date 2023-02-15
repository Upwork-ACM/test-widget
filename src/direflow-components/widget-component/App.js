import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Styled } from 'direflow-component';
import styles from './App.css';

const App = () => {
  useEffect(() => {
    const event = new Event('my-event');
    console.log("EVENT", event)
  })

  return (
    <Styled styles={styles}>
      <h1>ASDADSADSADSADSAD</h1>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Widget Component',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default App;
