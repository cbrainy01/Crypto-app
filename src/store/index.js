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
import coinSearchReducer from "./coinSearch/coinSearchReducer";
import shopSearchReducer from "./shopSearch/shopSearchReducer";
import shopFormReducer from "./shopForm/shopFormReducer";

const universalVariablesConfig = {
  key: "universalVariables",
  storage,
};

const portfolioInfoConfig = {
  key: "portfolioInfo",
  storage,
  blacklist: ["showCoinShop"],
}

// TODO: persist shopformreducer data. whitelist allowSave(dont persist it) 

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
  coinSearch: coinSearchReducer,
  // portfolioInfo: portfolioInfoReducer,
  portfolioInfo: persistReducer(portfolioInfoConfig, portfolioInfoReducer),
  shopSearch: shopSearchReducer,
  shopForm: shopFormReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
