import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import currencyReducer from "./currency/currencyReducer";
import globalDataReducer from "./globalData/globalDataReducer";
import isBlackedReducer from "./isBlacked/isBlackedReducer";
import volumeDataReducer from "./volumeData/volumeDataReducer";
import priceDataReducer from "./priceData/priceDataReducer";

const rootReducer = combineReducers({
    currency: currencyReducer,
    isBlacked: isBlackedReducer,
    globalData: globalDataReducer,
    volumeData: volumeDataReducer,
    priceData: priceDataReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["currency", "isBlacked"],
//     blacklist: ["volumeData", "globalData"],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(persistedReducer, applyMiddleware(thunk));

// export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
// export const persistor = persistStore(store);


// TODO: Localstorage configuration
// const currencyConfig = {
//     key: "currency",
//     storage,
//     whitelist: ["currency"],
// };

// const isBlackedConfig = {
//     key: "isBlacked",
//     storage,
//     whitelist: ["isBlacked"],
// };

// const rootReducer = combineReducers({
//     currency: persistReducer(currencyConfig, currencyReducer),
//     isBlacked: persistReducer(isBlackedConfig, isBlackedReducer),
//     globalData: globalDataReducer,
//     volumeData: volumeDataReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const persistor = persistStore(store);

// export { store, persistor };