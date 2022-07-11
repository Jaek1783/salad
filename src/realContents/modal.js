import React from "react";
import close from '../img/Icon/close.png';

const Modal = ({contents})=>{
        const modal_close = ()=>{
        const Mbox = document.querySelector('.modal_container');
        Mbox.style.display = 'none';
    }
    const contentsClone = [...contents];
    return(
        <div className="modal_container">
        <p className="Modal_close" onClick={()=>{
            modal_close();
        }}><img src={close} alt="닫기" /></p>
        <div className="modal">
        <ul className="real_modal">
            <li>제목: {console.log(contentsClone[0].title)}</li>
        </ul>
        <div className="modal_text"></div>
        </div>
    </div>
    )
};export default Modal;