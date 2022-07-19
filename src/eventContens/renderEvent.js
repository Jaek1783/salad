import React from "react";
import { useMediaQuery } from 'react-responsive';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const RenderEvents = ()=>{
    const pc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );
     const data = useSelector(state=>state.Event.list);
     const navigate = useNavigate();
    return(
        <>
        {data.map((event,index)=>{
            return(
                <div className={pc?"render_event":"render_event_M"} key={event.id}  onClick={()=>{
                    navigate('/event/'+(index+1));
                }}>
                <div className={pc?"event_img":"event_img_M"}><img src={event.img} alt={"이벤트이미지0"+ event.id} /></div>
                <div className={pc?"event_title":"event_title_M"}>{event.title}</div>
                <div className={pc?"event_date":"event_date_M"}>{event.date}</div>
            </div>
            )
        })}
       
        </>
    )
};

export default RenderEvents;