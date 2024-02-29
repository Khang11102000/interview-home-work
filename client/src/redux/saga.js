import { call, put, takeLatest } from "redux-saga/effects";
import { getAllPosts, getCommentsByPost } from "../apis/apiService.js";

function* watchGetAllPosts() {
  try {
    const result = yield call(getAllPosts);
    if (result && result.status === 200) {
      yield put({ type: "GET_ALL_POSTS_SUCCESS", payload: result });
    } else {
      yield put({ type: "GET_ALL_POSTS_FAILURE" });
    }
  } catch (error) {
    yield put({
      type: "GET_ALL_POSTS_FAILURE",
      payload: error.response.message,
    });
  }
}
// function* watchGetCommentsByPost(data) {
//   try {
//     const result = yield call(getCommentsByPost(data));
//     if (result && result.status === 200) {
//       yield put({ type: "GET_COMMENTS_BY_POST_SUCCESS", payload: result });
//     } else {
//       yield put({ type: "GET_COMMENTS_BY_POST_FAILURE" });
//     }
//   } catch (error) {
//     yield put({
//       type: "GET_COMMENTS_BY_POST_FAILURE",
//       payload: error.response.message,
//     });
//   }
// }
function* watchGetUser() {
  yield put({ type: "GET_USER_SUCCESS" });
}
function* Saga() {
  yield takeLatest("GET_ALL_POSTS", watchGetAllPosts);
  yield takeLatest("GET_USER", watchGetUser);
  // yield takeLatest("GET_COMMENTS_BY_POST", watchGetCommentsByPost);

}

export default Saga;
