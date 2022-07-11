import React from "react";
import Header from '../Mobile_Header';
import logo from '../img/Logo.png';
import { useMediaQuery } from 'react-responsive';
const Brand = ()=>{
    const pc = useMediaQuery({
        query:"(min-Width:1280px)"}
     );
    return(
        <div className="main">
            <Header/>
            <div className={pc ? "Brand" : "Brand_M"}>
                <div className={pc?"BrandImg width50":"BrandImg_M width100"}>
                    <p><img src={logo} alt="로고 이미지" /></p> 
                </div>
                <div className={pc?"width50":"width100"}>
                    <dl className={pc ? "brandTextBox":"brandTextBox_M"}>
                        <dt><img src={logo} alt="브랜드이미지" />란?</dt>
                        <dd>기본적으로 <strong>'샐러드'</strong>하면 무엇이 떠오르시나요?<br/>
                            다이어트를 위해 다이어트를 위한 오직 다이어트하는 사람 만 먹는<br/>
                            <strong>맛없는 음식</strong>이라고 생각하시지는 않으셨나요?</dd>
                        <dd>당일 아침 배송되는 유기농 채소<br/>
                            직접 만들어 사용하는 핸드메이드 소스<br/>
                            가볍지만 든든한, 많이먹어도 편안한<br/>
                            <strong>맛과 건강을 한번에 느낄 수 있는 고급 샐러드를 선보입니다.</strong></dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
export default Brand;