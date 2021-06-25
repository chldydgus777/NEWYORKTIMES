import React, {useEffect} from 'react';
import styled from "styled-components";

import { actionCreators as articleActions } from "../redux/modules/article";
import { useDispatch, useSelector } from "react-redux";

import ArticleCard from './ArticleCard'


const Articles = () => {
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(articleActions.getArticleAPI());
}, []);

    const AricleList = useSelector((state) => state.article.article_NewYorkTimes);
    return (
            <GridWrap>
                {AricleList.map((i, idx) => {
                    return <ArticleCard key={idx} {...i}/>
                })}
            </GridWrap>
    );
};

const GridWrap = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
`;

export default Articles;