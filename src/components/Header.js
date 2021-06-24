import React from 'react';
import styled from "styled-components";

import IconSearch from "../images/search.png";

const Header = () => {
    const Resume = () => {
        window.open("https://www.notion.so/2c3a7614c21c4babb7dc49d9c07c707b")
    }
    return (
        <Wrap>
            <Title onClick={()=>{
                Resume()
            }}>
                Awesome NY Times
            </Title>
            <Search>
                <Input placeholder="기사를 검색해주세요"></Input>
                <SearchButton src={IconSearch} />
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
    border-bottom : 2px solid #5EC6C0;
    : focus {
    outline : none;

}
`;

const SearchButton = styled.img`
    width : 26px;
    cursor : pointer;
`;

export default Header