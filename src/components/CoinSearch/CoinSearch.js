import React from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import {
  InputField,
  SearchResults,
  Result,
  ResultLink,
} from "./CoinSearch.styles";
import { searchCleanup, getQueryMatches } from "store/coinSearch/actions";

function CoinSearch() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.coinSearch.isLoading);
  const error = useSelector((state) => state.coinSearch.error);
  const searchResults = useSelector((state) => state.coinSearch.searchResults);

  const inputField = React.createRef();

  const handleChange = () => {
    const value = inputField.current?.value;
    if (value === "") {
      dispatch(searchCleanup());
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
        onChange={debounce(handleChange, 200)}
        placeholder="Search..."
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
                    cleanupSearch();
                  }}
                  to={`/coinpage/${result.id}`}
                >
                  {result.name}
                </ResultLink>
              </Result>
            );
          })}
        </SearchResults>
      )}
    </div>
  );
}

export default CoinSearch;
