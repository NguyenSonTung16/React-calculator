import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// Tạo một "root", là nơi ứng dụng React sẽ được gắn vào trong file public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//Hiển thị component App vào trong root
root.render(<App />);
