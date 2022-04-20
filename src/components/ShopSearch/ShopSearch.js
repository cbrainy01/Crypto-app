import React from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { SearchInput } from "components/CoinShop/CoinShop.styles";
import {
  Result,
  InputField,
} from "components/CoinSearch/CoinSearch.styles";
import {
  shopSearchCleanup,
  getShopQueryMatches,
} from "store/shopSearch/actions";
import { setDisplayData, validateInputs } from "store/shopForm/actions";
import { ShopLoading, ShopSearchResults } from "./ShopSearch.styles";

function ShopSearch() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.shopSearch.isLoading);
  const error = useSelector((state) => state.shopSearch.error);
  const searchResults = useSelector((state) => state.shopSearch.searchResults);
  const inputField = React.createRef();

  const handleChange = () => {
    const value = inputField.current?.value;
    if (value === "") {
      cleanupSearch();
      return;
    }
    dispatch(getShopQueryMatches(value));
  };

  const cleanupSearch = () => {
    inputField.current.value = "";
    dispatch(shopSearchCleanup());
  };
  return (
    <SearchInput>
      <InputField
        ref={inputField}
        onChange={debounce(handleChange, 150)}
        placeholder="Search coin"
      />
      {isLoading && <ShopLoading>...Loading</ShopLoading>}
      <ShopSearchResults>
        {searchResults?.map((result) => {
          return (
            <Result
              key={result.id}
              onClick={() => {
                dispatch(setDisplayData(result));
                dispatch(validateInputs());
                cleanupSearch();
              }}
            >
              {result.name}
            </Result>
          );
        })}
      </ShopSearchResults>
    </SearchInput>
  );
}

export default ShopSearch;
