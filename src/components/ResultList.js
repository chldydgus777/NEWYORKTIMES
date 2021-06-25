import React, { useEffect } from "react";
import styled from "styled-components";

import ArticleCard from './ArticleCard'

import { useSelector, useDispatch } from "react-redux";

const ResultList = () => {
    const search_list = useSelector((state) => state.search.search);
    console.log(search_list, "ddddd")
    return(
        <React.Fragment>
            <ArticleResult>
                {search_list.map((j, idx) => {
                    return <ArticleCard key={idx} {...j}/>
                })}
            </ArticleResult>
        </React.Fragment>
    );
};

const ArticleResult = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
`;

export default ResultList;