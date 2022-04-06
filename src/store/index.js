import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
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
};

const rootReducer = combineReducers({
  universalVariables: persistReducer(
    universalVariablesConfig,
    universalVariablesReducer
  ),
  portfolioInfo: persistReducer(
    portfolioInfoConfig,
    portfolioInfoReducer
  ),
  globalData: globalDataReducer,
  volumeData: volumeDataReducer,
  priceData: priceDataReducer,
  coinsData: coinsDataReducer,
  coinData: coinDataReducer,
  coinSearch: coinSearchReducer,
  shopSearch: shopSearchReducer,
  shopForm: shopFormReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
