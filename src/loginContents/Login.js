import React from "react";
import { useMediaQuery } from 'react-responsive';
import Header from '../Mobile_Header';
import logo from '../img/Logo.png';
import kakao from '../img/Icon/kakao.png';
import naver from '../img/Icon/naver.png';
import google from '../img/Icon/google.png';

const Login = ()=>{
    const pc = useMediaQuery({
        query:"(min-Width:950px)"}
     );
    return(
        <div className="main">
         <Header/>
        <div className={pc? "login":"login_M"}>
            <div className={pc?"login_img":"login_img_M"}>
              <p><img src={logo} alt="로고 이미지"/></p> 
            </div>
            <div className={pc?"main_login":"main_login_M"}>
                <form className="login_form">
                    <p className="id"><input type="text" name="login" placeholder="아이디"/></p>
                    <p className="pw"><input type="password" name="login" placeholder="비밀번호"/></p>
                    <span className="login_subText"><span>아이디 찾기</span>|<span>비밀번호 찾기</span></span>
                    <p className="loginBtn"><button type="submit">로그인</button></p>
                </form>
             <div className="join">
             <span className="login_subText">아직 회원이 아니세요?</span>
                <p className="kakao icon"><img src={kakao} alt="카카오아이콘" />카카오톡으로 시작하기</p>
                <p className="naver icon"><img src={naver} alt="네이버아이콘" />네이버로 시작하기</p>
                <p className="google icon"><img src={google} alt="구글아이콘" />구글로 시작하기</p>
                <span className="login_subText"><span className="line"></span>또는<span className="line"></span></span>
                <p className="email">이메일로 시작하기</p>
             </div>   
            </div>
        </div>
        </div>
    )
}
export default Login;