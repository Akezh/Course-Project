import React, { FC, useContext, useEffect, useState } from "react";
import { Footer, Header } from "components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { avatarService } from "static/avatarService";
import { ReservedHotelCard } from "./libs/ReservedHotelCard";
import { upcomingHotels } from "./mock";
import { UserContext } from "components";
import axios, { AxiosResponse } from "axios";

export const ProfilePage: FC = () => {
  const [user, setUser] = useContext(UserContext);
  interface prevHotel {
    image: string;
    name: string;
    location: string;
    fromDate: string;
    toDate: string;
    info: string;
    price: number;
  }
  // let previousHotels: prevHotel[] = [];
  const [prevHotels, setPrevHotels] = useState<Array<prevHotel>>([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://swe-project-dream-team.herokuapp.com/guest/getPrevious",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        id: user.id,
      },
    })
      .then((response: AxiosResponse<any>) => {
        const { data } = response;
        console.log(data);

        setPrevHotels(
          data
          //   {
          //   image: data.image,
          //   name: data.name,
          //   location: data.location,
          //   fromDate: data.fromData,
          //   toDate: data.toDate,
          //   info: data.info,
          //   price: data.price
          // }
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <React.Fragment>
      {user.logged ? (
        <>
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
                  <p className="tw-font-bold tw-text-xl tw-ml-4">
                    {user.userName}
                  </p>
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
                    {prevHotels.map((n, i) => (
                      <ReservedHotelCard
                        key={i}
                        imageUrl={n.image}
                        name={n.name}
                        location={n.location}
                        info={n.info}
                        date={n.toDate}
                      />
                    ))}
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Header activeTab="Home" />

          <h1 className="tw-text-center tw-text-4xl tw-my-20">
            You dont have permission to view this page
          </h1>
          <Footer />
        </>
      )}
    </React.Fragment>
  );
};
