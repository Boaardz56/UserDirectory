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
      .then(res => {
        // console.log("Table results", res)
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err));
  };

  //will handle the filtering of first or last name
  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // console.log("This is the value", value)
    this.setState({
      search: value
    });
  };

  //sorting names function
  sortList = () => {
    //onClick of last name on the table "Last Name" head
    console.log("SortList works")
    //if last name clicked, should sort from a->z
    //if clicked again, should sort z->a
    if (this.state.sort === "descending" ||
      this.state.sort !== "ascending") {
      this.setState({ sort: "ascending" });
      //sorting by last name
      let ascendingSortLast = this.state.results.sort((a, b) => a.name.last.localeCompare(b.name.last))
      this.setState({ results: ascendingSortLast }) 
      // //sorting by first name
      // let ascendingSortFirst = this.state.results.sort((a, b) => a.name.first.localeCompare(b.name.first))
      // // console.log("Ascending list", ascendingSort)
      // this.setState({ results: ascendingSortFirst })
    } else if (this.state.sort === "ascending" ||
      this.state.sort !== "descending") {
      this.setState({ sort: "descending" });
      //sorting by last name
      let descendingSortLast = this.state.results.sort((a, b) => b.name.last.localeCompare(a.name.last))
      this.setState({ results: descendingSortLast })
      //sorting by first name
      // let descendingSortFirst = this.state.results.sort((a, b) => b.name.first.localeCompare(a.name.first))
      // // console.log("what is descending", descendingSort)
      // this.setState({ results: descendingSortFirst })
    }
  };


  render() {
    console.log(this.state)
    
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList
          results={this.state.results}
          search={this.state.search}
          sortList={this.sortList}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
