import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from "./pages/Home";
import Login from './login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let path;

  if (isLoggedIn) {
    path = <Home setIsLoggedIn={setIsLoggedIn} />;
  } else {
    path = <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={path} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




