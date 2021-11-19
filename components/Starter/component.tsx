import React, { FC } from "react";

import { AnimationWrapper, Container } from "components";
import { Header } from "./libs/Header";
import { PersonalInfo } from "./libs/PersonalInfo";

export const Starter: FC = () => {
  return (
    <Container style={{ backgroundColor: "#28282C"}} containerStyle={{ paddingBottom: '0px !important' }}>
      <AnimationWrapper time={1.2}>
        <Header />
      </AnimationWrapper>
      <PersonalInfo />
    </Container>
  );
};
