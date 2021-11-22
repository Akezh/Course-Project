import React, {FC, useState} from "react";
import DatePicker from 'react-datepicker';
import {HotelCard} from "../../organisms/HotelCard";

export const MainPage: FC = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

  return (
    <div className="container">
        <div className="my-5">
            <div className="position-relative mt-4 tw-pb-16">
                <img alt="starter-hotel w-100" src="/images/starter-hotel.png" />
                <div className="position-absolute bg-white tw-left-12 tw-bottom-0 search-panel p-4" style={{ width: '90%', height: 120, borderRadius: 16 }}>
                    <div className="row">
                        <div className="col-3 d-flex justify-content-between p-0">
                            <div>
                                <p className="tw-font-semibold tw-text-xl tw-mb-2 tw-ml-3">Location</p>
                                <input type="text" className="form-control" style={{ border: "none" }} placeholder="Where are you going?"/>
                            </div>
                            <div className="tw-my-auto tw-bg-gray-700 tw-mr-6" style={{ width: 1, height: 64 }}></div>
                        </div>
                        <div className="col-3 d-flex justify-content-between p-0">
                            <div>
                                <p className="tw-font-semibold tw-text-xl tw-mb-2 tw-ml-3">Check in</p>
                                <div className="flex items-center justify-center max-w-2xl py-20 mx-auto space-x-4">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date : any) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        nextMonthButtonLabel=">"
                                        previousMonthButtonLabel="<"
                                        popperClassName="react-datepicker-left"
                                        customInput={
                                            <input type="text" className="form-control tw-text-md" style={{ border: "none", width: 112 }} placeholder="Add dates"/>
                                        }
                                    />
                                </div>
                            </div>

                            <div className="tw-my-auto tw-bg-gray-700 tw-mr-6" style={{ width: 1, height: 64 }}></div>
                        </div>
                        <div className="col-3 d-flex justify-content-between p-0">
                            <div>
                                <p className="tw-font-semibold tw-text-xl tw-mb-2 tw-ml-3">Check out</p>
                                <div className="flex items-center justify-center max-w-2xl py-20 mx-auto space-x-4">
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date : any) => setEndDate(date)}
                                        selectsStart
                                        startDate={endDate}
                                        nextMonthButtonLabel=">"
                                        previousMonthButtonLabel="<"
                                        popperClassName="react-datepicker-left"
                                        customInput={
                                            <input type="text" className="form-control tw-text-md" style={{ border: "none", width: 112 }} placeholder="Add dates"/>
                                        }
                                    />
                                </div>
                            </div>

                            <div className="tw-my-auto tw-bg-gray-700 tw-mr-6" style={{ width: 1, height: 64 }}></div>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-between p-0">
                            <div>
                                <p className="tw-font-semibold tw-text-xl tw-mb-2 tw-ml-3">Guests</p>
                                <input type="number" className="form-control" style={{ border: "none", width: 112 }} placeholder="Add guests"/>
                            </div>
                            <div>
                                <button type="button" className="btn btn-lg btn-dark tw-mr-6" style={{ borderRadius: 24 }}>
                                    <img alt="icon" src="/icons/search.png"  />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tw-mt-20">
                <p className="tw-font-extrabold tw-text-4xl tw-mb-2 tw-ml-3 text-center">Entire city of choice</p>
                <div className="row">
                    <HotelCard className="col-4 tw-mt-10 tw-pl-40" name="Mountain Resort" description="Booking ID: 984554" price="$800.00" imageUrl="images/starter-hotel.png" />
                    <HotelCard className="col-4 tw-mt-10 tw-px-20" name="Mountain Resort" description="Booking ID: 984554" price="$800.00" imageUrl="images/starter-hotel.png" />
                    <HotelCard className="col-4 tw-mt-10 tw-pr-40" name="Mountain Resort" description="Booking ID: 984554" price="$800.00" imageUrl="images/starter-hotel.png" />
                    <HotelCard className="col-4 tw-mt-10 tw-pl-40" name="Mountain Resort" description="Booking ID: 984554" price="$800.00" imageUrl="images/starter-hotel.png" />
                    <HotelCard className="col-4 tw-mt-10 tw-px-20" name="Mountain Resort" description="Booking ID: 984554" price="$800.00" imageUrl="images/starter-hotel.png" />
                    <HotelCard className="col-4 tw-mt-10 tw-pr-40" name="Mountain Resort" description="Booking ID: 984554" price="$800.00" imageUrl="images/starter-hotel.png" />
                </div>
            </div>
        </div>
    </div>
  );
};
