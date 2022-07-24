import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import EventImg from '../img/Event/event.png';

const Event = ()=>{
    const isPc = useMediaQuery({
        query:"(min-Width:950px)"}
     );
     const navigate = useNavigate();
    return(
        <div className={isPc ? "event mg10" : "event mg05"} onClick={()=>{
            navigate('/event/0');
        }}>
            <img src={EventImg} alt="이벤트 이미지" />
            <p className="more">Learn More</p>
        </div>
    )
}
export default Event;