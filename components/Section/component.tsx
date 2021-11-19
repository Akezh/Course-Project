import React, { FC } from "react";

import { SectionHeader } from "./libs/SectionHeader";
import { Props } from "./props";
import { AnimationWrapper } from "../AnimationWrapper";

export const Section: FC<Props> = ({
  title,
  description,
  children,
  ...rest
}: Props) => {
  return (
    <>
      <AnimationWrapper time={0.7}>
        <SectionHeader title={title} description={description} {...rest} />
      </AnimationWrapper>
      {children}
    </>
  );
};
