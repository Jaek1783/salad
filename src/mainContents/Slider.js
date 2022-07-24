import React ,{useState,useEffect,useRef} from "react";
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import slide01 from './../img/Slide/pic06.jpg';
import slide02 from './../img/Slide/pic07.jpg';
import slide03 from './../img/Slide/pic08.jpg';
import slide04 from './../img/Slide/pic09.jpg';
import slide05 from './../img/Slide/pic10.jpg';

const slide = [
    {id:0, img:slide01,alt:'슬라이드이미지'},
    {id:1, img:slide02,alt:'슬라이드이미지'},
    {id:2, img:slide03,alt:'슬라이드이미지'},
    {id:3, img:slide04,alt:'슬라이드이미지'},
    {id:4, img:slide05,alt:'슬라이드이미지'},
    {id:5, img:slide01,alt:'슬라이드이미지'},
];
const Slide = ()=> {
    // 슬라이드 내용 클론 만들기
         const slideCount = 6;

    const [currentIdx, setCrruentIdx] = useState(0);
    const idxRef = useRef(0);
    const slideRef = useRef();
    // 오토 슬라이드 만들기
    useEffect(()=>{
       const timer = setInterval(()=>{
           setCrruentIdx((idxRef.current+=1));  
        },3000);
        return ()=> clearInterval(timer);
    },[]);
    useEffect(()=>{
        if(currentIdx !== slideCount){
            slideRef.current.style.left = -currentIdx*100 + '%';
                }
        if(currentIdx == slideCount-1){
            setTimeout(()=>{
                slideRef.current.style.left = 0 + '%';
                setCrruentIdx((idxRef.current=0));
            },300);
        }
    })
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
          <SlideContainer isPc={isPc}>
            <Slides className={0< currentIdx && currentIdx <slideCount ? 'animated':''} ref={slideRef} isPc = {isPc}>
                {slide.map(s=>{
                    return(
                        <SlideItem key={s.id} s={s}>
                        </SlideItem>
                    )
                })}
            </Slides>
         {/*  페이저 만들기 */}
            <div className="pager">
                {slide.map(s=>{
                    return(
                        <span data-idx={s.id} key={s.id} className={currentIdx == s.id ? "active":""}></span>
                    )
                })}
            </div>
          </SlideContainer>
        <MainText isPc={isPc}>
            <p className={isPc? "text01":TabletOrMobile01}>샐러드가 청년같다!!</p>
            <p className={isPc? "text02":TabletOrMobile02}>청년과 같이! 청년에 의한! 청년을 위한!</p>
        </MainText>
        </>
    )
}
export default Slide;
const SlideContainer = styled.div`
width:100%;
height:${props=>props.isPc ? "75vh":"30vh"};
overflow: hidden;
position: relative;
`;
const Slides = styled.ul`
width:600%;
height:${props=>props.isPc ? "75vh":"30vh"};
display:flex;
pointer-events: none;
position:absolute;
top:0;
left:0;
`;

const SlideItem = styled.li`
display: inline-block;
width:100%;
height:100%;
background:no-repeat center url('${props=>props.s.img}');
background-size:cover;
`;
const MainText = styled.div`
position:absolute;
  top:${props=> props.isPc ? "30%":"15%"};
  color:#0d633d;
  text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
  z-index:99;
  padding-top:1.5rem;
  padding-left:1rem;
`;