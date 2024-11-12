import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import Home from "./pages/Home";
import Login from './login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(""); 

  const handleLogin = (email: SetStateAction<string>) => {
    setUserEmail(email);
    setIsLoggedIn(true);  
  };

  let pathofApp;
  
  if (isLoggedIn) {
    pathofApp = <Home email={userEmail} setIsLoggedIn={setIsLoggedIn} />;
  } else {
    pathofApp = <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={pathofApp} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






