import React from "react";
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './loginContents/Login';
import Brand from './brandContents/Brand';
import Main from './mainContents/Main';
import Menu_Page from "./menuContents/MenuPage";
import Event_Page from "./eventContens/Event_page";
import Real from "./realContents/Real";

function App() {
 let content = null;
  return (
    <>
    <Header/>
    <div>{content=null? <Main/>:''}</div>
      <Routes>
      <Route path="/brand" element={<Brand/>} />
      <Route path="/menu" element={<Menu_Page/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/event" element={<Event_Page/>}/>
      <Route path="/real" element={<Real/>}/>
      <Route path="/salad" element={<Main/>}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
