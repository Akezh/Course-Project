import React from "react";
import {
  Header,
  SearchPage,
  Footer,
} from "components";

// import SearchPage from '../components/pages/SearchPage/component'

const search = () => (
  <div>
    <Header activeTab="Home" />
    <SearchPage />
    <Footer />
  </div>
);

export default search;
