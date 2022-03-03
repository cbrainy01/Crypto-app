import React from 'react';
import debounce from "lodash.debounce";
import axios from 'axios';
import { history } from 'utils';
import { InputField } from './CoinSearch.styles';


export class CoinSearch extends React.Component {
    state = {
        query: "",
        isLoading: false,
        error: null,
        searchResults: [],
    }
    
    getQueryMatches = async() => {
        try {
            const resp = await axios(`https://crypto-app-server.herokuapp.com/coins/${this.state.query}`);
            console.log("resp: ", resp)
            this.setState({ searchResults: resp.data })
        } catch (error) {
            
        }
    }

    handleChange = (e) => {
      if(e.target.value === "") {this.setState({ searchResults: [], query: e.target.value }); return} 
        this.setState({ query: e.target.value })
        this.getQueryMatches()
        console.log(e.target.value)
        console.log("in handler")
    }

    handleCoinSelect = (e) => {history.push(`/coinpage/${e.target.value}`)}
    render() {
        console.log("props: ", this.props)
    return (
      <div>
        <InputField
          onChange={debounce(this.handleChange, 1500)}
          placeholder="...Search"
        />
        <select onChange={this.handleCoinSelect}>
          {this.state.searchResults.map((result) => (
            <option value={result.name}>{result.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default CoinSearch