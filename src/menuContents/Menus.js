import React from "react";

const Menus = (props)=>{
    return(
        <dl className="menus">
            <dt className="menus_pic">
                <p className="menu_title">{props.menu.title}</p>
                <img src={props.menu.img} alt={"메뉴 0"+ props.menu.id} />
            </dt>
            <dd className="menus_content">{props.menu.content}</dd>
        </dl>
    );
}; export default Menus;