import { combineReducers } from "redux";

const initState = {
  isError: false,
  errorMessage: "",
  posts: [],
  comments: [],
  user: {},
  isLoading: true,
  isLoading2: true
};

const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALL_POSTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        posts: action.payload.data.posts,
      };
    case "GET_ALL_POSTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        isLoading2: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        isLoading2: false,
        user: {
          id: 0,
          username: "Khang Vo Ho An",
          password: "1234567890",
          name: "Khang Vo",
          dob: "28/08/2024",
          created_at: 1576506719083,
        },
      };
    case "DELETE_USER": {
      return {
        ...state,
        isLoading2: true,
        user: {},
      };
    }
    default:
      return state;
  }
};
const CommentReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_COMMENTS_BY_POST":
      return {
        ...state,
        isLoading3: true,
      };
    case "GET_COMMENTS_BY_POST_SUCCESS":
      return {
        ...state,
        isLoading3: false,
        comments: action.payload.data.comments,
      };
    case "GET_COMMENTS_BY_POST_FAILURE":
      return {
        ...state,
        isLoading3: false,
        isError: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  PostReducer: PostReducer,
  UserReducer: UserReducer,
  CommentReducer: CommentReducer
});

export default rootReducer;
