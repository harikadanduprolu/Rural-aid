import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { GetInvolvedPage } from './pages/GetInvolved';
import { AboutPage } from './pages/About';
import { WorkPage } from './pages/Work';
import { BlogPage } from './pages/Blog';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <Router >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/getinvolved" element={<GetInvolvedPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>

);