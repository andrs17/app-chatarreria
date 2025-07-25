// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home"; // la vista principal que ya creamos
import Dashboard from "./pages/Dashboard"; // la vista del dashboard
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ventas" element={<Navigate to="/ventas/pet" replace />} />
        
        {/* Agrega más rutas como /clientes, /dashboard, etc. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
