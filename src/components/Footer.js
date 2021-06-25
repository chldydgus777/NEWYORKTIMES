import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Footer = (currentP, PreP, NextP) => {
    const [currentPage, setcurrentPage] = useState(1);
    return(
        <FooterWrap>    
            <Previous >
                이전10개 더보기
            </Previous>
            <Next>
                이후10개 더보기
            </Next>
        </FooterWrap>
    );

};

const FooterWrap = styled.div`
    display : flex;
    margin : 10px auto 20px;
    width : 1390px;
    justify-content : space-between;
`;

const Previous = styled.button`
height : 40px;
border-radius : 10px;
border : 1px solid #5EC6C0;
background : white;
cursor : pointer;

`;
const Next = styled.button`
height : 40px;
border-radius : 10px;
border : 1px solid #5EC6C0;
background : white;
cursor : pointer;
`;

export default Footer;