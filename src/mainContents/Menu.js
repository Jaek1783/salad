import React from "react";
import { useMediaQuery } from "react-responsive";
import Pic01 from "../img/Menu/pic01.png";
import Pic02 from "../img/Menu/pic02.png";
import Pic03 from "../img/Menu/pic03.png";
import Pic04 from "../img/Menu/pic04.png";

const Menu = ()=>{
    const pc = useMediaQuery({
        query:"(min-Width:950px)"}
     );
    return(
        <div className={pc? "menu mg10" : "menu mg05"}>
        <span></span>
        <ul>
            <li><img src={Pic01} alt="메뉴 이미지01" /></li>
            <li><img src={Pic02} alt="메뉴 이미지02" /></li>
            <li><img src={Pic03} alt="메뉴 이미지03" /></li>
            <li><img src={Pic04} alt="메뉴 이미지04" /></li>
        </ul>
        </div>
    )
}
export default Menu;