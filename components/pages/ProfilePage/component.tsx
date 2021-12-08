import React, {FC} from "react";
import { Header, Footer, BookingCard} from "components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const ProfilePage: FC = () => {

  return (
      <React.Fragment>
            <Header activeTab="Home" />
            <div className="container my-5">
            <div className="container row flex-fill">
            <Tabs style={{display: "flex"}} forceRenderTabPanel defaultIndex={1}>
                <TabList className="col-sm-3 border-right fixed-left" style={{display: "flex", flexDirection: "column"}}>
                    <div className="row tw-p-10">
                        <img src="images/profile.jpg" alt="profile-pic" 
                        style={{width: "100%", maxHeight: "200px", borderRadius: "20px"}}/>
                    </div>
                    <div className="row px-5 ">
                        <p>User Name</p>
                    </div>
                    <div className="row px-5 ">
                        <p>Id: 04823</p>
                    </div>
                    <Tab className="row px-5 mt-5 mb-2"  style={{cursor: "pointer"}}>
                        <p>Bookings</p>
                    </Tab>
                    <Tab className="row px-5 my-2" style={{cursor: "pointer"}}>
                        <p>Payments</p>
                    </Tab>
                    <Tab className="row px-5 my-2" style={{cursor: "pointer"}}>
                        <p>Settings</p>
                    </Tab>
                </TabList>
                <div className="col-sm-9" style={{}}>
                    <TabPanel>
                        <div className="row mx-3" style={{ height: "53px"}}>
                                <h1 style={{fontSize: 30, fontWeight: 400}}>Bookings</h1>
                        </div>
                        <div className="panel-content">
                            <div className="row">
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab style={{}}>Upcoming</Tab>
                                        <Tab>Previous</Tab>
                                    </TabList>
                                    <div style={{height: "100vh", overflowY: "scroll"}}>
                                        <TabPanel>
                                            <BookingCard/>
                                        </TabPanel>
                                        <TabPanel>
                                            <BookingCard/>
                                            <BookingCard/>
                                            <BookingCard/>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="row mx-3" style={{ height: "53px"}}>
                                <h1 style={{fontSize: 30, fontWeight: 400}}>Payments</h1>
                        </div>
                        <div className="panel-content" style={{height: "100vh", overflowY: "scroll"}}>
                            <h2>Any content 2</h2>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="row mx-3" style={{ height: "53px"}}>
                                <h1 style={{fontSize: 30, fontWeight: 400}}>Settings</h1>
                    </div>
                    <div className="panel-content">
                        <div style={{height: "100vh", overflowY: "scroll"}}>
                            <h2>Any content 3</h2>
                        </div>
                    </div>
                    </TabPanel>
                </div>  
            </Tabs>
            </div>
          </div>
          <Footer />
      </React.Fragment>
  );
};
///////////////////////////////////////////////////////////////////////
import React, { FC, useContext, useEffect, useState } from "react";
import { Footer, Header, UserContext } from "components";
import ProfilePageItem from "components/organisms/ProfilePageItem/component";
import { avatarService } from "static/avatarService";
import { Button } from "react-bootstrap";
import Link from "next/link";

export const ProfilePage: FC = () => {
  interface Booking {
    BookingID: number;
    UserName: string;
    UserID: number;
    Room: string;
    Cost: number;
    PeopleCount: number;
    BookingStartDate: string;
    BookingEndDate: string;
  }

  interface prof {
    UserID?: number;
    imgURL?: string;
    Bookings?: Booking[];
    UserName?: string;
  }

  const [profile, setProfile] = useState<prof>({});

  useEffect(() => {
    let fetchParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserID: user.id }),
    };
    // let res = await fetch("https://", fetchParams);
    // let responseJSPN = await res.json()
    let responseJSON: prof = {
      UserID: 228,
      imgURL: "asdsada",
      Bookings: [
        {
          BookingID: 12321,
          UserName: "Jeff Bezos",
          UserID: 1543,
          Room: "7e.213",
          Cost: 133,
          PeopleCount: 2,
          BookingStartDate: "2015-11-03",
          BookingEndDate: "2015-11-06",
        },
        {
          BookingID: 10841,
          UserName: "Jeff Bezos",
          UserID: 1543,
          Room: "7e.214",
          Cost: 150,
          PeopleCount: 4,
          BookingStartDate: "2015-11-03",
          BookingEndDate: "2015-11-06",
        },
      ],
      UserName: "Jeff Bezos",
    };
    setProfile(responseJSON);
  }, []);
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <Header></Header>
      <div className="container">
        {user.logged ? (
          <div className="row">
            <div className="col-3">
              <div>
                {user.role === "user" ? (
                  <img src={avatarService["1"]}></img> // If the user is not admin/clerk, serve some generic image
                ) : (
                  //   <div>ass</div>
                  <img src={avatarService["1"]}></img>
                )}
              </div>
              <div className="tw-font-extrabold tw-text-center tw-my-8 tw-text-2xl">
                {profile.UserName}
              </div>
              <div className="tw-font-extrabold tw-text-center tw-my-8 tw-text-2xl">
                ID:{profile.UserID}
              </div>
              <div className="tw-font-extrabold tw-text-center tw-my-8 tw-text-2xl">
                Role: {user.role}
              </div>
            </div>
            <div className="col-1 tw-h-screen">
              <div className="tw-h-screen tw-border tw-w-0 tw-border-gray-700">
                {" "}
              </div>
            </div>
            <div className="col-8">
              {user.role === "user" ? (
                <>
                  <div className="tw-text-center tw-text-4xl tw-font-bold">
                    My Bookings
                  </div>
                  <div>
                    {" "}
                    {profile.Bookings?.map((item, index) => (
                      <ProfilePageItem
                        BookingID={item.BookingID}
                        UserName={item.UserName}
                        UserID={item.UserID}
                        Room={item.Room}
                        Cost={item.Cost}
                        key={index}
                        BookingStartDate={item.BookingStartDate}
                        BookingEndDate={item.BookingEndDate}
                        PeopleCount={item.PeopleCount}
                      />
                    ))}{" "}
                  </div>
                </>
              ) : (
                <div>
                  {user.role === "clerk" ? (
                    <Link href="/clerk">
                      <Button
                        variant="secondary"
                        className="tw-w-96 tw-ml-48 tw-h-32 tw-text-2xl tw-mt-48 tw-text-center"
                      >
                        {" "}
                        Go to Clerk console page
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/admin">
                      <Button
                        variant="secondary"
                        className="tw-w-96 tw-ml-48 tw-h-32 tw-text-2xl tw-mt-48 tw-text-center"
                      >
                        Go to Admin console page
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <h1 className="tw-text-center tw-text-4xl tw-my-20">
            You dont have permission to view this page
          </h1>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};
