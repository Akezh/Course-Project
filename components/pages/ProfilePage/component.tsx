import React, { FC, useState, useEffect } from "react";
import { Footer, Header } from "components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { avatarService } from "static/avatarService";
import { ReservedHotelCard } from "./libs/ReservedHotelCard";
import { previousHotels, upcomingHotels } from "./mock";
import axios from "axios";
import { hotelImageService } from "static/hotelImageService";
export const ProfilePage: FC = () => {
  const [upcoming, setUpcoming] = useState<any[]>([]);
  const [previous, setPrevious] = useState<any[]>([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://swe-project-dream-team.herokuapp.com/guest/getUpcoming",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        //HARDCODED VALUE
        id: 2,
      },
    })
      .then((response) => {
        setUpcoming(response.data);
        console.log("response upcoming", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
    axios({
      method: "post",
      url: "https://swe-project-dream-team.herokuapp.com/guest/getPrevious",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        //HARDCODED VALUE
        id: 2,
      },
    })
      .then((response) => {
        setPrevious(response.data);
        console.log("response prev", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <React.Fragment>
      <Header activeTab="Home" />
      <div className="container my-5">
        <div className="row">
          <div className="col-3">
            <div className="d-flex align-items-center">
              <img
                className="mr-4"
                alt="avatar"
                src={avatarService[1]}
                style={{ borderRadius: "50%", maxHeight: 76 }}
              />
              <p className="tw-font-bold tw-text-xl tw-ml-4">Roman Hossein</p>
            </div>
          </div>
          <div className="col-9">
            <Tabs>
              <TabList>
                <Tab>Upcoming</Tab>
                <Tab>Previous</Tab>
              </TabList>

              <TabPanel>
                {upcoming.map((n, i) => (
                  <ReservedHotelCard
                    key={i}
                    imageUrl={hotelImageService[n.image]}
                    name={n.name}
                    location={n.location}
                    info={n.info}
                    date={n.fromDate}
                    dueDate={n.toDate}
                  />
                ))}
              </TabPanel>
              <TabPanel>
                {previous.map((n, i) => (
                  <ReservedHotelCard
                    key={i}
                    imageUrl={hotelImageService[n.image]}
                    name={n.name}
                    location={n.location}
                    info={n.info}
                    date={n.fromDate}
                    dueDate={n.toDate}
                  />
                ))}
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
