import React, { useState, useCallback } from "react";
interface Props {
  items: string[];
  onDropClick: (service: string) => void;
  name: string;
}
const CustomDropdown = ({ items, onDropClick, name }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="tw-w-64 tw-border-solid tw-border-2 tw-rounded-2xl tw-inline-block"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        {name}
      </button>
      <div className="tw-absolute">
        {open && (
          <div
            className="tw-border-solid tw-rounded-xl tw-w-64 tw-text-center tw-border-2"
            style={{ backgroundColor: "#F7F7F7" }}
          >
            {items.map((item, i) => (
              <button
                key={i}
                style={{ backgroundColor: "#F7F7F7" }}
                className="tw-rounded-xl tw-border-solid pt-1 tw-block tw-text-center tw-w-60 tw-z-50 tw-opacity-100"
                onClick={() => onDropClick(item ?? "")}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
