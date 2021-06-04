import { createStore } from "redux";
import rootReducer, { persistConfig } from "./reducers";
import { persistStore, persistReducer } from 'redux-persist'

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

export default store

export const persistor = persistStore(store)