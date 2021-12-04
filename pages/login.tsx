import React from "react";
import { Header, Footer, LoginPage } from "../components";

const IndexPage = () => (
  <div>
    <Header activeTab="Home" />
    <LoginPage />
    <Footer />
  </div>
);

export default IndexPage;
