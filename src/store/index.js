import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalDataReducer from "./globalData/globalDataReducer";
import volumeDataReducer from "./volumeData/volumeDataReducer";
import priceDataReducer from "./priceData/priceDataReducer";
import coinsDataReducer from "./coinsData/coinsDataReducer";
import universalVariablesReducer from "./universalVariables/universalVariablesReducer";
import coinDataReducer from "./coinData/coinDataReducer";
import portfolioInfoReducer from "./portfolioInfo/portfolioInfoReducer";

const universalVariablesConfig = {
  key: "universalVariables",
  storage,
};

const rootReducer = combineReducers({
  universalVariables: persistReducer(
    universalVariablesConfig,
    universalVariablesReducer
  ),
  globalData: globalDataReducer,
  volumeData: volumeDataReducer,
  priceData: priceDataReducer,
  coinsData: coinsDataReducer,
  coinData: coinDataReducer,
  portfolioInfo: portfolioInfoReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
