import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
