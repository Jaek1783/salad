import React from "react";
import Info from "./Informations";
import Header from '../Mobile_Header';
import { useSelector,useDispatch } from "react-redux";
import { createMenu, filterMenu } from "../Redux/Menu";
import styled from "styled-components";


const Menu_Page = ()=> {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.Menu.title);
    const menu = useSelector(state=>state.Menu.menu);
    const informations = [
        {id:1, title:'균형', content01:'샐러드 브라더스는 3대 영양소인 탄수화물, 단백질, 지방의 적절한 분배와 균형을 추구합니다.',
        content02:'개개인의 식습관에 따라 탄수화물, 단백질, 지방간의 구성 비율이 다양한 샐러디의 메뉴들을 선택할 수 있습니다.'},
        {id:2, title:'더하기', content01:'일반적인 식습관을 가지고 있는 대부분의 사람들은 비타민, 무기질, 식이섬유 섭취가 부족합니다.',
        content02:'샐러드 브라더스는 다양한 종류의 채소와 토핑들로 평소 섭취가 부족한 영양소들을 더하는데 도움을 줍니다.'},
        {id:3, title:'빼기', content01:'대부분의 성인은 세 가지 영양소를 권장량에 비해 더 많이 섭취하고 있습니다.',
        content02:'기존 메뉴에서 빼야 할 영양소는 줄여가고, 맛과 품질을 유지하는 선에서 레시피 개선에 대한 연구를 지속하고 있습니다.'}
    ];

    const renderInformations = informations.map(info=>{
        return(
            <Info info={info} key={info.title} />
        );
    });
    return(
        <div className="main">
          <Header/>
            {renderInformations}
            <InputStyle>
              <input type="text" placeholder="메뉴 이름을 검색해 보세요"/>
              <input type="submit" value="검색"/>
            </InputStyle>
            <SubMenu>
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
            <div>
                {data.map((menu,index)=>{
                    return(
                        <Container key={index} menu={menu}>
                            <dl>
                                <dt><img src={menu.img} alt={'메뉴이미지0'+menu.id} /></dt>
                                <dd> 
                                    <p>{menu.title}</p>
                                    <p>{menu.subTitle}</p>
                                </dd>
                            </dl>
                        </Container>
                    )
                })}
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
        width:20%;
        height:2rem;
        border:3px solid #0d633d;
        padding:.5rem;
    }
    input[type=submit]{
        padding:.5rem;
        margin-left:1rem;
        background-color:#0d633d;
        color:#fff;
        border:3px solid #0d633d;
    }
`;
const SubMenu = styled.ul`
    width:50%;
    margin:0 auto;
    display:flex;
    justify-content:center;
    padding:1rem;
    li{
        padding:0 3rem;
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
        display:flex;
        align-items:center;
        justify-content:${props => props.menu.value === 'title' ? "center":""};
        padding:.5rem;
        border:${props => props.menu.value === 'title' ? "none":"3px solid #0d633d"};
        margin-bottom:.3rem;
    }

    dt{
        width:${props => props.menu.value === 'title' ? "10rem":"8rem"};
        padding:${props => props.menu.value === 'title' ? "3rem":"0"};


    }
    dd{
        font-size : ${props => props.menu.value === 'title' ? "1.3rem":"1rem"};
        font-weight : ${props => props.menu.value === 'title' ? "bold":"400"};
    }
`;