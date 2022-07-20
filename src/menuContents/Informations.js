import React from "react";
import { useMediaQuery } from 'react-responsive';
import { useSelector } from "react-redux";
const Info = (props)=>{
    const pc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );
     const info = useSelector(state=>state.Menu.info);
    return(
        <>
        {info.map(list=>{
            return(
                <dl className={pc ? "text04Box_pc" : "text04Box_M"} key={list.id}>
                    <dt className="menu_title">{list.title}</dt>
                    <dd>
                        <p>{list.content01}</p>
                        <p>{list.content02}</p>
                    </dd>
                </dl>
            )
        })}
        </>
    );
};
export default Info;