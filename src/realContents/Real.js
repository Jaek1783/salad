import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from '../Mobile_Header';
import RealContents from './Real_contents';


const Real = ()=>{
    // 체크된 평점 개수 구하기
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [checked, setChecked] = useState('true');

    // submit 버튼 누르면 저장
    const onSubmit = ()=>{
        const query = document.querySelectorAll('.star_radio:checked');
        const checkbox = document.querySelectorAll('.star_radio');
        let today = new Date();
        axios.post('http://localhost:3001/posts',{
            title:title,
            body:body,
            date:today.toLocaleDateString(),
            num:query.length
        });
        // 리셋
        setTitle('');
        setBody('');
        for(let i=0; i<checkbox.length; i++){
            if (checkbox[i].type='checkbox'){
                checkbox[i].checked=true;
            }
        }
    }
        // 저장된 값 가져오기
        const [contents, setContents] = useState([]);
        useEffect(()=>{
            axios.get('http://localhost:3001/posts')
                .then(response=>{
                    setContents(response.data);
                });
        },[]);
    return(
    <div className="main">
        <Header/>
        <div className="real">
            {contents.length == 0? '후기가 없습니다.':   <RealContents contents = {contents}/> } 
        </div>
        <div className="inputBox">
            <form>
                <p className="starRatingBox"> 
                    <span>평점 : </span>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio01"/><label htmlFor="radio01"></label>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio02"/><label htmlFor="radio02"></label>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio03"/><label htmlFor="radio03"></label>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio04"/><label htmlFor="radio04"></label>
                    <input type="checkbox" defaultChecked={checked} name="star" className="star_radio" id="radio05"/><label htmlFor="radio05"></label>
                </p>
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
            <button className="real_btn" type="reset" onClick={()=>{
                onSubmit();
            }}>전송</button>
        </div>
    </div>
    );
};
export default Real;