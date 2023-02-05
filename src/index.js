import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.scss';
import { YoutubePlayer } from './views/YoutubePlayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <YoutubePlayer />
)