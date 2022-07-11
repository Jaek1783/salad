import React from "react";
import WarmBowl from "./WarmBowl";
import Salad from './Salad';
import Sand from './Sand';
import Lab from "./Lab";
import Menus from './Menus';
import Info from "./Informations";
import Header from '../Mobile_Header';

import menu01 from '../img/Menu/pic01.png';
import menu02 from '../img/Menu/pic02.png';
import menu03 from '../img/Menu/pic03.png';
import menu04 from '../img/Menu/pic04.png';

import pic01 from '../img/Menu/menu01/pic01.png';
import pic02 from '../img/Menu/menu01/pic02.png';
import pic03 from '../img/Menu/menu01/pic03.png';
import pic04 from '../img/Menu/menu01/pic04.png';
import pic05 from '../img/Menu/menu01/pic05.png';
import pic06 from '../img/Menu/menu02/pic01.png';
import pic07 from '../img/Menu/menu02/pic02.png';
import pic08 from '../img/Menu/menu02/pic03.png';
import pic09 from '../img/Menu/menu02/pic04.png';
import pic10 from '../img/Menu/menu02/pic05.png';
import pic11 from '../img/Menu/menu02/pic06.png';
import pic12 from '../img/Menu/menu03/pic01.png';
import pic13 from '../img/Menu/menu03/pic02.png';
import pic14 from '../img/Menu/menu03/pic03.png';
import pic15 from '../img/Menu/menu04/pic01.png';
import pic16 from '../img/Menu/menu04/pic02.png';
import pic17 from '../img/Menu/menu04/pic03.png';
import pic18 from '../img/Menu/menu04/pic04.png';


const Menu_Page = ()=> {

    const warmBowls = [
        {id:1, img:pic01, title:'칠리베이컨 CHILLI BACON', subTitle:'베이컨, 에그, 옥수수, 양파플레이크 *크리미칠리' },
        {id:2, img:pic02, title:'우삼겹 BEEF LOIN', subTitle:'우삼겹, 양파, 견과류 *오리엔탈' },
        {id:3, img:pic03, title:'팔라펠단호박 FALAFEL SWEET PUMPKIN', subTitle:'팔라펠,단호박,칙피,양파,옥수수 *크리미할라피뇨' },
        {id:4, img:pic04,title:'고추장머쉬룸 GOCHUJANG MUSHROOM', subTitle:'머쉬룸,두부,두부크럼블,양파,옥수수 *고추장비니거' },
        {id:5, img:pic05, title:'할라피뇨치킨 JALAPENO CHICKEN', subTitle:'치킨, 할라피뇨, 칠리빈, 옥수수, 양파, 사워크림, *크리미칠리' }
    ];
    const renderWarmBowls = warmBowls.map(warmbowl=>{
        return(
            <WarmBowl warmbowl={warmbowl} key={warmbowl.title}/>
        );
    });
    const salads = [
        {id:1, img:pic06, title:'시저치킨 CAESAR CHICKEN', subTitle:'치킨, 크랜베리 *시저'},
        {id:2, img:pic07, title:'탄단지 TANDANJI', subTitle:'치킨, 스윗포테이토, 견과류, 크랜베리 *오리엔탈저'},
        {id:3, img:pic08, title:'콥 COBB', subTitle:'베이컨, 에그, 옥수수, 올리브, 양파 *시저'},
        {id:4, img:pic09, title:'리코타치즈 RICOTTA CHEESE', subTitle:'리코타치즈, 크랜베리, 견과류, 통밀빵 *발사믹'},
        {id:5, img:pic10, title:'연어 SALMON', subTitle:'연어, 스윗포테이토, 양파 *레몬'},
        {id:6, img:pic11, title:'우삼겹메밀면 BEEF LOIN BUCKWHEAT NOODLES', subTitle:'우삼겹,메밀면,오이,양파,견과류 *오리엔탈'}
    ];
    const renderSalads = salads.map(salad=>{
        return(
            <Salad salad={salad} key={salad.title}/>
        );
    });
    const sands = [
        {id:1, img:pic12, title:'치킨토마토 CHICKEN TOMATO', subTitle:'치킨, 토마토, *시저, 크림치즈, 채소, 곡물빵'},
        {id:2, img:pic13, title:'우삼겹 BEEF LOIN', subTitle:'에그, 베이컨, *허니머스타드, 크림치즈, 채소, 곡물빵'},
        {id:3, img:pic14, title:'크리미연어 CREAMY SALMON', subTitle:'연어, 양파, 크리미할라피뇨 드레싱, 크림치즈, 채소, 곡물빵'}
    ];
    const renderSands = sands.map(sand=>{
        return(
            <Sand sand={sand} key={sand.title}/>
        );
    });
    const labs = [
        {id:1, img:pic15, title:'멕시칸 MEXICAN', subTitle:'그라운드비프, 또띠아칩, *크리미칠리, 사워크림, 채소, 또띠아'},
        {id:2, img:pic16, title:'시저치킨 CAESAR CHICKEN', subTitle:'치킨, 크랜베리, *시저, 채소, 또띠아'},
        {id:3, img:pic17, title:'크랜베리그릭 CRANBERRY GREEK', subTitle:'크랜베리, 올리브, 토마토, 견과류, 크림치즈, *시저, 채소, 또띠아'},
        {id:3, img:pic18, title:'크리미연어 CREAMY SALMON', subTitle:'연어, 토마토, 양파, 크리미할라피뇨 드레싱, 채소, 또띠아'}
    ];
    const renderLabs = labs.map(lab=>{
        return(
            <Lab lab={lab} key={lab.title}/>
        );
    });    
    const menus = [
        {id:1, title:'웜볼', img:menu01, content:renderWarmBowls},
        {id:2, title:'샐러드', img:menu02, content:renderSalads},
        {id:3, title:'샌드', img:menu03, content:renderSands},
        {id:4, title:'랩', img:menu04, content:renderLabs}
    ];
    const renderMenus = menus.map(menu=>{
        return(
            <Menus menu={menu} key={menu.img}/>
        );
    });
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
            <div className="mainMenu">
                {renderMenus}
            </div>
        </div>
    );
};

export default Menu_Page;