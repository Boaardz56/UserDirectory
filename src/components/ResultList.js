import React from "react";

function ResultList(props) {
  // console.log("What is props", props.results)
  return (
     <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Picture </th>
            <th id="name">First Name</th>
            <th scope="col" onClick={props.sortList}>
              Last Name
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>

          </tr>
        </thead>
        <tbody>
          {props.results.map(function (item, i) {
            // console.log("What is item", item)
            return (
              <tr key={i}>
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