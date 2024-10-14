import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import("./pages/LoginFiles/Login_Page"));
const Register = lazy(() => import('./pages/RegisterFiles/Register_Page'));
const HomePage = lazy(() => import('./pages/HomePageFiles/Home_Page'));
const Navigasi = lazy(() => import("./components/NavigationFiles/NavigationComp"));
const TopUpPage = lazy(() => import('./pages/TopUpFiles/TopUp_Page'));
const DataProfile = lazy(() => import('./components/ProfileFiles/DataProfileComp'));
const ServicePage = lazy(() => import('./pages/ServicePageFiles/Service_Page'));
const TransactionPage = lazy(() => import('./pages/TransactionPageFiles/Transaction_Page'));
const AccountPage = lazy(() => import('./pages/AccountFiles/AccountPage'));


function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<><Navigasi/><DataProfile/><HomePage /></>} />
          <Route path='/topup' element={<><Navigasi/><DataProfile/><TopUpPage /></>} />
          <Route path='/service/:id' element={<><Navigasi/><DataProfile/><ServicePage/></>} />
          <Route path='/transaction' element={<><Navigasi/><DataProfile/><TransactionPage/></>} />
          <Route path='/akun' element={<><Navigasi/><AccountPage/></>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
  );
}

export default App;
