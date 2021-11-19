import React, { FC } from "react";

import { Props } from "./props";

export const SectionHeader: FC<Props> = ({
  title,
  description,
  ...rest
}: Props) => {
  return (
    <div {...rest}>
      <h2 className="tw-mb-8 tw-text-2xl tw-font-regular md:tw-text-sectionHeader text-white">
        {title}
      </h2>
      <p className="tw-mb-8 tw-text-lg tw-font-regular text-white">
        {description}
      </p>
    </div>
  );
};
