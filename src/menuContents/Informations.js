import React from "react";
import { useMediaQuery } from 'react-responsive';
import { useSelector } from "react-redux";
import styled from "styled-components";
const Info = (props)=>{
    const isPc = useMediaQuery({
        query:"(min-Width:1260px)"}
     );
     const isMobile = useMediaQuery({
        query:"(max-width:500px)"
     });
     const info = useSelector(state=>state.Menu.info);
    return(
        <>
        {info.map(list=>{
            return(
                <dl className={isPc ? "text04Box_pc" : "text04Box_M"} key={list.id}>
                    <Title isMobile = {isMobile}>{list.title}</Title>
                    <dd>
                       {isMobile ? 
                       "":
                       <p>{list.content01}</p>
                       } 
                       {isMobile ? 
                       "":
                       <p>{list.content02}</p>
                       } 
                    </dd>
                </dl>
            )
        })}
        </>
    );
};
export default Info;

const Title = styled.dt`
text-align:${props=>props.isMobile ? "center":"left"};
font-size: ${props=>props.isMobile ? "1.5rem":"1rem"};
font-weight: bold;
padding-bottom:1rem;
`;