import React, { FC, useCallback, useEffect, useState } from "react";
import { Footer, Header, HotelCard, SearchBar } from "components";
import { useRouter } from "next/router";
import axios from "axios";
import { hotelImageService } from "static/hotelImageService";

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
  const [hotels, setHotels] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("http://swe-project-dream-team.herokuapp.com/getHotels")
      .then((response) => {
        setHotels(response.data);
        //console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <React.Fragment>
      <Header activeTab="Home" />
      <div className="container my-4">
        <p
          className="tw-font-bold tw-text-3xl text-center mb-5"
          style={{ cursor: "pointer" }}
        >
          Dream hotels & SPA
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
            {hotels.map((hotel, i) => {
              let classParam;
              if (i % 3 === 0) {
                classParam = "col-4 tw-mt-10 tw-pl-40";
              } else if (i % 3 === 1) {
                classParam = "col-4 tw-mt-10 tw-px-20";
              } else if (i % 3 === 2) {
                classParam = "col-4 tw-mt-10 tw-pr-40";
              }

              return (
                <HotelCard
                  className={classParam}
                  name={hotel.name}
                  description={hotel.region}
                  price={hotel.price}
                  imageUrl={hotelImageService[hotel.image]}
                  onClick={handleClick}
                  key={hotel.name}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
