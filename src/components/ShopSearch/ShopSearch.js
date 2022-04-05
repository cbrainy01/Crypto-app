import React from 'react';
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { SearchInput } from 'components/CoinShop/CoinShop.styles'
import { InputField } from './ShopSearch.styles'
import {
    // InputField,
    SearchResults,
    Result,
    ResultLink,
  } from "components/CoinSearch/CoinSearch.styles";
//   import { searchCleanup, getQueryMatches } from "store/shopSearch/actions";
import { shopSearchCleanup, getShopQueryMatches } from "store/shopSearch/actions";
import { setDisplayData, validateInputs } from 'store/shopForm/actions';

function ShopSearch() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.shopSearch.isLoading);
  const error = useSelector((state) => state.shopSearch.error);
  const searchResults = useSelector((state) => state.shopSearch.searchResults);
  const inputField = React.createRef();

  const handleChange = () => {
    const value = inputField.current?.value;
    if (value === "") {
      cleanupSearch()
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
         placeholder='Search coin'
        />

         {isLoading ? (
        <Result>...Loading</Result>
      ) : (
        <SearchResults>
          {searchResults?.map((result) => {
            return (
              <Result key={result.id}>
                <ResultLink
                  onClick={() => {
                    //   set display data. will require aciton to be created
                    dispatch(setDisplayData(result));
                    dispatch(validateInputs());
                    cleanupSearch();
                  }}
                //   to={`/coinpage/${result.id}`}
                >
                  {result.name}
                </ResultLink>
              </Result>
            );
          })}
        </SearchResults>
      )}
    </SearchInput>
  )
}

export default ShopSearch