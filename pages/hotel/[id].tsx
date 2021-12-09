import React, { FC, useMemo } from "react";
import { Footer, Header, SearchBar } from "components";
import { hotelServices } from "static/hotelServices";
import SimpleImageSlider from "react-simple-image-slider";
import axios, { AxiosResponse } from "axios";

type service = {
  readonly label: string;
  readonly imgUrl: string;
};

const images = [
  { url: "/images/starter-hotel.png" },
  { url: "/images/starter-hotel.png" },
  { url: "/images/starter-hotel.png" },
  { url: "/images/starter-hotel.png" },
  { url: "/images/starter-hotel.png" },
  { url: "/images/starter-hotel.png" },
];

const HotelDetailsPage: FC = () => {
  const mockServiceData: Array<service> = useMemo(
    () => [
      { label: "Housekeeping", imgUrl: hotelServices["housekeeping"] },
      { label: "Child care", imgUrl: hotelServices["childcare"] },
      { label: "Airport transfer", imgUrl: hotelServices["airport-transfer"] },
      { label: "Car rental", imgUrl: hotelServices["car-rental"] },
      { label: "Food delivery", imgUrl: hotelServices["food-delivery"] },
      { label: "Wait staff", imgUrl: hotelServices["waitstaff"] },
      { label: "Bowling", imgUrl: hotelServices["bowling"] },
      { label: "Swimming pool", imgUrl: hotelServices["swimming-pool"] },
      { label: "gym", imgUrl: hotelServices["gym"] },
    ],
    []
  );

  return (
    <React.Fragment>
      <Header activeTab="Home" />
      <div className="container tw-mt-10 mb-5">
        <p className="text-black tw-text-3xl mb-2">Ultimate Villa</p>
        <p className="text-black tw-text-md mb-4 text-decoration-underline">
          Dubai, United Arab Emirates
        </p>
        <div className="position-relative mt-4 tw-pb-16">
          <img alt="starter-hotel w-100" src="/images/starter-hotel.png" />
          <SearchBar
            onSubmit={() => {
              return 1;
            }}
          />
        </div>

        <div className="row mt-5">
          <div className="col-7">
            <p className="text-black tw-text-3xl my-3">
              Luxury stay in Dubai, United Arab Emirates
            </p>
            <p className="text-black tw-text-lg tw-mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              asperiores aut consequatur dicta doloremque ea et exercitationem
              explicabo facilis hic magni, molestiae, nam necessitatibus numquam
              quidem quisquam quos rerum vero!
            </p>

            <SimpleImageSlider
              style={{ marginTop: 36 }}
              width={700}
              height={400}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <div className="col-5 px-5">
            <div
              className="mx-5 p-4"
              style={{
                borderRadius: 8,
                boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="d-flex justify-content-between">
                <p className="text-black tw-text-sm tw-mb-4 text-decoration-underline">
                  $9,7667 * 7 nights
                </p>
                <p className="text-black tw-text-md tw-mb-4">$66,704</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-black tw-text-sm tw-mb-4 text-decoration-underline">
                  $9,7667 * 7 nights
                </p>
                <p className="text-black tw-text-md tw-mb-4">$66,704</p>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <p className="text-black tw-text-lg text-decoration-underline">
                  Total
                </p>
                <p className="text-black tw-text-md">$66,704</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-black tw-text-3xl mt-5 mb-2">Add on services</p>
        <p className="text-black tw-text-lg mb-4">
          To feel more comfortable in out hotel, we provide you with following
          add on services
        </p>
        <div className="row">
          {mockServiceData &&
            mockServiceData.map((n: service, i) => (
              <div key={i} className="col-3 tw-mb-8">
                <img alt="service" src={n.imgUrl} />
                <p className="text-black tw-text-lg mt-3">{n.label}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default HotelDetailsPage;
