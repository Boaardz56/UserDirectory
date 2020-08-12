import React from "react";

function ResultList(props) {
  return (
    <table class="table table-striped">
  <thead>
    <tr>
    {props.results.map(result => (
        <th scope="col" className="img-container" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </th>
        <th scope="col">
        </th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    <ul className="list-group">
      
    </ul>
  );
}

export default ResultList;
