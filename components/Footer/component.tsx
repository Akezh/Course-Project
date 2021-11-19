import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center p-4"
      style={{ backgroundColor: "#28282C", height: 128 }}
    >
      <p className="tw-text-sm text-center" style={{ color: "#A2A0A8" }}>
        Designed & Built by SWE Team
      </p>
    </div>
  );
};
