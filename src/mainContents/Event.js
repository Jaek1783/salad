import React from "react";
import { useMediaQuery } from "react-responsive";
import EventImg from '../img/Event/event.png';

const Event = ()=>{
    const pc = useMediaQuery({
        query:"(min-Width:950px)"}
     );
    return(
        <div className={pc ? "event mg10" : "event mg05"}>
            <img src={EventImg} alt="이벤트 이미지" />
            <p className="more">Learn More</p>
        </div>
    )
}
export default Event;