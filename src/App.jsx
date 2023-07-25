import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";

const App = () => {
  const ROUTE_HOME = "/";

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path="*" element={<Navigate to={ROUTE_HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
