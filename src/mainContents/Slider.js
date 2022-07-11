import React ,{useState,useEffect,useRef} from "react";
import { useMediaQuery } from 'react-responsive';

const Slide = ()=> {
    // 슬라이드 내용 클론 만들기
    const slide = document.querySelectorAll('.slide-item'),
          slideCount = slide.length;

    const [currentIdx, setCrruentIdx] = useState(0);
    const idxRef = useRef(0);

    useEffect(()=>{
        const slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slide-item');
        let cloneSlide = slide[0].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    },[]);
    // 오토 슬라이드 만들기
    useEffect(()=>{
        setInterval(()=>{
            setCrruentIdx((idxRef.current+=1));  
        },3000);
    },[]);
    useEffect(()=>{
        const slides = document.querySelector('.slides');
        if(currentIdx !== slideCount){
            slides.style.left = -currentIdx*100 + '%';
                }
        if(currentIdx == slideCount-1){
            setTimeout(()=>{
                slides.style.left = 0 + '%';
                setCrruentIdx((idxRef.current=0));
            },300);
        }
    });
    // 미디어쿼리 Mobile
    const Mobile = useMediaQuery({
        query:"(max-Width:950px)"}
     );
    return(
        <>
          <div className="slide-container">
            <ul className={0< currentIdx && currentIdx <slideCount ? 'slides animated':'slides'}>
                <li className="slide-item slide01"></li>
                <li className="slide-item slide02"></li>
                <li className="slide-item slide03"></li>
                <li className="slide-item slide04"></li>
                <li className="slide-item slide05"></li>
            </ul>
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
            <p className={Mobile? "text01_M":"text01"}>건강하게 맛있다.</p>
            <p className={Mobile? "text02_M":"text02"}>샐러드에 맛과 고급을 더했습니다.</p>
        </div>
        </>
    )
}
export default Slide;