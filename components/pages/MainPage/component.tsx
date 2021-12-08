import React, { FC, useCallback } from "react";
import { Footer, Header, HotelCard, SearchBar } from "components";
import { useRouter } from "next/router";

export const MainPage: FC = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/hotel/1");
  }, []);

  const onSearchClick = useCallback((location, startDate, endDate, guests) => {
    console.log("location", location);
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    console.log("guests", guests);
  }, []);

  return (
    <React.Fragment>
      <Header activeTab="Home" />
      <div className="container my-4">
        <p
          className="tw-font-bold tw-text-3xl text-center mb-5"
          style={{ cursor: "pointer" }}
        >
          Rexar hotels & SPA
        </p>

        <div className="position-relative mt-4 tw-pb-16">
          <img alt="starter-hotel w-100" src="/images/starter-hotel.png" />
          <SearchBar onSubmit={onSearchClick} />
        </div>

        <div className="tw-mt-20">
          <p className="tw-font-bold tw-text-4xl tw-mb-2 tw-ml-3 text-center">
            Entire city of choice
          </p>
          <div className="row">
            <HotelCard
              className="col-4 tw-mt-10 tw-pl-40"
              name="Mountain Resort"
              description="Booking ID: 984554"
              price="$800.00"
              imageUrl="images/starter-hotel.png"
              onClick={handleClick}
            />
            <HotelCard
              className="col-4 tw-mt-10 tw-px-20"
              name="Mountain Resort"
              description="Booking ID: 984554"
              price="$800.00"
              imageUrl="images/starter-hotel.png"
              onClick={handleClick}
            />
            <HotelCard
              className="col-4 tw-mt-10 tw-pr-40"
              name="Mountain Resort"
              description="Booking ID: 984554"
              price="$800.00"
              imageUrl="images/starter-hotel.png"
              onClick={handleClick}
            />
            <HotelCard
              className="col-4 tw-mt-10 tw-pl-40"
              name="Mountain Resort"
              description="Booking ID: 984554"
              price="$800.00"
              imageUrl="images/starter-hotel.png"
              onClick={handleClick}
            />
            <HotelCard
              className="col-4 tw-mt-10 tw-px-20"
              name="Mountain Resort"
              description="Booking ID: 984554"
              price="$800.00"
              imageUrl="images/starter-hotel.png"
              onClick={handleClick}
            />
            <HotelCard
              className="col-4 tw-mt-10 tw-pr-40"
              name="Mountain Resort"
              description="Booking ID: 984554"
              price="$800.00"
              imageUrl="images/starter-hotel.png"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
