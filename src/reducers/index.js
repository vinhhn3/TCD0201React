import { combineReducers } from "redux";
import loginReducer from "./login";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'login_status',
    storage: storage,
}


const rootReducer = combineReducers({
    login: loginReducer,
})

export default rootReducer

export { persistConfig }