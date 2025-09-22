import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ShopPage from "./pages/ShopPage"
import ContactPage from "./pages/ContactPage"
import DashbordPage from "./pages/DashbordPage";
 
 


function App() {
  return (
<Router>
  <Routes>
    <Route path="/"   element={<Navigate replace to="/login"/>}/>
    <Route path="/login"   element={<LoginPage/>}/>
    <Route path="/register"   element={<RegisterPage/>}/>
    <Route path="/shop"   element={<ShopPage/>}/>
    <Route path="/contact"   element={<ContactPage/>}/>
    <Route path="/dashbord"   element={<DashbordPage/>}/>

  </Routes>
</Router>
  );
}

export default App;
