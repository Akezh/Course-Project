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