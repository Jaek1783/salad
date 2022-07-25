import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
const EventDetail = ()=>{
    const navigate = useNavigate();
    const data = useSelector(state=>state.Event.list);
    const params = useParams();
    const index = params.index-1;
    return(
        <Container>
            <div className="eventImg"><img src={data[index].img} alt={"이벤트이미지0"+data[index].id} /></div>
            <dl>
                <dt>{data[index].title}</dt>
                <dd>{data[index].date}</dd>
            </dl>
            <button onClick={()=>{
                navigate(-1);
            }}>돌아가기</button>
        </Container>
    )
};
export default EventDetail;

const Container = styled.div`
margin:10rem auto;
position:relative;
    .eventImg {
        text-align:center;
        height:8.5rem;
    }

    img{
        width:8rem;
    }
    dl{
        text-align:center;
    }
    dt{
        font-size:30px;
        font-weight:bold;
        padding-top:3rem;
        
    }
    dd{
        font-size:20px;
    }
    button{
        background-color:#0D633D;
        border:none;
        padding:1rem;
        color:#fff;
        font-weight:bold;
        border-radius:15px;
        position:absolute;
        bottom:-100px;
        left:50%;
        transform:translate(-50%);
        cursor:pointer;
    }
`;