import React from "react";

const realContents = ({contents})=>{
    const Modal = ({contents})=> {
        return(
            <div className="modal_container">
                <div className="modal">
                    <div className="real_modal">
                        <span>제목: {contents.title}</span>
                    </div>
                <div className="modal_text">{contents.body}</div>
                </div>
            </div>
        )
    }    
    return(
        <>
            <Modal contents={contents}/>
            <ul className="real_title">
                <li>평점</li>
                <li>제목</li>
                <li>작성일</li>
                <li>삭제</li>
            </ul>
            <div className="real_container">
            {contents.map(content =>{
                return(
                    <div key={content.id} className="real_contents_box">
                        <ul className="real_contents">
                            <li className="item_num">별 {content.num}개</li>
                            <li className="item_title item"><a href="#!" onClick = {event=>{
                                event.preventDefault();
                                console.log(content.body);
                            }}>{content.title}</a></li>
                            <li className="item_date item">{content.date}</li>
                        </ul>
                        <button className="item_del item">삭제</button>
                    </div>
                )
            })}
            </div>
        </>
    )
};export default realContents;