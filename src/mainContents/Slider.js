import React ,{useState,useEffect,useRef} from "react";
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import slide01 from './../img/Slide/pic01.jpg';
import slide02 from './../img/Slide/pic02.jpg';
import slide03 from './../img/Slide/pic03.jpg';
import slide04 from './../img/Slide/pic04.jpg';
import slide05 from './../img/Slide/pic05.jpg';

const slideImg = [
    {id:1, img:slide01,alt:'슬라이드이미지'},
    {id:2, img:slide02,alt:'슬라이드이미지'},
    {id:3, img:slide03,alt:'슬라이드이미지'},
    {id:4, img:slide04,alt:'슬라이드이미지'},
    {id:5, img:slide05,alt:'슬라이드이미지'},
    {id:6, img:slide01,alt:'슬라이드이미지'},
];
const Slide = ()=> {
    // 슬라이드 내용 클론 만들기
    const slide = document.querySelectorAll('.slide-item'),
          slideCount = slide.length;

    const [currentIdx, setCrruentIdx] = useState(0);
    const idxRef = useRef(0);
    const slideRef = useRef(null);
    // 오토 슬라이드 만들기
    useEffect(()=>{
       const timer = setInterval(()=>{
           setCrruentIdx((idxRef.current+=1));  
        },3000);
        return ()=> clearInterval(timer);
    },[]);
        if(currentIdx !== slideCount){
            slideRef.current.style.left = -currentIdx*100 + '%';
                }
        if(currentIdx == slideCount-1){
            setTimeout(()=>{
                slideRef.current.style.left = 0 + '%';
                setCrruentIdx((idxRef.current=0));
            },300);
        }
    // 미디어쿼리
    const isPc = useMediaQuery({
        query : "(min-width:1030px)"
    });
    const Tablet = useMediaQuery({
        query:"(min-Width:680px)"}
     );
     const TabletOrMobile01 = Tablet? "text01_T":"text01_M";
     const TabletOrMobile02 = Tablet? "text02_T":"text02_M";
    return(
        <>
          <div className="slide-container">
            <Slides className={0< currentIdx && currentIdx <slideCount ? 'animated':''} ref={slideRef} isPc = {isPc}>
                {slideImg.map(slide=>{
                    return(
                        <li key={slide.id} className="slide-item">
                            <img src={slide.img} alt={slide.alt+slide.id} />
                        </li>
                    )
                })}
            </Slides>
         {/*  페이저 만들기 */}
            <div className="pager">
                <span data-idx="0" className={currentIdx == 0 ? "active": ""}
                onClick = {event=>{
                    console.log(event.target.innerText-1);
                    setCrruentIdx((idxRef.current=event.target.innerText-1));
                }}>1</span>
                <span data-idx="1" className={currentIdx == 1 ? "active": ""}
                 onClick = {event=>{
                    console.log(event.target.innerText-1);
                    setCrruentIdx((idxRef.current=event.target.innerText-1));
                }}>2</span>
                <span data-idx="2" className={currentIdx == 2 ? "active": ""}
                 onClick = {event=>{
                    console.log(event.target.innerText-1);
                    setCrruentIdx((idxRef.current=event.target.innerText-1));
                }}>3</span>
                <span data-idx="3" className={currentIdx == 3 ? "active": ""}
                 onClick = {event=>{
                    console.log(event.target.innerText-1);
                    setCrruentIdx((idxRef.current=event.target.innerText-1));
                }}>4</span>
                <span data-idx="4" className={currentIdx == 4 ? "active": ""}
                 onClick = {event=>{
                    console.log(event.target.innerText-1);
                    setCrruentIdx((idxRef.current=event.target.innerText-1));
                }}>5</span>
            </div>
          </div>
        <div className="mainText">
            <p className={isPc? "text01":TabletOrMobile01}>샐러드가 청년같다!!</p>
            <p className={isPc? "text02":TabletOrMobile02}>청년과 같이! 청년에 의한! 청년을 위한!</p>
        </div>
        </>
    )
}
export default Slide;

const Slides = styled.ul`
width:600%;
display:flex;
pointer-events: none;
position:absolute;
top:0;
left:0;
    li{
        img{
            height:${props=>props.isPc? "":"85vh"}
        }
    }
`;