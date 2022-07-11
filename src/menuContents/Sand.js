import React from "react";
import { useMediaQuery } from 'react-responsive';

const Sand = (props)=>{
    const pc = useMediaQuery({
        query:"(min-Width:1080px)"}
     );
    return(
        <dl className={pc ? "menu_items_pc":"menu_items_M"}>
            <dt className={pc ? "menu_pic_pc" : "menu_pic_M"}><img src={props.sand.img} alt={"웜볼 메뉴 0"+ props.sand.id} /></dt>
            <dd className={pc? "menu_text_pc" : "menu_text_M"}>
                <p className="menu_title">{props.sand.title}</p>
                <p className="menu_subText">{props.sand.subTitle}</p>
            </dd>
        </dl>
    );
};

export default Sand;