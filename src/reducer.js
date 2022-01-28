import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
export default (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_STORIES:
      return {
        ...state,
        hits: payload.hits,
        isLoading: false,
        nbPages: payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => {
          return story.objectID !== payload;
        }),
      };
    case HANDLE_SEARCH:
      return { ...state, query: payload };
    case HANDLE_PAGE:
      let newPage;
      if (payload === "incr") {
        newPage = state.page + 1;
        if (newPage > state.nbPages - 1) {
          newPage = 0;
        }
      } else {
        newPage = state.page - 1;
        if (newPage < 0) {
          
          newPage = state.nbPages - 1;
        }
      }
      return { ...state, page: newPage };

    default:
      return state;
  }
};
