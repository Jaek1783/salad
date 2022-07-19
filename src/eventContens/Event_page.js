import React from "react";
import RenderEvents from "./RenderEvent";
import Header from '../Mobile_Header';
const Event_Page = ()=> {            
 
    return(
        
        <div className="main">
            <Header/>
            <RenderEvents/>
        </div>
    );
};

export default Event_Page;