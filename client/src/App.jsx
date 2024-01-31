import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/HomePage";
import NetworkPage from "./pages/NetworkPage";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/NotFoundPage";

export default function App() {

  return (
    <> 
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/networkPage" element={<NetworkPage />} />

      {/* When page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}