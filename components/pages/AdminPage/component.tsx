import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Footer, Header, UserContext } from "components";
import { Employee } from "./libs";
import { Modal } from "react-bootstrap";
import { employees } from "./mock";
import axios from "axios";

export const AdminPage: FC = () => {
  const [user, setUser] = useContext(UserContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);
  const [serverEmployees, setServerEmployees] = useState<any>(undefined);

  useEffect(() => {
    const auth = {
      logged: true,
      userName: "john",
      role: "admin",
      id: 1,
    };
    setUser(auth);
  }, []);

  const onClose = useCallback(() => {
    setShowModal(false);
  }, []);
  const onClose2 = useCallback(() => {
    setShowModal2(false);
  }, []);

  const schedule = useMemo(
    () => [
      "9 AM - 6 PM",
      "9 AM - 6 PM",
      "9 AM - 6 PM",
      "9 AM - 6 PM",
      "9 AM - 6 PM",
      "9 AM - 6 PM",
    ],
    []
  );

  useEffect(() => {
    setServerEmployees(employees);
  }, []);

  const onSendPayrollClick = useCallback(
    (fullName) => () => {
      axios({
        method: "post",
        url: "https://swe-project-dream-team.herokuapp.com/manager/pay",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          const { data } = response;
          const updatedEmployees = employees.map((n) => {
            if (n.fullName === fullName) {
              return {
                ...n,
                salaryTransferDate: `$, last transfer at ${
                  data?.date ?? "9 December 2021"
                }`,
              };
            }

            return n;
          });

          setServerEmployees(updatedEmployees);
          setShowModal2(true);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    []
  );

  const onAdjustClick = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <React.Fragment>
      <Header activeTab="Admin" />
      {user.logged && user.role === "admin" ? (
        <>
          <div className="container my-5">
            <p className="text-center text-black tw-font-bold tw-text-3xl">
              Employee management console
            </p>

            {serverEmployees.map((em, i) => (
              <Employee
                key={i}
                fullName={em.fullName}
                role={em.role}
                avatarImg={em.avatarImg}
                salary={em.salary}
                salaryTransferDate={em.salaryTransferDate}
                workingHours={em.workingHours}
                schedule={schedule}
                onSendPayroll={onSendPayrollClick(em.fullName)}
                onAdjustHours={onAdjustClick}
              />
            ))}
          </div>
        </>
      ) : (
        <h1 className="tw-text-center tw-text-4xl tw-my-20">
          You dont have permission to view this page
        </h1>
      )}
      <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set payroll & hours</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-4 mt-2 d-flex align-items-center">
              <p className="tw-text-xl tw-font-bold">Payroll</p>
            </div>
            <div className="col-8">
              <input className="form-control mt-2" placeholder="New payroll" />
            </div>
            <div className="col-4 mt-4 d-flex align-items-center">
              <p className="tw-text-xl tw-font-bold">Working hours</p>
            </div>
            <div className="col-8">
              <input className="form-control mt-4" placeholder="Hours / week" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-dark" onClick={onClose}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal2} onHide={onClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Payroll transfer status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <p className="tw-text-xl tw-font-bold">Sent Successfully</p>
          </div>
        </Modal.Body>
      </Modal>
      <Footer />
    </React.Fragment>
  );
};
