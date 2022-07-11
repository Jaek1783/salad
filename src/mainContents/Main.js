import React from "react";
import Slide from './Slider';
import Menu from './Menu';
import Event from './Event';
import Header from '../Mobile_Header';

const Main = ()=> {
    return(
        <div className="main">
         <Header/>
         <Slide/>
         <Menu/>
         <Event/>
        </div>
    );
};

export default Main;