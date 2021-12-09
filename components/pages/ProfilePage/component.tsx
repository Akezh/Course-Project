import React, { FC } from "react";
import { Footer, Header } from "components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { avatarService } from "static/avatarService";
import { ReservedHotelCard } from "./libs/ReservedHotelCard";
import { previousHotels, upcomingHotels } from "./mock";

export const ProfilePage: FC = () => {
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
                {upcomingHotels.map((n, i) => (
                  <ReservedHotelCard
                    key={i}
                    imageUrl={n.imageUrl}
                    name={n.name}
                    location={n.location}
                    info={n.info}
                    date={n.date}
                  />
                ))}
              </TabPanel>
              <TabPanel>
                {previousHotels.map((n, i) => (
                  <ReservedHotelCard
                    key={i}
                    imageUrl={n.imageUrl}
                    name={n.name}
                    location={n.location}
                    info={n.info}
                    date={n.date}
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
