import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { produce } from "immer";

// actions
const SET_ARTICLE = "SET_ARTICLE";

// actionCreator
const setArticle = createAction(SET_ARTICLE, (article) => ({ article }));

//initialState
const initialState = {
    article_NewYorkTimes: [],
};

// axios 
// NewYorkTimes Open API + key
const getArticleAPI = (page) => {
    const Article_API = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&page=0&api-key=wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu`;
    return function (dispatch, getState, { history }) {
    axios
        .get(Article_API)
        .then((resp) => {
            dispatch(setArticle(resp.data.response.docs));
            console.log(resp)
    })
        .catch((e) => console.error(e));
    };  
};


// Reducer
export default handleActions(
    {
    [SET_ARTICLE]: (state, action) =>
        produce(state, (draft) => {
        // 액션페이로드 data(인자명을 데이타로 정해줌)를 가져온다
        draft.article_NewYorkTimes = action.payload.article;
    }),
    },

    initialState
);

// actionCreators
const actionCreators = {
    getArticleAPI,
};

export { actionCreators };