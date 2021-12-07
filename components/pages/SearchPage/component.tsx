import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { HotelCard } from "../../organisms/HotelCard";
import { Footer, Header } from "components";

import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

interface hotelData {
  readonly name?: string; // SALAM ALEIKYM
  readonly description?: string;
  readonly price?: string;
  readonly imageUrl?: string;
  readonly onClick?: () => void;
}

export const SearchPage: FC = () => {
  const [hotelName, setHotelName] = useState<string>("");
  const [country, setCountry] = useState("");
  const [features, setFeatures] = useState<Array<string>>([]);
  const [cost, setCost] = useState(0);
  const [srt, setSrt] = useState("Sort By");
  const services = useMemo(
    () => ["SPA", "Swimming Pool", "Bowling", "Yacht"],
    []
  );
  const sortBy = useMemo(
    () => [
      "Alphabetically Ascending",
      "Alphabetically Descending",
      "Cost Ascending",
      "Cost Descending",
    ],
    []
  );

  const [serverData, setServerData] = useState<hotelData[]>([]);

  const setSort = useCallback(
    (sortbythis: string) => {
      setSrt(sortbythis);
    },
    [srt]
  );

  const push = useCallback(
    (feat: string) => {
      const hasFeature = features.find((n) => n === feat);
      if (!hasFeature) {
        setFeatures((prev) => [...prev, feat]);
        console.log(features);
      }
    },
    [features]
  );

  useEffect(() => {
    let dataFromReq: hotelData[] = [
      {
        name: "ASD",
        description: "ASDD",
        price: "228$",
        imageUrl: "images/starter-hotel.png",
        onClick: () => {},
      },
      {
        name: "qwe",
        description: "qwee",
        price: "2282$",
        imageUrl: "images/starter-hotel.png",
        onClick: () => {},
      },
    ];

    setServerData(dataFromReq);
  }, []);

  let search = () => {
    console.log("search clicked");
  };

  return (
    <>
      <Header activeTab="Search"></Header>
      <div className="container tw-mt-10">
        <div>
          <div className="tw-font-bold tw-inline-block mb-4">
            <div>Hotel Name</div>
            <input
              type="text"
              placeholder="  hotel name"
              onChange={(e) => setHotelName(e.target.value)}
              className="form-control mt-2"
            ></input>
          </div>
          <div className="tw-font-bold tw-inline-block tw-ml-10">
            <div>Country</div>
            <input
              type="text"
              placeholder="  country"
              onChange={(e) => setCountry(e.target.value)}
              className="form-control mt-2"
            ></input>
          </div>
          <div className="tw-font-bold tw-inline-block tw-ml-10">
            <div className="mb-2">Features</div>
            <DropdownButton as={ButtonGroup} variant="primary" title="Features">
              {services.map((n, i) => (
                <div key={i}>
                  <Dropdown.Item eventKey={i}>{n}</Dropdown.Item>
                </div>
              ))}
            </DropdownButton>
          </div>
          <div className="tw-inline-block">
            {features.map((item, i) => (
              <div
                key={i}
                className="tw-font-bold tw-inline-block tw-ml-4 btn btn-outline-secondary"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="tw-font-bold tw-inline-block tw-ml">
            <div>Cost range</div>
            <input
              type="number"
              placeholder="  cost"
              onChange={(e) => setCost(Number(e.target.value))}
              className="form-control"
            ></input>
          </div>
          <div className="tw-font-bold tw-inline-block tw-ml-10">
            <div>Filter</div>
            <DropdownButton as={ButtonGroup} variant="primary" title="Features">
              {sortBy.map((n, i) => (
                <div key={i}>
                  <Dropdown.Item eventKey={i}>{n}</Dropdown.Item>
                </div>
              ))}
            </DropdownButton>
          </div>
          <div className="tw-font-bold mt-4">
            <button
              onClick={search}
              className="btn btn-lg btn-outline-dark w-25"
            >
              Search
            </button>
          </div>
          {/*<div*/}
          {/*  className="w-100 tw-my-5"*/}
          {/*  style={{ height: 1, backgroundColor: "black" }}*/}
          {/*></div>*/}
        </div>
        <div className="mt-5">
          <div className="row">
            {serverData[0] &&
              serverData
                .filter((item) => item.name?.startsWith(hotelName))
                .map((item, i) => (
                  <HotelCard
                    key={i}
                    className="col-3"
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    onClick={item.onClick}
                  />
                ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default SearchPage;
