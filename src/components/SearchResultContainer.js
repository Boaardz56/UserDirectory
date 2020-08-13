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

  
  componentDidMount() {
    this.searchDirectory("search");
  }

  searchDirectory = query => {
    API.search(query)
      .then(res => 
        {
          console.log("Table results", res)
          this.setState({ results: res.data.results })
        })
      .catch(err => console.log(err));
  };

//will handle the filtering of first or last name
  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log("This is the value", value)
    this.setState({
      search: value
    });
  };

  // //sorting names function
  // sortList = () => {
  //   if (this.state.sort === "descending" || 
  //     this.state.sort !== "ascending") 
  //     { this.setState({ sort: "ascending" });
  //   } else if (this.state.sort === "ascending" ||
  //     this.state.sort !== "descending") 
  //   {
  //       this.setState({ sort: "descending" });
  //   } 
  // };
  

  render() {
    console.log("Results", this.state.results)
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
