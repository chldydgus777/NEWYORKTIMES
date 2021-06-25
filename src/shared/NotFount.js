import React from "react";
import styled from "styled-components";

const NotFound = (props) => {
    return (
        <Container>
            <h3>그런 페이지는 없습니다. <br/> 주소를 확인해주세요 ...</h3>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    margin : 30px 0px;
`;

export default NotFound;