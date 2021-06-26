import React, {useState, useEffect} from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { actionCreators } from '../redux/modules/search';

const Footer = () => {
    const dispatch = useDispatch();
    
    // const [currentPage, setcurrentPage] = useState(0);   
    const page = useSelector((state) => state.search.page)
    const keyword = useSelector((state) => state.search.keyword)

    const nextpage = () => {
        dispatch(actionCreators.getArticleSearch(keyword, page + 1))
    }

    const PrePage = () => {
        dispatch(actionCreators.getArticleSearch(keyword, page - 1))
    }

    console.log(page)
    return(
        <FooterWrap>    
            {page === 0 ? "" :
            <Previous onClick={PrePage}>
                이전10개 보기
            </Previous>
            }
            <Next onClick={nextpage} >
                10개 더보기
            </Next>
        </FooterWrap>
    );

};

const FooterWrap = styled.div`
    margin : 10px auto 20px;
    width : 1390px;
`;

const Previous = styled.button`
    height : 40px;
    border-radius : 10px;
    border : 1px solid #5EC6C0;
    background : white;
    cursor : pointer;
    float : left;

`;
const Next = styled.button`
    height : 40px;
    border-radius : 10px;
    border : 1px solid #5EC6C0;
    background : white;
    cursor : pointer;
    float : right;
`;

export default Footer;