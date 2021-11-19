import React, { FC } from "react";

import { Props } from "./props";

export const Container: FC<Props> = ({ children, containerStyle, ...rest }: Props) => {
  return (
    <div {...rest}>
      <div style={containerStyle} className="container tw-mx-auto xl:tw-pt-16 lg:tw-pt-12 tw-pt-8 sm:tw-pb-24 tw-pb-16">
        {children}
      </div>
    </div>
  );
};
