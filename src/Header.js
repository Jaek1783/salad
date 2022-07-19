import React from "react";
import {Link } from 'react-router-dom';
import Logo from "./img/Logo.png";
import { useMediaQuery } from 'react-responsive';

import hamgurgerBtn from './img/Icon/menu.png';


const Header = (props)=>{
    const pc = useMediaQuery({
       query:"(min-Width:950px)"}
    );
    const mobile = useMediaQuery({
       query:"(max-Width:949px)"}
    );
    const hamburgerOpen = ()=>{
        const hamburger_Open = document.querySelector('.hamburger');
        hamburger_Open.style.right='0';
    }
    return(
        // 헤더 디자인
        // 왼쪽 상단 로고 + 반응형 미디어 퀴리로 950px이상 PC화면과 950px이하 모바일 화면으로 나눠 디자인하였다.
        <header>
         <h1><Link to="/salad"><img src={Logo} alt="로고 이미지" /></Link></h1>
    {pc && 
            <nav className="nav">
                <ul className="nav_ul">
                    <li><Link to="/brand">브랜드</Link></li>
                    <li><Link to="/menu">메뉴</Link></li>
                    <li><Link to="/event/0">이벤트</Link></li>
                    <li><Link to="/real/0">후기</Link></li>
                </ul>
                <div className="login_text"><Link to="/login">로그인</Link></div>
            </nav>
    }
    {/* 모바일 헤더 스타일 / 949px 이하로 떨어졌을 때 nav */}
    {mobile && 
        <div className="hamburger_box">
                <div className="hamburger_btn" onClick={()=>{
                    hamburgerOpen();
                }}> <img src={hamgurgerBtn} alt="햄버거버튼"/></div>
        </div>
    }
        </header>
    );
}

export default Header;