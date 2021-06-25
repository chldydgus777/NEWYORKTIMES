import React from 'react';
import styled from "styled-components";

import { history } from '../redux/configureStore';

const Information = (props) => {
    return (
        <InfoWrap>
            <Info>
            NEWS
            </Info>
            <Favorites onClick={() => {
                history.push("/favoriteList");
            }}>
                Fav list
            </Favorites>
        </InfoWrap>
    );
};

const InfoWrap = styled.div`
    display : flex;
    width : 1390px;
    margin : 0 auto;
    justify-content : space-between;

`;
const Info = styled.div`
    font-weight : 600;
    font-size : 20px;

`;
const Favorites = styled.button`
    border : 1px solid white;
    background : #FFEA00;
    border-radius : 10px;
    cursor : pointer;
    font-size : 15px;
    : hover {
        background : #5EC6C0;
    }

`;

export default Information