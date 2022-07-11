import React from "react";
import { useMediaQuery } from 'react-responsive';

const RenderEvents = (props)=>{
    const pc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );
    return(
        <div className={pc?"render_event":"render_event_M"}>
            <div className={pc?"event_img":"event_img_M"}><img src={props.Event.img} alt={"이벤트이미지0"+ props.Event.id} /></div>
            <div className={pc?"event_title":"event_title_M"}>{props.Event.title}</div>
            <div className={pc?"event_date":"event_date_M"}>{props.Event.date}</div>
        </div>
    )
};

export default RenderEvents;