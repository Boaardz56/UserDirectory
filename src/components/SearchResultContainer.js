import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    sort: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchDirectory("search");
  }

  searchDirectory = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

//will handle the filtering of first or last name
  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  //sorting names function
  sortList = () => {
    if (this.state.sort === "descending" || 
      this.state.sort !== "ascending") 
      { this.setState({ sort: "ascending" });
    } else if (this.state.sort === "ascending" ||
      this.state.sort !== "descending") 
    {
        this.setState({ sort: "descending" });
    } 
  };
  

  render() {

    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
