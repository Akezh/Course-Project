import React, { FC } from "react";

import { StatusTag } from "../StatusTag";

export const Header: FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-between md:tw-mb-16 sm:tw-mb-8 xs:tw-mb-4">
      <span style={{ color: "#77FE9E" }} className="header-name">
        By <span className="font-bold">SWE Dream Team</span>
      </span>
      <StatusTag />
    </div>
  );
};
