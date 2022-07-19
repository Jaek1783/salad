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

const initState = {
    list:[
        {id:1, title:'웜볼', img:menu01, value : 'title'},
        {id:1, img:pic01, title:'칠리베이컨 CHILLI BACON', subTitle:'베이컨, 에그, 옥수수, 양파플레이크 *크리미칠리', value : 'desc' },
        {id:1, img:pic02, title:'우삼겹 BEEF LOIN', subTitle:'우삼겹, 양파, 견과류 *오리엔탈', value : 'desc' },
        {id:1, img:pic03, title:'팔라펠단호박 FALAFEL SWEET PUMPKIN', subTitle:'팔라펠,단호박,칙피,양파,옥수수 *크리미할라피뇨', value : 'desc' },
        {id:1, img:pic04,title:'고추장머쉬룸 GOCHUJANG MUSHROOM', subTitle:'머쉬룸,두부,두부크럼블,양파,옥수수 *고추장비니거', value : 'desc' },
        {id:1, img:pic05, title:'할라피뇨치킨 JALAPENO CHICKEN', subTitle:'치킨, 할라피뇨, 칠리빈, 옥수수, 양파, 사워크림, *크리미칠리', value : 'desc' },
        {id:2, title:'샐러드', img:menu02 , value : 'title'},
        {id:2, img:pic06, title:'시저치킨 CAESAR CHICKEN', subTitle:'치킨, 크랜베리 *시저', value : 'desc'},
        {id:2, img:pic07, title:'탄단지 TANDANJI', subTitle:'치킨, 스윗포테이토, 견과류, 크랜베리 *오리엔탈저', value : 'desc'},
        {id:2, img:pic08, title:'콥 COBB', subTitle:'베이컨, 에그, 옥수수, 올리브, 양파 *시저', value : 'desc'},
        {id:2, img:pic09, title:'리코타치즈 RICOTTA CHEESE', subTitle:'리코타치즈, 크랜베리, 견과류, 통밀빵 *발사믹', value : 'desc'},
        {id:2, img:pic10, title:'연어 SALMON', subTitle:'연어, 스윗포테이토, 양파 *레몬', value : 'desc'},
        {id:2, img:pic11, title:'우삼겹메밀면 BEEF LOIN BUCKWHEAT NOODLES', subTitle:'우삼겹,메밀면,오이,양파,견과류 *오리엔탈', value : 'desc'},
        {id:3, title:'샌드', img:menu03 , value : 'title'},
        {id:3, img:pic12, title:'치킨토마토 CHICKEN TOMATO', subTitle:'치킨, 토마토, *시저, 크림치즈, 채소, 곡물빵', value : 'desc'},
        {id:3, img:pic13, title:'우삼겹 BEEF LOIN', subTitle:'에그, 베이컨, *허니머스타드, 크림치즈, 채소, 곡물빵', value : 'desc'},
        {id:3, img:pic14, title:'크리미연어 CREAMY SALMON', subTitle:'연어, 양파, 크리미할라피뇨 드레싱, 크림치즈, 채소, 곡물빵', value : 'desc'},
        {id:4, title:'랩', img:menu04 , value : 'title'},
        {id:4, img:pic15, title:'멕시칸 MEXICAN', subTitle:'그라운드비프, 또띠아칩, *크리미칠리, 사워크림, 채소, 또띠아', value : 'desc'},
        {id:4, img:pic16, title:'시저치킨 CAESAR CHICKEN', subTitle:'치킨, 크랜베리, *시저, 채소, 또띠아', value : 'desc'},
        {id:4, img:pic17, title:'크랜베리그릭 CRANBERRY GREEK', subTitle:'크랜베리, 올리브, 토마토, 견과류, 크림치즈, *시저, 채소, 또띠아', value : 'desc'},
        {id:4, img:pic18, title:'크리미연어 CREAMY SALMON', subTitle:'연어, 토마토, 양파, 크리미할라피뇨 드레싱, 채소, 또띠아', value : 'desc'}
    ],
    menu:[
        {id:0, title:'전체보기'},
        {id:1, title:'웜볼'},
        {id:2, title:'샐러드'},
        {id:3, title:'샌드'},
        {id:4, title:'랩'},
    ],
    title:[]
}

const CREATE = "menu/CREATE";
const FILTER = "menu/FILTER";

export const createMenu = (menu)=>{
    return{type:CREATE, menu}
};
export const filterMenu = (index) =>{
    return{type:FILTER, index};
}

export default function reducer(state = initState, action = {}){
    switch (action.type){
        case "menu/CREATE":
            const initList = [...state.list];
            console.log(initList);
            return {list:initList};
        case "menu/FILTER":

            if(action.index > 0){
                const filter_menu_list = state.list.filter((l,idx)=>{
                    return action.index == state.list[idx].id ;
                    
                });
                const title = [...filter_menu_list];
                const list = [...state.list];
                const menu = [...state.menu];
                return {title:title, menu:menu, list:list};
                // return state;
            }
            else{
                const filter_menu_list = state.list;
                const list = [...state.list];
                const title = [...filter_menu_list];
                const menu = [...state.menu];
                return {title:title, menu:menu, list:list};
            }
        default:
            return state;
    }
}