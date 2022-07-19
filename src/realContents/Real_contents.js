import React,{useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, Routes, Route } from "react-router-dom";
import { deleteReal } from "../Redux/Real";
import Modal from "./modal";
const RealContents = ()=>{
    const navigate = useNavigate();
    const data = useSelector(state=>state.Real.list);
    const dispatch = useDispatch();

    return(
        <>  
        <div>
            {<Modal/>}
        </div>
            <ul className="real_title">
                <li>평점</li>
                <li>제목</li>
                <li>삭제</li>
            </ul>
            <div className="real_container">
                <ul>
                    {data.map((real,index) => {
                        return(
                            <li className="real_item" key={index}>
                                <p>{real.num}.0</p>
                                <p className="real_text" onClick={()=>{
                                    navigate('/real/'+(index+1));
                                }}>{real.title}</p>
                                <button className="item_del" onClick={()=>{
                                    dispatch(deleteReal(index));
                                    navigate('/real/0');
                                }}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
};export default RealContents;