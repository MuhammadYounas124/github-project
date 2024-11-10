import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from "./pages/Home";
import Login from './login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let element;

  if (isLoggedIn) {
    element = <Home setIsLoggedIn={setIsLoggedIn} />;
  } else {
    element = <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={element} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




