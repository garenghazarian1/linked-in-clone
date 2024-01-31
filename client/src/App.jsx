import './App.css'
import LeftBar from './components/LeftBar';
import Navbar from './components/Navbar';
import RightBar from './components/RightBar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router,  Route } from'react-router-dom';


function App() {

  return (
    <>
    <Navbar />
    <LeftBar />
    <RightBar />
    <ProfilePage />
    <HomePage/>
     
    
    </>
  )
}

export default App
