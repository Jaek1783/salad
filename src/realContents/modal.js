import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Modal = (props)=>{
    const data = useSelector(state=>state.Real.list);
    const params = useParams();
    const index = params.index-1;
    if(index !== -1){
        return(
            <div className="modal_container">
            <div className="modal">
            <ul className="real_modal">
                <li>제목:{data[index].title}</li>
            </ul>
            <div className="modal_text">
                {data[index].body}
            </div>
            </div>
        </div>
        )
    }
    else{
        return(
            <Container>
                댓글 제목을 클릭하여 상세 글을 확인 할 수 있습니다.
            </Container>
        )
    }
};export default Modal;

const Container = styled.div`
text-align:center;
padding-top:5rem;
`; 