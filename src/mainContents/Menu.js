import React from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Menu = ()=>{
    const data = useSelector(state=>state.Menu.list);
    const navigate = useNavigate();

    const pc = useMediaQuery({
        query:"(min-Width:950px)"}
     );
    const mainTitle = data.filter(l=>{
        return l.value === 'title';
        
    });
    return(
        <div className={pc? "menu mg10" : "menu mg05"}>
        <span></span>
        <ul>
            {mainTitle.map((l,index)=>{
                return(
                    <li key={index} onClick={()=>{
                        navigate('/menu');
                    }}>
                        <img src={l.img} alt="메뉴 이미지" />
                    </li>
                )
            })}
        </ul>
        </div>
    )
}
export default Menu;