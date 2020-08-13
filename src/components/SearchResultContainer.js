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
      let ascendingSort = this.state.results.sort((a, b) => a.name.last.localeCompare(b.name.last))
      // console.log("Ascending list", ascendingSort)
      this.setState({ results: ascendingSort })
    } else if (this.state.sort === "ascending" ||
      this.state.sort !== "descending") {
      this.setState({ sort: "descending" });
      let descendingSort = this.state.results.sort((a, b) => b.name.last.localeCompare(a.name.last))
      console.log("what is descending", descendingSort)
      this.setState({ results: descendingSort })
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
          sortList={this.sortList}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
