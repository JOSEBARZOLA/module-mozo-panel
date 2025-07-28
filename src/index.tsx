import React from 'react';
import ReactDOM from 'react-dom/client';
import MozoPanel from './components/mozoPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<MozoPanel />);
