import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Home1, Home2} from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// createRoot(document.getElementById('root')).render(<h1>Hello World</h1>);

// createRoot(document.getElementById('root')).render(<Home1/>);

// createRoot(document.getElementById('root')).render(<Home2 age={21}/>);
