import createSagaMiddle from "redux-saga";
import rootReducer from "./rootReducer.js";
import rootSaga from "./rootSaga.js";
import { createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// import storage from "redux-persist/lib/storage";

const sagaMiddle = createSagaMiddle();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Post", "User"],

  // stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(sagaMiddle));

sagaMiddle.run(rootSaga);

export default store;
