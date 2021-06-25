import React from "react";

import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { history } from '../redux/configureStore';
import { ConnectedRouter } from "connected-react-router";

import './App.css';

import Main from "../pages/Main";
import FavoriteList from "../pages/FavoriteList";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Information from '../components/Information';
import SearchResult from "../pages/SearchResult";
import NotFound from "./NotFount";


function App() {
  return (
    <Wrap>
      <ConnectedRouter history={history}>
        <Header/>
        <Information/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/favoriteList" component={FavoriteList} /> 
          <Route path="/result" exact component={SearchResult} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </ConnectedRouter>
    </Wrap>
  );
}

const Wrap = styled.div`
  width : 1400px;
  margin : 0 auto;
`;

export default App;
