import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Studentlist from './page/Student-managament';
import reportWebvitals from './reportWebvitals';
import reactDom from 'react-dom';



const root = ReactDOMom.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Studentlist/>
</React.StrictMode>
);

reportWebvitals();