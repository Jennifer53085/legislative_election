import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Loading";

// 專放路徑
function App() {
  const [isLoading, setLoading] = useState(false);
  const [styled, setStyled] = useState({ opacity: 1 });


  useEffect(() => {
    setLoading(true);

    const handlLoading = () => {
      setTimeout(() => {
        setStyled({ opacity: 0 });
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }, 1500);
    };
    window.addEventListener("load", handlLoading);

    return () => {
      window.removeEventListener("load", handlLoading);
    };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      {isLoading && <Loading styled={styled} />}
      </Router>
    </>
  );
}

export default App;
