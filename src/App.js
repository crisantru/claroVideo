import React, { Fragment } from "react";

import Header from "./components/Header";
//import MainContent from "./components/MainContent"
import Footer from "./components/Footer";
import InputSearch from "./components/movies/InputSearch";
import Movie from "./components/movies/Movie";
//import CheckBoxList from "./components/CheckBoxList"

//import Example from './components/Example';

function App() {
  return (
    <div className="">
      <Header />
      <Fragment>
        <InputSearch />
        <Movie />
      </Fragment>
      <Footer />
    </div>
  );
}

export default App;
