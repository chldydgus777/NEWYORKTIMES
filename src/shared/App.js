import React from "react";

import styled from "styled-components";
// import { Route } from "react-router-dom";
import './App.css';

import Header from "../components/Header";
import Articles from "../components/Articles"

function App() {
  return (
    <Wrap>
      <Header />
      <Articles/>
    </Wrap>
  );
}

const Wrap = styled.div`
  width : 1400px;
  margin : 0 auto;
`;

export default App;
