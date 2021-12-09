import React, { FC, useMemo, useState, useContext } from "react";
import { Footer, Header, SearchBar } from "components";
import { hotelServices } from "static/hotelServices";
import SimpleImageSlider from "react-simple-image-slider";
import axios, { AxiosResponse } from "axios";
import { hotelImageService } from "static/hotelImageService";
import {
  InputGroup,
  FormControl,
  Modal,
  Dropdown,
  Button,
} from "react-bootstrap";
import { UserContext } from "components";

type service = {
  readonly label: string;
  readonly imgUrl: string;
};

const images = [{ url: "/images/hotels/10.png" }];

const HotelDetailsPage: FC = () => {
  const mockServiceData: Array<service> = useMemo(
    () => [
      //   { label: "Housekeeping", imgUrl: hotelServices["housekeeping"] },
      { label: "Child care", imgUrl: hotelServices["childcare"] },
      //   { label: "Airport transfer", imgUrl: hotelServices["airport-transfer"] },
      //   { label: "Car rental", imgUrl: hotelServices["car-rental"] },
      { label: "Food delivery", imgUrl: hotelServices["food-delivery"] },
      //   { label: "Wait staff", imgUrl: hotelServices["waitstaff"] },
      //   { label: "Bowling", imgUrl: hotelServices["bowling"] },
      { label: "Swimming pool", imgUrl: hotelServices["swimming-pool"] },
      //   { label: "gym", imgUrl: hotelServices["gym"] },
      { label: "Meal plan", imgUrl: hotelServices["meal-plan"] },
    ],
    []
  );

  const [user, setUser] = useContext(UserContext);

  const [showCreateNewBookingModal, setShowCreateNewBookingModal] =
    useState(false);
  const handleCloseCreateNewBookingModal = () =>
    setShowCreateNewBookingModal(false);

  const [availableRooms, setAvailableRooms] = useState<Array<string>>([]);
  const handleShowCreateNewBookingModal = () => {
    axios({
      method: "post",
      url: "https://swe-project-dream-team.herokuapp.com/deskclerk/bookings/getRooms",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        id: 10,
      },
    })
      .then((response: AxiosResponse<any>) => {
        const { data } = response;
        console.log(data);

        setAvailableRooms(data);
      })
      .catch((error) => {
        console.log("error", error);
      });

    setShowCreateNewBookingModal(true);
  };
  return (
    <React.Fragment>
      <Header activeTab="Home" />
      <div className="container tw-mt-10 mb-5">
        <p className="text-black tw-text-3xl mb-2">Garden Park Inn Hotel</p>
        <p className="text-black tw-text-md mb-4 text-decoration-underline">
          Almaty, Kazakhstan
        </p>
        <div className="position-relative mt-4 tw-pb-16">
          <img alt="starter-hotel w-100" src={hotelImageService[10]} />
          <SearchBar
            onSubmit={() => {
              return 1;
            }}
          />
        </div>

        <div className="row mt-5">
          <div className="col-7">
            <p className="text-black tw-text-3xl my-3">
              Luxury stay in Almaty, Kazakhstan
            </p>
            <p className="text-black tw-text-lg tw-mb-4">
              Business hotel Garden Park Inn is located in the middle of the
              businesslike, historical and cultural-entertaining life of the
              Almaty city. Being in the middle of the city, guests of the hotel
              can allow themselves to organize business meetings and to spend
              leisure time of main sights of the city.
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
                  $11 * 7 nights
                </p>
                <p className="text-black tw-text-md tw-mb-4">$77</p>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <p className="text-black tw-text-lg text-decoration-underline">
                  Total
                </p>
                <p className="text-black tw-text-md">$77</p>
              </div>
              <div>
                <Button
                  className="tw-block tw-ml-24 tw-mt-16"
                  onClick={handleShowCreateNewBookingModal}
                >
                  {" "}
                  Make a booking
                </Button>
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
      <Modal
        show={showCreateNewBookingModal}
        onHide={handleCloseCreateNewBookingModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Booking</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form action="https://" method="POST">
            <div>
              <div className="tw-ml-10">Hotel ID:</div>
              <input
                className="tw-border-2 tw-ml-10 tw-rounded-sm tw-my-2 tw-w-96"
                placeholder=""
                type="number"
                name="HotelID"
                value={10}
              ></input>
            </div>
            <div>
              <div className="tw-ml-10">User ID:</div>
              <input
                className="tw-border-2 tw-ml-10 tw-rounded-sm tw-my-2 tw-w-96"
                placeholder="Enter user ID"
                type="number"
                name="UserID"
              ></input>
            </div>
            <div className="row tw-ml-7">
              <div className="col-6">
                <div className="">Room: </div>
                <input
                  className="tw-border-2 tw-rounded-sm tw-my-2 tw-w-40"
                  placeholder="Enter Room No"
                  type="text"
                  name="Room"
                ></input>
                <div>People Count: </div>
                <input
                  className="tw-border-2 tw-rounded-sm tw-my-2 tw-w-40"
                  placeholder="Enter People Count"
                  type="number"
                  name="PeopleCount"
                ></input>
              </div>
              <div className="col-6">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Available Rooms
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {availableRooms.map((item, ind) => (
                      <Dropdown.Item key={ind}>
                        <input type="radio" name="room" value={item}></input>
                        <label>{item}</label>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="tw-ml-10 tw-my-3">
              <div>
                <div className="tw-inline"> Arrival date: </div>
                <input
                  className="tw-inline tw-float-right tw-mr-6"
                  type="date"
                  name="BookingStartDate"
                ></input>
              </div>
            </div>
            <div className="tw-ml-10 tw-my-3">
              <div>
                <div className="tw-inline"> Departure date: </div>
                <input
                  className="tw-inline tw-float-right tw-mr-6"
                  type="date"
                  name="BookingEndDate"
                ></input>
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              className="tw-w-28 tw-ml-44"
              // onClick={}
            >
              Submit
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
export default HotelDetailsPage;
