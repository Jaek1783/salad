import React from "react";
import { useMediaQuery } from 'react-responsive';

const Info = (props)=>{
    const pc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );
    return(
        <dl className={pc ? "text04Box_pc" : "text04Box_M"}>
            <dt className="menu_title">{props.info.title}</dt>
            <dd>
                <p>{props.info.content01}</p>
                <p>{props.info.content02}</p>
            </dd>
        </dl>
    );
};
export default Info;