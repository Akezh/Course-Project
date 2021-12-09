import React, { FC } from "react";
import { Props } from "./props";
import { hotelImageService } from "static/hotelImageService";
export const HotelCard: FC<Props> = ({
  name,
  price,
  description,
  imageUrl,
  onClick,
  ...rest
}: Props) => {
  return (
    <div {...rest}>
      <div style={{ borderRadius: 16, border: "none" }}>
        <img
          src={imageUrl}
          className="card-img-top tw-mb-2"
          alt="image"
          style={{ height: 144, borderRadius: 9 }}
        />
        <div className="card-body d-flex justify-content-between">
          <div>
            <p className="card-text text-danger tw-font-semibold">{price}$</p>
            <p className="card-text text-dark tw-font-semibold tw-mt-2">
              {name}
            </p>
            <p className="card-text" style={{ color: "grey" }}>
              {description}
            </p>
          </div>
          <button
            type="button"
            className="btn btn-outline-dark"
            style={{ height: 40 }}
            onClick={onClick}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
