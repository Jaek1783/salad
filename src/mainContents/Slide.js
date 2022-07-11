import React ,{useState, useEffect} from "react";
import { Route, Routes } from 'react-router-dom';
import Right from '../img/Icon/right.png';
import Left from '../img/Icon/next.png';
// import { clear } from "@testing-library/user-event/dist/clear";

const Slide = ()=> {
    const slider = document.getElementsByClassName('slideBox');
    const slide = document.getElementsByClassName('slide-item');

    const [index, setIndex] = useState(2);
     // 페이지 카운터   
    const [page,setpage] = useState(1);
    const pageUpdate = ()=>{
        if(page < slide.length-2){
            setpage(page+1);
        }
        else if (page == slide.length-2){
            setpage(1);
        }
    }

    const slideUp= ()=>{
        setIndex(index+1);
        if(index < slide.length){
            slider[0].classList.add('active');
            slider[0].style.left = '-'+index*100+'%';
            console.log(index, slide.length);
        }
        if (index == 5){
            setTimeout(()=>{
                setIndex(1);
                slider[0].classList.remove('active');
                slider[0].style.left=0;
            },300);
        }
    } 
    useEffect(()=>{
        let cloneSlide = slide[1].cloneNode(true);
        cloneSlide.classList.add('clone');
        slider[0].appendChild(cloneSlide);
    },[]);
    useEffect(()=>{
        let cloneSlide = slide[5].cloneNode(true);
        cloneSlide.classList.add('clone');
        slider[0].prepend(cloneSlide);
    },[]);
    let num = null;

    let timer =null;
    const autoSlide = ()=>{
            if(timer == null){
             timer = setInterval(()=>{
                 if(num < 6){
                    num ++;
                 }
                 if(num == 6){
                    setTimeout(()=>{
                       num = 1;
                        slider[0].classList.remove('active');
                        slider[0].style.left= '-'+num*100+'%';
                    },300);
                 }
                 slider[0].classList.add('active');
                 slider[0].style.left = '-'+num*100+'%';

             }, 2000);
            }        
    }
    autoSlide();
useEffect(autoSlide,[]);

    return(
        <>
          <div className="slide-container">
            <ul className="slideBox">
                <li className="slide-item"></li>
                <li className="slide-item"></li>
                <li className="slide-item"></li>
                <li className="slide-item"></li>
                <li className="slide-item"></li>
            </ul>
        </div>
        <div className="btnBox">
        {/* <button className="arr Rt" onClick ={()=>{
            slideDown();
        }}><img src={Right} alt="이전버튼" /></button> */}

        <p className="page">{page}/{5 ? 5:slide.length-2}</p>

        <button className="arr Lt" onClick={()=>{
            slideUp();
            pageUpdate();
            clearInterval(timer);
        }}
        ><img src={Left} alt="다음버튼" /></button>
        </div>
        <div className="mainText">
            <p className="text01">건강하게 맛있다.</p>
            <p className="text02">샐러드에 맛과 고급을 더했습니다.</p>
        </div>
        </>
    )
}
export default Slide;