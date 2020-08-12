import React from "react";
//handleInputChange will filter the employees by last name or first name
function SearchForm(props) {
  return (
    <form className="text-center">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={this.handleInputChange.bind(this)}
          value={this.state.search}
          name="search"
          type="text"
          className="text-center"
          placeholder="Search by Last Name"
        />
      </div>
    </form>
  );
}

export default SearchForm;
