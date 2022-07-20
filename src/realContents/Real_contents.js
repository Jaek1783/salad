import React,{useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteReal } from "../Redux/Real";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Modal from "./modal";
const RealContents = ()=>{
    const navigate = useNavigate();
    const data = useSelector(state=>state.Real.list);
    const dispatch = useDispatch();
    const isPc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );
    return(
        <>  
        <div>
            {<Modal/>}
        </div>
            <Title isPc={isPc}>
                <li>평점</li>
                <li>제목</li>
                <li>삭제</li>
            </Title>
            <div className="real_container">
                <ul>
                    {data.map((real,index) => {
                        return(
                            <Items isPc = {isPc} key={index}>
                                <p>{real.num}.0</p>
                                <p className="real_text" onClick={()=>{
                                    navigate('/real/'+(index+1));
                                }}>{real.title}</p>
                                <button className="item_del" onClick={()=>{
                                    dispatch(deleteReal(index));
                                    navigate('/real/0');
                                }}>X</button>
                            </Items>
                        )
                    })}
                </ul>
            </div>
        </>
    )
};export default RealContents;
const Title = styled.ul`
width:${props=>props.isPc ? "50%":"80%"};
margin:0 auto;
display: flex;
justify-content: space-between;
font-weight: bold;
border-bottom:2px solid #000;
padding-top:3rem;
padding-bottom:.3rem;
box-sizing: border-box;
`;
const Items = styled.li`
width:${props=>props.isPc ? "50%":"80%"};
margin:0 auto;
display:flex;
justify-content: space-between;
padding:.5rem;
border-bottom: 1px solid #000;
position: relative;
div{
    width:100%;
    display:flex;
    justify-content: space-between;
  }
`;