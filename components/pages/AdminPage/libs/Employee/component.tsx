import React, { FC } from "react";
import { Props } from "./props";

export const Employee: FC<Props> = ({
  fullName,
  role,
  avatarImg,
  salary,
  salaryTransferDate,
  workingHours,
  schedule,
  onSendPayroll,
  onAdjustHours,
}: Props) => {
  return (
    <div className="my-5">
      <div className="row">
        <div className="col-6 mt-5 mb-3 d-flex">
          <img
            alt="avatar"
            src={avatarImg}
            style={{
              width: 84,
              height: 84,
              borderRadius: "50%",
              marginRight: 36,
            }}
          />
          <div className="ml-4">
            <p className="text-black tw-font-semibold tw-text-xl my-2">
              {fullName}
            </p>
            <p className="text-black tw-font-regular tw-text-xl my-2">{role}</p>
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-black tw-text-xl my-2">
              Salary: {salary + salaryTransferDate}
            </p>
            <button className="btn btn-outline-dark" onClick={onSendPayroll}>
              Send payroll
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-black tw-text-xl my-2">Hours: {workingHours}</p>
            <button className="btn btn-outline-dark" onClick={onAdjustHours}>
              Adjust hours
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <p className="text-black tw-text-xl tw-ml-6">Monday</p>
        </div>
        <div className="col-2">
          <p className="text-black tw-text-xl">Tuesday</p>
        </div>
        <div className="col-2">
          <p className="text-black tw-text-xl">Wednesday</p>
        </div>
        <div className="col-2">
          <p className="text-black tw-text-xl">Thursday</p>
        </div>
        <div className="col-2">
          <p className="text-black tw-text-xl">Friday</p>
        </div>
        <div className="col-2">
          <p className="text-black tw-text-xl">Saturday</p>
        </div>
      </div>
      <div
        className="mt-2 py-2"
        style={{ borderRadius: 12, backgroundColor: "#A4FB96" }}
      >
        <div className="row">
          <div className="col-2">
            <p className="text-black tw-text-lg tw-ml-6">{schedule[0]}</p>
          </div>
          <div className="col-2">
            <p className="text-black tw-text-lg">{schedule[1]}</p>
          </div>
          <div className="col-2">
            <p className="text-black tw-text-lg">{schedule[2]}</p>
          </div>
          <div className="col-2">
            <p className="text-black tw-text-lg">{schedule[3]}</p>
          </div>
          <div className="col-2">
            <p className="text-black tw-text-lg">{schedule[4]}</p>
          </div>
          <div className="col-2">
            <p className="text-black tw-text-lg">{schedule[5]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
