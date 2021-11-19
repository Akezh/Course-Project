import React, { FC } from "react";
import { info } from "./mock";
import { AnimationWrapper } from "../../../AnimationWrapper";

export const PersonalInfo: FC = () => {
  return (
    <div className="row">
      <div className="starter-text-wrapper order-md-1 order-sm-2 order-2 col-md-5 col-sm-12 col-12 d-flex align-items-center">
        <div>
          <AnimationWrapper time={1.7}>
            <h1 className="tw-mt-8 tw-mb-8 text-white">{info.greeting}</h1>
          </AnimationWrapper>

          <AnimationWrapper time={2.0}>
            <p className="company-para tw-font-normal tw-text-gray-700 tw-mb-8">
              Over{" "}
              <a href="#" className="tw-text-green">
                40,000,000
              </a>{" "}
              people suffer from the COVID pandemic
            </p>
          </AnimationWrapper>

          <AnimationWrapper time={2.0}>
            <p className="company-para tw-font-normal tw-text-gray-700 tw-mb-8">
              Over{" "}
              <a href="#" className="tw-text-green">
                10,000,000
              </a>{" "}
              families lost their members due to COVID pandemic
            </p>
          </AnimationWrapper>

          <AnimationWrapper time={3.0}>
            <div className="tw-my-10">
              <a href="#apply">
                <div
                  className="d-flex align-items-center tw-bg-green p-3"
                  style={{ borderRadius: 8 }}
                >
                  <img
                    className="tw-mx-5"
                    alt="i"
                    src="/icons/doctor_icon.png"
                  />
                  <p
                    className="tw-font-bold tw-ml-5 tw-mb-2"
                    style={{ fontSize: 20 }}
                  >
                    Become a doctor
                  </p>
                </div>
              </a>
            </div>

            <div className="tw-mb-20">
              <a className="mb-5" href="#apply">
                <div
                  className="d-flex align-items-center tw-bg-green p-3"
                  style={{ borderRadius: 8 }}
                >
                  <img className="tw-mx-5" alt="i" src="/icons/ps_icon.png" />
                  <p
                    className="tw-font-bold tw-ml-5 tw-mb-2"
                    style={{ fontSize: 20 }}
                  >
                    Become a public servant
                  </p>
                </div>
              </a>
            </div>
          </AnimationWrapper>
        </div>
      </div>

      <div className="order-2 col-md-7 col-12 d-flex justify-content-center align-items-center">
        <AnimationWrapper time={1}>
          <img className="banner" alt="banner" src="/images/banner.png" />
        </AnimationWrapper>
      </div>
    </div>
  );
};
