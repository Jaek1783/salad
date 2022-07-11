import React from "react";
import RenderEvents from "./renderEvent";
import Header from '../Mobile_Header';
import pic01 from '../img/Event/pic01.png';
import pic02 from '../img/Event/pic02.png';
import pic03 from '../img/Event/pic03.png';
import pic04 from '../img/Event/pic04.png';
import pic05 from '../img/Event/pic05.png';
const Event_Page = ()=> {
    const events = [
        {id:1, img:pic01, title:'<EVENT> 샐러디x배민1 프로모션', date:'이벤트기간 2021/10/11~2021/10/17'},
        {id:2, img:pic02, title:'<EVENT> 가을 신메뉴 10% 할인', date:'이벤트 기간 : 2021/09/01 ~ 2021/09/30'},
        {id:3, img:pic03, title:'<EVENT> 여름 한정 메뉴 10% 할인', date:'이벤트 기간 : 2021/06/02 ~ 2021/06/30'},
        {id:4, img:pic04, title:'<EVENT> 스프라이트 제로와 함께 하는 COOL SUMMER EVENT', date:'이벤트 기간 : 2021/06/02 ~ 2021/06/30'},
        {id:5, img:pic05, title:'<EVENT> 샐러디x빅스마일데이 금액권 할인!', date:'이벤트 기간 : 2021/05/10 ~ 2021/05/18'}
    ];

    const renderEvents = events.map(Event=>{
        return(
            <RenderEvents Event={Event} key={Event.id}/>
        );
    });
    return(
        <div className="main">
            <Header/>
            {renderEvents}
        </div>
    );
};

export default Event_Page;