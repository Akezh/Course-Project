import React from "react";
import { Header, Footer, RegisterPage } from "../components";

const IndexPage = () => (
  <div>
    <Header activeTab="Home" />
    <RegisterPage />
    <Footer />
  </div>
);

export default IndexPage;
