import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Shop from './pages/Shop';
function App() {
  return (
    /**Router wrap all app! it means it is available for whole of application. please let index simple! do not add route to index, please!!! */
    /**Router component is similar to Router hardware in TCP/IP network , having one dosent mean it work , you shall configure it */
    /**equivalent for Routing Table in Router is Routes in React, also having empty Routing table dont do anything , have empty Routes component do not works! */
    <Router>
      <Routes>
          <Route path="/" element={<Navigate replace to="/login"/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </Router>
  );
}

export default App;
