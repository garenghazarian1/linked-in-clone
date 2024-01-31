import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/HomePage";
import NetworkPage from "./pages/NetworkPage";

export default function App() {

  return (
    <> 
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/networkPage" element={<NetworkPage />} />
    </Routes>
    </>
  )
}
