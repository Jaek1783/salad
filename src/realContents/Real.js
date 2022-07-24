import React, {useState,useRef, useEffect} from "react";

import Header from '../Mobile_Header';
import RealContents from './Real_contents';
import { useDispatch } from "react-redux";
import { addRealFB} from "../Redux/Real";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Real = ()=>{
    const dispatch = useDispatch();
    const isPc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );

    // 체크된 평점 개수 구하기
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [checked, setChecked] = useState('true');
    const checkedRef = useRef(null);

        // submit 버튼 누르면 저장
        const onSubmit = ()=>{
            let count = 0;
            for(let i=0; i<checkedRef.current.children.length; i++){
                if(checkedRef.current.children[i].checked === true){
                    count++;
                }
            }
            const num = count;
            dispatch(addRealFB({num:num,title:title,body:body}));
            // 리셋
            setTitle('');
            setBody('');
            for(let i=0; i<checkedRef.current.children.length; i++){
                checkedRef.current.children[i].checked = true;
            }
        }
    return(
    <div className="main">
        <Header/>
        <div className="real">
            <RealContents/>
        </div>
        <Input isPc={isPc}>
            <form>
                <div className="starRatingBox"> 
                    <div>평점 : </div>
                    <div  ref={checkedRef}>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio01"/><label htmlFor="radio01"></label>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio02"/><label htmlFor="radio02"></label>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio03"/><label htmlFor="radio03"></label>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio04"/><label htmlFor="radio04"></label>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio05"/><label htmlFor="radio05"></label>
                    </div>
                </div>
                <p className="">
                    <input type="text" id="real_title" placeholder="제목" value={title} 
                    onChange={event=>{
                        setTitle(event.target.value);

                    }}/>
                </p>
                <p>
                    <textarea id="real_body" placeholder="후기를 적어주세요" value={body} onChange={event=>{
                        setBody(event.target.value);
                    }}/>
                </p>
            </form>
            <button onClick={()=>{
                if(title === ""){
                    if(body === ""){
                        alert("제목과 글을 작성해주세요");
                    }
                    else{
                        alert("제목을 작성해주세요");
                    }
                }
                else{
                    if(body === ""){
                        alert("글을 작성해 주세요");
                    }
                    else{
                        onSubmit();

                    }
                }
            }}>전송</button>
        </Input>
    </div>
    );
};
export default Real;
const Input = styled.div`
width:${props=>props.isPc ? "50%":"80%"};
margin: 3rem auto;
background-color: #e1dfdf;
padding:1rem 3rem;
box-sizing: border-box;
position: relative;

    button{
        padding:.5rem 1rem;
        box-sizing: border-box;
        border: none;
        background-color: #0D633D;
        color:#fff;
        font-weight: bold;
        border-radius: 20px;
        position:absolute;
        bottom:10px;
        left:45%;
        cursor: pointer;
    }
`;