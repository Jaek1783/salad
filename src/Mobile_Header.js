import React from "react";
import {Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import hamgurgerBtn from './img/Icon/close.png';

const Mobile_Header = ()=>{
    const hamburgerClose = ()=>{
        const hamburger_Close = document.querySelector('.hamburger');
        hamburger_Close.style.right='-100vw';
    }
    const mobile = useMediaQuery({
        query:"(max-Width:949px)"}
     );
    return(
        <>
        {mobile && 
            <div className="hamburger">
                <div className="hamburger_btn" onClick={()=>{
                    hamburgerClose();
                }}><img src={hamgurgerBtn} alt="햄버거버튼"/></div>
                <nav className="nav_949px">
                    <ul className="nav_ul_949px">
                        <li><Link to="/brand">브랜드</Link></li>
                        <li><Link to="/menu">메뉴</Link></li>
                        <li><Link to="/event/0">이벤트</Link></li>
                        <li><Link to="/real/0">후기</Link></li>
                    </ul>
                </nav>
            </div>
        }
        </>
    );
};
export default Mobile_Header;