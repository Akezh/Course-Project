import React, { FC } from "react";

export const BookingCard: FC = () => {
  return (
    <div className="card border-dark m-3" style={{borderRadius: "20px", maxWidth: "90%", height: "340px"}}>
        <div className="container-fluid p-3" style={{height: "340px"}}>
            <div className="row my-4">
                <div className="col-md-2" style={{fontWeight: 700}}>Address</div>
                <div className="col-md-7" style={{}}>
                    <h3>Astana Elite Hotel</h3>
                    <p>Kazakhstan, Astana, Kabanbay batyr 53, 27 block</p>
                </div>
                <div className="col-md-3" style={{}}>
                    <button className="btn btn-outline-dark" type="button">Cancel Booking</button>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2" style={{fontWeight: 700}}>Room</div>
                <div className="col-md-4" style={{}}>
                    3454
                </div>
                <div className="col-md-2" style={{fontWeight: 700}}>Floor</div>
                <div className="col-md-4" style={{}}>
                    23
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2" style={{fontWeight: 700}}>Check in</div>
                <div className="col-md-4" style={{}}>
                    2 PM
                </div>
                <div className="col-md-2" style={{fontWeight: 700}}>Check out</div>
                <div className="col-md-4" style={{}}>
                    12 PM
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2" style={{fontWeight: 700}}>Guests</div>
                <div className="col-md-7" style={{}}> James, Lily
                </div>
                <div className="col-md-3" style={{}}>
                    <button className="btn btn-outline-dark" type="button">Manage Guests</button>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2" style={{fontWeight: 700}}>Selected Facilities</div>
                <div className="col-md-7" style={{}}>
                    <p>Swimming Pool, Tennis Court, Beach</p>
                </div>
                <div className="col-md-3" style={{}}>
                    <button className="btn btn-outline-dark" type="button">Add Facilities</button>
                </div>
            </div>
        </div>
    </div>
  );
};
