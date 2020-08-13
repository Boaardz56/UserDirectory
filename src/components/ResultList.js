import React from "react";

function ResultList(props) {
  console.log("What is props", props.results)
  return (
     <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Picture </th>
            <th id="name">First Name</th>
            <th scope="col">
              Last Name
              {/* <button className="btn-info" onClick={this.sortList} type="button"> Last Name</button> */}
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>

          </tr>
        </thead>
        {/* {props.results.map(result => (
            <th scope="col" className="img-container" key={result.id}>
              <img alt={result} className="img-fluid" src={result.picture.medium} />
            </th>
            ))} */}
        <tbody>
          {props.results.map(function (item) {
            console.log("What is item", item)
            return (
              <tr>
                <td>
                  <img src={item.picture.medium} />
                </td>
                 <td>
                   {item.name.first}
               </td>
                 <td>
                   {item.name.last}
                 </td>
                 <td>
                   {item.email}
               </td>
                 <td>
                  {item.phone}
                 </td>
                 <td>
                   {item.registered.age}
                 </td>
             </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default ResultList;