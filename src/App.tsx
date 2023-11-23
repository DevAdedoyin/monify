import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/monify/" element={<Dashboard />} />
          <Route path="" element={<Dashboard />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
