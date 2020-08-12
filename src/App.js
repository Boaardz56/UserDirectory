import React from "react";
import SearchResultContainer from "./components/SearchResultContainer";

function App() {
  return (
    <div>
      <Header />
      <div className="app container-fluid">
        <div className="row">
          <div className="col-12">
            <SearchResultContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
