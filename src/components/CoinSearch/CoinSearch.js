import React from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import { InputField } from "./CoinSearch.styles";
import { SearchResults, Result, ResultLink } from "./CoinSearch.styles";

export class CoinSearch extends React.Component {
  state = {
    query: "",
    isLoading: false,
    error: null,
    searchResults: [],
    inputField: React.createRef(),
  };

  getQueryMatches = async () => {
    this.setState({ isLoading: true });
    try {
      const resp = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${this.state.query}`
      );
      this.setState({ searchResults: resp.data, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, error: "no matches found" });
    }
  };

  handleChange = () => {
    const value = this.state.inputField.current.value;
    if (value === "") {
      this.setState({ searchResults: [], query: value });
      return;
    }
    this.setState({ query: value });
    this.getQueryMatches();
  };

  searchCleanup = () => {
    this.state.inputField.current.value = "";
    this.setState({ searchResults: [] });
  };

  render() {
    return (
      <div>
        <InputField
          ref={this.state.inputField}
          onChange={debounce(this.handleChange, 200)}
          placeholder="...Search"
        />
        {this.state.isLoading ? (
          <Result>...Loading</Result>
        ) : (
          <SearchResults>
            {this.state.searchResults?.map((result) => {
              return (
                <Result key={result.id}>
                  <ResultLink
                    onClick={() => {
                      this.searchCleanup();
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
}

export default CoinSearch;
