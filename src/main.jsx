import { ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css' 
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>

    <App />
  
  </React.StrictMode>
);