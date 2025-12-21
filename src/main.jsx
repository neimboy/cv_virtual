import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="cv-container">
      <header className="cv-header">
      </header>

      <main className="cv-main">
        <App />
      </main>

      <footer className="cv-footer">
        <p>© {new Date().getFullYear()} Harold | CV Virtual</p>
      </footer>
    </div>
  </React.StrictMode>
);
