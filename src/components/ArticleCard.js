import React from 'react';
import styled from "styled-components";

import NewYorkTimes from "../images/NewYorkTImes.png";

// Card 한개 
const ArticleCard = (props) => {
    const Domain = `https://static01.nyt.com/`
    const {abstract, headline, multimedia, lead_paragraph, web_url} = props;
    // ? === 있는지 확인 옵셔널체이닝
    const ImgUrl = multimedia ? Domain + multimedia[0]?.url : "";

    // 뉴스 클릭시 본문으로 이동함수
    const NYtimes = () => {
        window.open(`${web_url}`)
    }
    return(
        <Card>
            {/* 메인이미지 */}
            <Image onClick={() => {
                NYtimes()
                // 사진이 없으면 NewYorkTimes 이미지로 설정
            }} src={ImgUrl === "https://static01.nyt.com/undefined" ? NewYorkTimes :  ImgUrl } >
            </Image>
            <Desc>
                <Main onClick={() => {
                    NYtimes()
                }}>
                    {headline.main}
                </Main>
                {/* 요약 */}
                <Abstract onClick={() => {
                    NYtimes()
                }}>
                    {abstract}
                </Abstract>
                <div style={{display : "flex"}}>
                    {/* 본문 30자 ...more */}
                    <LeadParagraph>
                        {lead_paragraph}
                    </LeadParagraph>
                <span style={{fontSize : "14px", marginTop : "5px", cursor : "pointer", fontWeight : "500"}} onClick={() => {
                    NYtimes()
                }}> 
                    more
                </span>
                </div>
            </Desc>
        </Card>
    );
};

ArticleCard.defaultProps = {
    ImgUrl : "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg"
}

const Card = styled.div`
    width : 450px; 
    margin : 5px auto;
    background : #eee;
    border-radius : 8px;

`;
const Image = styled.img`
    width : 450px;
    height : 250px;
    cursor : pointer;
    border-radius : 8px 8px 0 0;

`;
const Desc = styled.div`
    padding : 10px;


`;
const Main = styled.div`
    font-size : 23px;
    font-weight : 600;
    cursor : pointer;

`;
const Abstract = styled.div`
    font-size : 16px;
    margin-top: 10px;
    font-weight : 500;
    cursor : pointer;
`;
const LeadParagraph = styled.div`
    font-size : 14px;
    margin-top: 5px;
    cursor : pointer;
    overflow:hidden;
    width : 200px;
    text-overflow: ellipsis;
    white-space:nowrap;
`;


export default ArticleCard;