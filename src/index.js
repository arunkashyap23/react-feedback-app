import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import App from './App'

const myElement =    <React.StrictMode>
                        <App />
                      </React.StrictMode>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(myElement);