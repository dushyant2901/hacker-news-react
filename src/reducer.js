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
      return { ...state, hits: payload.hits, isLoading: false };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => {
          return story.objectID !== payload;
        }),
      };
    case HANDLE_SEARCH:
      return { ...state, query:payload };

    default:
      return state;
  }
};
