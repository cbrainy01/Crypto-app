import React, { useRef } from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { searchCleanup, getQueryMatches } from "store/coinSearch/actions";
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

  const inputField = useRef(null);

  const handleChange = () => {
    const value = inputField.current?.value;
    if (value === "") {
      cleanupSearch();
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
      <InputField
        ref={inputField}
        onChange={debounce(handleChange, 150)}
        placeholder="Search..."
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
    </div>
  );
}

export default CoinSearch;
