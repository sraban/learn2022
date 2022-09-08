import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

import Ticket from './pages/ticket/ticket.js';
import Report from './pages/report/report.js';
import Dashboard from './pages/dashboard/dashboard.js';
import Home from './pages/home/home.js';
import Admin from './pages/admin/admin.js';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}> { /* Layout Page */ }
            <Route index element={<Report />} />
            <Route path="admin" element={<Admin />} />
            <Route path="ticket" element={<Ticket />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;

function NoPage() {
  return (
    <div>
      <h2>404..............</h2>
    </div>
  );
}
