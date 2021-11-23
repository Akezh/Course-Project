import React from "react";
import {
  Header,
  SearchPage,
  Footer,
} from "components";

const search = () => (
  <div>
    <Header activeTab="Home" />
    <SearchPage />
    <Footer />
  </div>
);

export default search;
