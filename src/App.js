import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/LoginFiles/Login_Page";
import Register from './pages/RegisterFiles/Register_Page';
import HomePage from './pages/HomePageFiles/Home_Page';
import Navigasi from "./components/NavigationFiles/NavigationComp";
import TopUpPage from './pages/TopUpFiles/TopUp_Page';
import DataProfile from './components/ProfileFiles/DataProfileComp';
import ServicePage from './pages/ServicePageFiles/Service_Page';
import TransactionPage from './pages/TransactionPageFiles/Transaction_Page';
import AccountPage from './pages/AccountFiles/AccountPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<><Navigasi/><DataProfile/><HomePage /></>} />
        <Route path='/topup' element={<><Navigasi/><DataProfile/><TopUpPage /></>} />
        <Route path='/service/:id' element={<><Navigasi/><DataProfile/><ServicePage/></>}/>
        <Route path='/transaction'element={<><Navigasi/><DataProfile/><TransactionPage/></>}/>
        <Route path='/akun' element={<><Navigasi/><AccountPage/></>}/>
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
  );
}

export default App;
