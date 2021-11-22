import React from "react";
import {
  Header,
  MainPage,
  Footer,
} from "../components";

const IndexPage = () => (
  <div>
    <Header activeTab="Home" />
    <MainPage />
    <Footer />
  </div>
);

export default IndexPage;
