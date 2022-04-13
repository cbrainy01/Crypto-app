import React, { useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import {
  searchCleanup,
  getQueryMatches,
  deactivateSearch,
} from "store/coinSearch/actions";
import Cross from "icons/Cross.svg";
import {
  CloseContainer,
  MobileInputContainer,
  MobileInputField,
  MobileSearchBackground,
  MobileSearchResult,
  MobileSearchResults,
  WhiteCross,
} from "./MobileSearch.styles";

function MobileSearch() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.coinSearch.isLoading);
  const error = useSelector((state) => state.coinSearch.error);
  const searchResults = useSelector((state) => state.coinSearch.searchResults);

  const inputField = useRef(null);

  useEffect(() => {
    inputField.current?.focus();
  }, []);

  const cleanupSearch = () => {
    inputField.current.value = "";
    dispatch(searchCleanup());
  };

  const handleChange = () => {
    const value = inputField.current?.value;
    if (value === "") {
      cleanupSearch();
      return;
    }
    dispatch(getQueryMatches(value));
  };

  function handleSearchClose() {
    dispatch(deactivateSearch())
    cleanupSearch();
  }

  return (
    <MobileSearchBackground>
      <CloseContainer>
        <WhiteCross onClick={handleSearchClose} src={Cross} />
        <p>Close</p>
      </CloseContainer>
      <MobileInputContainer>
        <MobileInputField
          ref={inputField}
          onChange={debounce(handleChange, 150)}
          placeholder="Search..."
        />
      </MobileInputContainer>
      <MobileSearchResults>
        {isLoading ? (
          <MobileSearchResult>...Loading</MobileSearchResult>
        ) : (
          <>
            {searchResults?.map((result) => {
              return (
                <MobileSearchResult
                  key={result.id}
                  onClick={handleSearchClose}
                  to={`/coinpage/${result.id}`}
                >
                  {result.name}
                </MobileSearchResult>
              );
            })}
          </>
        )}
      </MobileSearchResults>
    </MobileSearchBackground>
  );
}

export default MobileSearch;
