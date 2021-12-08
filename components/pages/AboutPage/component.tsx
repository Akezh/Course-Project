import React, { FC } from "react";
import { Footer, Header, HotelsCarousel } from "components";
import { avatarService } from "static/avatarService";

export const AboutPage: FC = () => {
  return (
    <React.Fragment>
      <Header activeTab="Home" />
      <div className="container my-4">
        <p
          className="tw-font-bold tw-text-3xl text-center mb-5"
          style={{ cursor: "pointer" }}
        >
          About us
        </p>

        <HotelsCarousel imageHeight={600} />

        <div className="row mt-5">
          <div className="col-6">
            <p className="tw-text-3xl tw-font-bold mb-3">Rexar Group</p>
            <p className="tw-text-lg">
              Rexar hotels & SPA Group, your first choice Our long-term vision
              is to be the company of choice for guests, owners and talent.
              Whenever a guest plans a trip, or an investor or owner is thinking
              of a partner, or whenever someone is looking for a career in the
              hospitality industry, they will all think of Rexar Hotel Group
              first. Rexar offers exceptional escapes that go beyond the
              imagination to open a new world of horizons for our guests. Our
              expertise for balancing the premium standards with a vibrant,
              luxury ambience and family friendly adventures truly defines the
              Rexar experience. Rexar hotels & SPA makes holiday dreams come
              true for everyone.
            </p>
          </div>
          <div className="col-6 tw-pl-10 mb-4">
            <div className="row">
              <p className="tw-text-3xl tw-font-bold mb-3">Our Team</p>
              {[1, 2, 3, 4, 5, 6].map((n, i) => (
                <img
                  key={i}
                  className="mb-4"
                  src={avatarService[n]}
                  alt="avatar"
                  style={{ borderRadius: "50%", height: 100, width: 135 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
