import React, { FC } from "react";
import { Carousel } from "react-bootstrap";
import { hotelChain } from "./mock";
import { Props } from "./props";

export const HotelsCarousel: FC<Props> = ({ imageHeight, ...rest }: Props) => {
  return (
    <div {...rest}>
      <Carousel>
        {hotelChain.map((hotel, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              style={{ height: imageHeight }}
              src={hotel.imageUrl}
              alt="slide"
            />
            <Carousel.Caption>
              <h3 className="tw-font-bold tw-text-2xl mb-2">{hotel.name}</h3>
              <p className="tw-text-2xl mb-3">{hotel.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
