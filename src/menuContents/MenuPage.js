import React,{useRef} from "react";
import Info from "./Informations";
import Header from '../Mobile_Header';
import { useSelector,useDispatch } from "react-redux";
import {filterMenu, searchMenu } from "../Redux/Menu";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';


const Menu_Page = ()=> {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.Menu.title);
    const menu = useSelector(state=>state.Menu.menu);
    const textRef = useRef(null);
    const isPc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );
     const isTablet = useMediaQuery({
        query:"(max-width:1259px)"
     });
     const isMobile = useMediaQuery({
        query:"(max-width:500px)"
     });
    return(
        <div className="main">
          <Header/>
          <Info/>
            <InputStyle isPc = {isPc} isMobile={isMobile}>
              <input type="text" placeholder="재료를 검색해 보세요" ref={textRef}/>
              <input type="submit" value="검색" onClick = {(e)=>{
                e.preventDefault();
                if(textRef.current.value === ''){
                    alert("검색어를 적어주세요");
                }
                else{
                    dispatch(searchMenu(textRef.current.value));
                }
                textRef.current.value = '';
                
              }}/>
            </InputStyle>
            <SubMenu isMobile={isMobile} isTablet={isTablet} isPc={isPc}>
                {menu.map(nav=>{
                    return(
                        <li key={nav.id} onClick={()=>{
                            dispatch(filterMenu(nav.id));
                        }}>
                            {nav.title}
                        </li>
                    )
                })}
            </SubMenu>
            <div className="menu_page">
                {data.length !== 0 ?
                    data.map((menu,index)=>{
                        return(
                            <Container key={index} menu={menu} isPc = {isPc} isMobile={isMobile} isTablet={isTablet}>
                                <dl>
                                    <dt><img src={menu.img} alt={'메뉴이미지0'+menu.id} /></dt>
                                    <dd> 
                                        <p>메뉴 : {menu.title}</p>
                                        <p>주재료 : {menu.subTitle}</p>
                                    </dd>
                                </dl>
                            </Container>
                               )})
                :"메뉴를 검색하거나 메뉴보기를 클릭해 주세요"}
                
            </div>
        </div>
    );
};

export default Menu_Page;

const InputStyle = styled.form`
background-color:#ccc;
text-align:center;
padding:1rem;
margin-top:3rem;
    input[type=text]{
        width:${props => props.isPc ? "20%":"80%"};
        height:2rem;
        border:3px solid #0d633d;
        padding:.5rem;
    }
    input[type=submit]{
        padding:${props => props.isPc ? ".5rem":".5rem 1rem"};
        margin-left:${props => props.isPc ? "2rem": props.isMobile ? "0":"2rem"};
        margin-top:${props => props.isPc ? "0":"1rem"};
        background-color:#0d633d;
        color:#fff;
        border:3px solid #0d633d;
    }
`;
const SubMenu = styled.ul`
    width:${props => props.isPc ? "50%":"80%"};
    margin:0 auto;
    display:flex;
    justify-content:center;
    padding:1rem;
    li{
        padding:${props => props.isMobile ? "0 .4rem":"0 1rem"};
        text-align:center;
        border-right:3px solid #0d633d;
        cursor:pointer;
    }
    li:first-child{
        border-left: 3px solid #0d633d;
    }
    
`;
const Container = styled.div`
    width:80%;
    margin:0 auto;
    dl{
        margin:${props => props.menu.value === 'title' ? "0 auto":"0"};
        display:${props => props.isMobile ?  "block":"flex"};
        align-items:center;
        justify-content:${props => props.menu.value === 'title' ? "center":""};
        padding:.5rem;
        border:${props => props.menu.value === 'title' ? "none":"3px solid #0d633d"};
        margin-bottom:.3rem;
        text-align:${props => props.isMobile ?  "center":"left"};

    dt{
        width:${props => props.menu.value === 'title' ? "10rem":"8rem"};
        margin:${props => props.isMobile ?  "0 auto":"0"};
        padding:${props => props.menu.value === 'title' ? "3rem":"0"};
        img{
            width:${props => props.menu.value === 'title' ? "10rem":"8rem"};
        }

    }
    dd{
        font-size : ${props => props.menu.value === 'title' ? "1.5rem":"1rem"};
        font-weight : ${props => props.menu.value === 'title' ? "bold":"400"};
    }
`;