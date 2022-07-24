import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
const Modal = ()=>{
    const data = useSelector(state=>state.Real.list);
    const params = useParams();
    const index = params.index-1;
    const navigate = useNavigate();
    const isPc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );
     if(data[0].title === ''){
        return(
            <div className="modal_container">
            <ModalStyle isPc={isPc}>
                <p>잠시만 기다려 주세요</p>
            </ModalStyle>
        </div>
        )
     }
    if(index > 0){
            return(
                <div className="modal_container">
                <ModalStyle isPc={isPc}>
                <Del className="item_del" onClick={()=>{
                    navigate(-1);
                }}>X</Del>
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
                <p>댓글 제목을 클릭하여 상세 글을 확인 할 수 있습니다.</p>
            </Container>
        )
    }
};export default Modal;

const ModalStyle = styled.div`
width:${props=>props.isPc ? "50%":"90%"};
background-color: #0d633d;
padding:2rem;
margin:1rem auto;
    p{
        color:#fff;
        text-align:center;
    }
    li{
        color:#fff;
    }
`;
const Container = styled.div`
width:${props=>props.isPc ? "50%":"90%"};
margin:0 auto;
background-color: #0d633d;
text-align:center;
p{
    color:#fff;
    padding:2rem;
}
`; 

const Del = styled.div`
text-align:right;
font-size:20px;
`;