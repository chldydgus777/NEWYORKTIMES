import React from 'react';
import styled from "styled-components";

import { useSelector } from "react-redux";

import ResultList from "../components/ResultList";
import Footer from '../components/Footer';

const SearchResult = (props) => {
    const keyword = useSelector((state) => state.search.keyword);
    return(
    <ResultContainer>
        <ResultText>
          <span>{keyword === "" ? "전체" : `"${keyword}"`} 검색 결과</span>
        </ResultText>
        
        <ResultList/>
        <Footer/>
    </ResultContainer>
    );
};
const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin : 10px auto;
`;

const ResultText = styled.div`
  margin: 20px auto;
  text-align: center;
  & span {
    font-size: 1.25rem;
    font-weight: 700;
  }
  
`;

export default SearchResult;