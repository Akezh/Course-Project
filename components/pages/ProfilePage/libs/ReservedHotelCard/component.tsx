import React, { FC } from "react";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import { Props } from "./props";

export const ReservedHotelCard: FC<Props> = ({
  imageUrl,
  info,
  date,
  location,
  name,
}: Props) => {
  return (
    <Link href={imageUrl}>
      <div
        className="mt-4 p-4"
        style={{
          borderRadius: 16,
          boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <img
                alt="avatar"
                src={imageUrl}
                style={{
                  borderRadius: 12,
                  maxHeight: 76,
                  maxWidth: 136,
                  marginRight: 24,
                }}
              />
            </div>
            <div>
              <p className="tw-font-bold tw-text-xl">{name}</p>
              <p className="tw-text-md">{location}</p>
              <p className="tw-text-lg">{info}</p>
            </div>
          </div>
          <div className="row">
            <p className="tw-font-bold tw-text-xl">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
