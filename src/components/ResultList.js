import React from "react";

function ResultList(props) {
  return (
     <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Picture </th>
            {/* {props.results.map(result => (
            <th scope="col" className="img-container" key={result.id}>
              <img alt={result} className="img-fluid" src={result.picture.medium} />
            </th>
            ))} */}
            <th id="name">First Name</th>
            <th scope="col">
              {/* <button className="btn-info" onClick={this.sortList} type="button"> Last Name</button> */}
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>

          </tr>
        </thead>
        <tbody>
          {/* {this.props.results.map(function (item) {
            return (
              <tr key={item.name.last}>
                <td>
                  <img src={item.picture.thumbnail} />
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
          })} */}
        </tbody>
      </table>
    </div>
  );
}


// class ResultList extends Component {
//   state = {
//     search: "",
//     sort: "",
//     results: []
//   };

// }

// render() {
//   return (
//     <div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th> Picture </th>
//             <th scope="col" className="img-container" key={result.id}>
//               <img alt={result.title} className="img-fluid" src={result.images.original.url} />
//             </th>
//             <th id="name">First Name</th>
//             <th scope="col">
//               <button className="btn-info" onClick={this.sortList} type="button"> Last Name</button>
//             </th>
//             <th scope="col">Email</th>
//             <th scope="col">Phone</th>
//             <th scope="col">Age</th>
//       ))
//     </tr>
//         </thead>
//         <tbody>
//           {this.props.results.map(function (item) {
//             return (
//               <tr key={item.name.last}>
//                 <td>
//                   <img src={item.picture.thumbnail} />
//                 </td>
//                 <td>
//                   {item.name.first}
//                 </td>
//                 <td>
//                   {item.name.last}
//                 </td>
//                 <td>
//                   {item.email}
//                 </td>
//                 <td>
//                   {item.phone}
//                 </td>
//                 <td>
//                   {item.registered.age}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };


export default ResultList;