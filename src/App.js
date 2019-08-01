import React, { Fragment } from "react";

import Header from "./components/Header";
import InputSearch from "./components/movies/InputSearch";
import Movie from "./components/movies/Movie";

function App() {
  return (
    <div className="">
      <Header />
      <Fragment>
        <InputSearch />
        <Movie />
      </Fragment>
    </div>
  );
}

export default App;
