import React from "react";
import { useMediaQuery } from 'react-responsive';

const Salad = (props)=>{
    const pc = useMediaQuery({
        query:"(min-Width:1080px)"}
     );
    return(
        <dl className={pc ? "menu_items_pc":"menu_items_M"}>
            <dt className={pc ? "menu_pic_pc" : "menu_pic_M"}><img src={props.salad.img} alt={"웜볼 메뉴 0"+ props.salad.id} /></dt>
            <dd className={pc? "menu_text_pc" : "menu_text_M"}>
                <p className="menu_title">{props.salad.title}</p>
                <p className="menu_subText">{props.salad.subTitle}</p>
            </dd>
        </dl>
    );
};

export default Salad;