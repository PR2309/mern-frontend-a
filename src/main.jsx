import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {Home1, Home2} from './App.jsx';
// import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID=import.meta.env.VITE_GAUTH;
console.log(CLIENT_ID);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GoogleOAuthProvider clientId={CLIENT_ID}> */}
      <App />
    {/* </GoogleOAuthProvider> */}
  </StrictMode>
);

// createRoot(document.getElementById('root')).render(<h1>Hello World</h1>);

// createRoot(document.getElementById('root')).render(<Home1/>);

// createRoot(document.getElementById('root')).render(<Home2 age={21}/>);
