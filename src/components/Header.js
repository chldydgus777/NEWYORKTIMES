import React, {useState, useRef } from 'react';
import styled from "styled-components";

import IconSearch from "../images/search.png";

import { actionCreators as ArticleActions } from "../redux/modules/search";
import { useDispatch } from "react-redux";

import { history } from '../redux/configureStore';

const Header = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");

    const lengthen = useRef();

    const SearchArticles = () => {
        dispatch(ArticleActions.getArticleSearch(keyword, 1));
        history.push("/result");
    };

    return (
        <Wrap>
            <Title onClick={()=>{
                history.push('/')
            }}>
                Awesome NY Times
            </Title>
            <Search>
                <Input type="text" ref={lengthen} placeholder="기사를 검색해주세요" onChange={(e) => {
                    setKeyword(e.target.value)
                }}
                // 엔터키 처리
                onKeyPress={() => {
                if (window.event.keyCode === 13) {
                        SearchArticles();
                }
                }}/>
                <SearchButton onClick={() =>{
                    SearchArticles()
                }} src={IconSearch} />
            </Search>
        </Wrap>
    );
};

const Wrap = styled.div`
    height : 200px;
    display : flex;
    justify-content: flex-end;

`;
const Title = styled.div`
    margin : 30px 50px;
    width : 100%;
    height : 50px;
    font-size : 36px;
    color : #5EC6C0;
`;
const Search = styled.div`
    display : flex;
    align-items: flex-end;
    margin : 0 80px 30px 0;
`;
const Input = styled.input`
    font-size : 16px;
    padding : 3px 0;
    border : 0;
    border-bottom : 2px solid black;
    : focus {
    outline : none;

}
`;

const SearchButton = styled.img`
    width : 24px;
    position : relative;
    right : 11%;
    top : -2%;
    cursor : pointer;
`;

export default Header