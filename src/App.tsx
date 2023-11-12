import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Loading from './components/Loading';

// 專放路徑
function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  
    const handlLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
  
    window.addEventListener('load', handlLoading);
  
    return () => {
      window.removeEventListener('load', handlLoading);
    };
  }, []);
  
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
    {isLoading && <Loading/>}
  </>
  );
}

export default App;
