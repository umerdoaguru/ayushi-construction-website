import React from "react";
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

import Footer_comp from "./components/Footer_comp";


import About from "./pages/About";
import Heros from "./components/Heros";

import CompleteProject from "./components/CompleteProject";

import ContactForm from "./pages/ContactForm";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import Cards from "./components/gallery/Cards";

import Blog1 from "./components/blog/subpageblog/Blog1";
import Blog2 from "./components/blog/subpageblog/Blog2";
import Blog3 from "./components/blog/subpageblog/Blog3";
import Blog4 from "./components/blog/subpageblog/Blog4";
import Blog5 from "./components/blog/subpageblog/Blog5";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import { useSelector } from "react-redux";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminResetPassword from "./pages/AdminResetPassword";
import Ayushi_Dhara from "./components/OurProject/Ayushi_Dhara_Project";
import Ayushi_Home from "./components/OurProject/Ayushi_Home";
import Ayushi_Villa from "./components/OurProject/Ayushi_Villa";
import Ayushi_Hari_Vihar from "./components/OurProject/Ayushi_Hari_Vihar";
import Ayushi_Vrindavan from "./components/OurProject/Ayushi_Vrindavan";
import Ayushi_Palm_Green from "./components/OurProject/Ayushi_Palm_Green";
import Rudraksh_Park from "./components/OurProject/Rudraksh_Park";

function App() {
  const user = useSelector(state => state.auth.user);
  return (
    <>
    <div className="" style={{overflow:"hidden"}}>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/adminumerdoaguru" element={<Registration />} />
        <Route path="/useronerealtydata" element={user? <AdminDashboard />:<Login/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
          <Route path="/hero" element={<Heros />} />
         
          <Route path="/completeProject" element={<CompleteProject />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/ayushi-dhara" element={<Ayushi_Dhara />} />
          <Route path="/ayushi-home" element={<Ayushi_Home/>} />
          <Route path="/ayushi-villa" element={<Ayushi_Villa/>} />
          <Route path="/ayushi-hari-vihar" element={<Ayushi_Hari_Vihar/>} />
          <Route path="/ayushi-vrindavan" element={<Ayushi_Vrindavan/>} />
          <Route path="/ayushi-palm-green" element={<Ayushi_Palm_Green/>} />
          <Route path="/ayushi-rudraksh-park" element={<Rudraksh_Park/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        
          <Route path="/blog1" element={<Blog1/>} />
          <Route path="/blog2" element={<Blog2/>} />
          <Route path="/blog3" element={<Blog3/>} />
          <Route path="/blog4" element={<Blog4/>} />
          <Route path="/blog5" element={<Blog5/>} />
        <Route path="/admin-reset-password" element={<AdminResetPassword />} />

      </Routes>
      <Footer_comp/>
      </div>
    </>
  );
}

export default App;
