import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { HotelCard } from "../../organisms/HotelCard";
import { Footer, Header } from "components";
import mock from "./mock";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

interface hotelData {
  readonly name?: string; // SALAM ALEIKYM
  readonly description?: string;
  readonly price?: number;
  readonly imageUrl?: string;
  readonly country?: string;
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
        price: 228,
        imageUrl: "images/starter-hotel.png",
        country: "Afghanistan",
        onClick: () => {},
      },
      {
        name: "qwe",
        description: "qwee",
        price: 2282,
        country: "Kazakhstan",
        imageUrl: "images/starter-hotel.png",
        onClick: () => {},
      },
    ];

    setServerData(dataFromReq);
  }, []);

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
                  <Dropdown.Item
                    eventKey={i}
                    onClick={(e) => {
                      const node = e.target as HTMLElement;
                      push(node.innerText);
                    }}
                  >
                    {n}
                  </Dropdown.Item>
                </div>
              ))}
            </DropdownButton>
          </div>
          <div className="tw-inline-block">
            {features.map((item, i) => (
              <button
                key={i}
                className="tw-font-bold tw-inline-block tw-ml-4 btn btn-outline-secondary"
                onClick={() => {
                  // console.log("CL1k");

                  let arr: string[] = [];
                  for (let str of features) {
                    if (str === item) {
                      continue;
                    }
                    arr.push(str);
                  }
                  console.log(arr);
                  setFeatures(arr);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="tw-font-bold tw-inline-block tw-ml">
            <div>Max cost per day</div>
            <input
              type="number"
              placeholder="  cost"
              onChange={(e) => setCost(Number(e.target.value))}
              className="form-control"
            ></input>
          </div>
          <div className="tw-font-bold tw-inline-block tw-ml-10">
            <div>Filter</div>
            <DropdownButton as={ButtonGroup} variant="primary" title={srt}>
              {sortBy.map((n, i) => (
                <div key={i}>
                  <Dropdown.Item
                    eventKey={i}
                    onClick={(e) => {
                      const node = e.target as HTMLElement;
                      setSort(node.innerText);
                      // let arr = features.slice(0);
                      // if (srt === "Alphabetically Descending") {
                      //   arr.sort().reverse()
                      //   setFeatures(arr)
                      // } else if (srt === "Alphabetically Ascending") {
                      //   arr.sort()
                      //   setFeatures(arr)
                      // } else if (srt === "Cost Descending") {
                      //   arr.sort()
                      // } else if (srt === "Cost Ascending") {
                      // }
                    }}
                  >
                    {n}
                  </Dropdown.Item>
                </div>
              ))}
            </DropdownButton>
          </div>
          {/* <div className="tw-font-bold mt-4">
            <button
              onClick={search}
              className="btn btn-lg btn-outline-dark w-25"
            >
              Search
            </button>
          </div> */}
          {/*<div*/}
          {/*  className="w-100 tw-my-5"*/}
          {/*  style={{ height: 1, backgroundColor: "black" }}*/}
          {/*></div>*/}
        </div>
        <div className="mt-5">
          <div className="row">
            {mock[0] &&
              mock
                .filter((item) => item.name?.toLowerCase().includes(hotelName))
                .filter((item) => item.region?.toLowerCase().includes(country))
                .filter((item) => {
                  let bool = true;
                  if (features.length === 0) {
                    return true;
                  }
                  features.map((feature) => {
                    if (!item.features?.includes(feature)) {
                      bool = false;
                    }
                  });
                  return bool;
                })
                .filter((item) => {
                  if (cost !== 0) {
                    return (item?.price ?? 0) < cost;
                  }
                  return true;
                })
                .sort((a, b) => {
                  if (srt === "Alphabetically Descending") {
                    if (a.name < b.name) {
                      return 1;
                    } else if (a.name > b.name) {
                      return -1;
                    } else {
                      return 0;
                    }
                  } else if (srt === "Alphabetically Ascending") {
                    if (a.name > b.name) {
                      return 1;
                    } else if (a.name < b.name) {
                      return -1;
                    } else {
                      return 0;
                    }
                  } else if (srt === "Cost Ascending") {
                    return a.price - b.price;
                  } else if (srt === "Cost Descending") {
                    return b.price - a.price;
                  }
                  if (a.name > b.name) {
                    return 1;
                  } else if (a.name < b.name) {
                    return -1;
                  } else {
                    return 0;
                  }
                })
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
