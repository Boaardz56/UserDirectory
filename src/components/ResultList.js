import React, { Component } from "react";

class ResultList extends Component {
  state = {
    search: "",
    sort: "",
    results: []
  };

}

render() {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Picture </th>
            <th scope="col" className="img-container" key={result.id}>
              <img alt={result.title} className="img-fluid" src={result.images.original.url} />
            </th>
            <th id="name">First Name</th>
            <th scope="col">
              <button className="btn-info" onClick={this.sortList} type="button"> Last Name</button>
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
      ))}
    </tr>
        </thead>
        <tbody>
          {this.props.results.map(function (result) {
            return (
              <tr key={result.name.last}>
                <td>
                  <img src={result.picture.thumbnail} />
                </td>
                <td>
                  {result.name.first}
                </td>
                <td>
                  {result.name.last}
                </td>
                <td>
                  {result.email}
                </td>
                <td>
                  {result.phone}
                </td>
                <td>
                  {result.registered.age}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultList;
