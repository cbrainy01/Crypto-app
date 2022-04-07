import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import currencyReducer from "./currency/currencyReducer";
import globalDataReducer from "./globalData/globalDataReducer";
import { isBlackedReducer } from "./isBlacked/isBlackedReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    currency: currencyReducer,
    isBlacked: isBlackedReducer,
    globalData: globalDataReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["currency", "isBlacked"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);