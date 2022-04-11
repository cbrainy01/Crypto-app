import React, { useEffect, useState, useRef } from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { searchCleanup, getQueryMatches, searchBlur, searchFocus } from "store/coinSearch/actions";
import { useWindowSize as useWindowSizeD } from "@react-hook/window-size";
import MobileSearch from "components/MobileSearch";
import {
  InputField,
  SearchResults,
  ResultLink,
  Loading,
} from "./CoinSearch.styles";

function CoinSearch() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.coinSearch.isLoading);
  const error = useSelector((state) => state.coinSearch.error);
  const searchResults = useSelector((state) => state.coinSearch.searchResults);
  const isFocused = useSelector((state) => state.coinSearch.isFocused);

  const inputField = useRef(null);
  const [width] = useWindowSizeD({wait: 200});
  
  const handleChange = (e) => {
    const value = inputField.current?.value;
    if (value === "") {
      cleanupSearch()
      return;
    }
    dispatch(getQueryMatches(value));
  };

  const cleanupSearch = () => {
    inputField.current.value = "";
    dispatch(searchCleanup());
  };

  return (
    <div>
      {
        width <= 602 && isFocused ? 
      <MobileSearch />
        :
        <>
      <InputField
        ref={inputField}
        onChange={debounce(handleChange, 150)}
        placeholder="Search..."
        onFocus={() => dispatch(searchFocus())}
        onBlur={() => dispatch(searchBlur())} 
      />
      {isLoading ? (
        <Loading>...Loading</Loading>
      ) : (
        <SearchResults>
          {searchResults?.map((result) => {
            return (
                <ResultLink
                  key={result.id}
                  onClick={() => {
                    cleanupSearch();
                  }}
                  to={`/coinpage/${result.id}`}
                >
                  {result.name}
                </ResultLink>
            );
          })}
        </SearchResults>
      )}
      </>
      }
    </div>
  );
}

export default CoinSearch;
