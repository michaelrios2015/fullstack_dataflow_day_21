// apperently we still need the react
// so this acts as just the root then we start adding react elemnets
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);


// not the way they do it anymore 
// render(<App />, document.querySelector('#root'));