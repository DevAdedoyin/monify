import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        {/* <Routes>
          <Route path="/" element={<Sidebar />} />
        </Routes> */}
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
