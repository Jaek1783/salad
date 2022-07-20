import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
const Modal = (props)=>{
    const data = useSelector(state=>state.Real.list);
    const params = useParams();
    const index = params.index-1;
    const isPc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );    
    if(index !== -1){
        return(
            <div className="modal_container">
            <ModalStyle isPc={isPc}>
            <ul className="real_modal">
                <li>제목:{data[index].title}</li>
            </ul>
            <div className="modal_text">
                {data[index].body}
            </div>
            </ModalStyle>
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

const ModalStyle = styled.div`
width:${props=>props.isPc ? "50%":"80%"};
height:15rem;
background-color: #c1c1c1;
margin:1rem auto;
`;
const Container = styled.div`
text-align:center;
padding-top:5rem;
`; 