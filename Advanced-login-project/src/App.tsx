import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";

const App = () => {
  return (
    <>
    <Router>
          <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
        
    </Router>
    </>
  );
}


export default App;


