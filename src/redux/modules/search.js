import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// actions
const SET_ARTICLE_SEARCH = "SET_ARTICLE_SEARCH"; // 검색 페이지
const CLEAR_SEARCH_PAGE = "CLEAR_SEARCH_PAGE"; // 새롭게 검색할때 초기화
const SET_KEYWORD = "SET_KEYWORD"; // 검색어 설정

// actionCreator
const setArticleSearch = createAction(SET_ARTICLE_SEARCH, (articles) => ({ articles })); // 검색 페이지
const clearSearchPage = createAction(CLEAR_SEARCH_PAGE, () => ({})); // 새롭게 검색할때 초기화
const setKeyword = createAction(SET_KEYWORD, (keyword) => ({ keyword })); // 검색어 설정

//initialState
const initialState = {
    search: [],
    search_page: 0,
    keyword: "",
};

// fetch
const getArticleSearch = (keyword) => {

    return function (dispatch, getState, { history }) {
        dispatch(clearSearchPage()); // 전에 검색한 결과 내용 모두 지우기
        dispatch(setKeyword(keyword));

    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
    .then((res) => res.json())
    .then((res) => {

    dispatch(setArticleSearch(res.response.docs));
    console.log(res)
    })
    .catch((err) => console.log(err, "getArticleSearch"));
};
};


// Reducer
export default handleActions(
    {
    [SET_ARTICLE_SEARCH]: (state, action) =>
        produce(state, (draft) => {
            draft.search = action.payload.articles;
        }),

    [CLEAR_SEARCH_PAGE]: (state, action) =>
        produce(state, (draft) => {
            draft.search = [];
        }),

    [SET_KEYWORD]: (state, action) =>
        produce(state, (draft) => {
            draft.keyword = action.payload.keyword;
        }),
    },

    initialState
);

// actionCreators
const actionCreators = {
    getArticleSearch,
};

export { actionCreators };