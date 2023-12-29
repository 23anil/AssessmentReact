import React from "react";
import { Card } from "react-bootstrap";

function MyBookings() {
  return (
    <div>
      <div className="location-page-header">
        <div className="header-logo1"></div>
        <div className="header-logo2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
            color="#707070"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </div>
      </div>
      <div className="mybooking-div">
        <h3
          className="mt-4 ms-5 position-absolute "
          style={{ fontFamily: "sans-serif" }}
        >
          My Booking
        </h3>
        <div className="card-outer-div">
          <Card
            className="col-4 ms-lg-5 booking-card"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5 className="d-flex justify-content-md-center align-items-center">
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="booking-card-btn">Cancel</button>
            </Card.Body>
          </Card>

          <Card
            className="col-4 ms-lg-5 booking-card booking-card01"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5
                className="d-flex justify-content-md-center align-items-center"
              >
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="booking-card-btn">Cancel</button>
            </Card.Body>
          </Card>

          <Card
            className="col-4 ms-lg-5 booking-card booking-card02"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5
                className="d-flex
               justify-content-md-center align-items-center"
              >
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="booking-card-btn">Cancel</button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="history-div">
        <h3
          className="mt-4 ms-5 position-absolute "
          style={{ fontFamily: "sans-serif" }}
        >
       History
        </h3>
        <div className="card-outer-div">
          <Card
            className="col-4 ms-lg-5 booking-card"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5 className="d-flex justify-content-md-center align-items-center">
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>

          <Card
            className="col-4 ms-lg-5 booking-card booking-card01"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5
                className="d-flex
               justify-content-md-center align-items-center"
              >
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>

          <Card
            className="col-4 ms-lg-5 booking-card booking-card02"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5
                className="d-flex
               justify-content-md-center align-items-center"
              >
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-outer-div01">
          <Card
            className="col-4 ms-lg-5 booking-card"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5 className="d-flex justify-content-md-center align-items-center">
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>

          <Card
            className="col-4 ms-lg-5 booking-card booking-card01"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5
                className="d-flex
               justify-content-md-center align-items-center"
              >
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>

          <Card
            className="col-4 ms-lg-5 booking-card booking-card02"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5
                className="d-flex
               justify-content-md-center align-items-center"
              >
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-outer-div02">
          <Card
            className="col-4 ms-lg-5 booking-card"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5 className="d-flex justify-content-md-center align-items-center">
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>

          <Card
            className="col-4 ms-lg-5 booking-card booking-card01"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5
                className="d-flex
               justify-content-md-center align-items-center"
              >
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>

          <Card
            className="col-4 ms-lg-5 booking-card booking-card02"
            style={{ width: "16rem", height: "12rem" }}
          >
            <Card.Body>
              <h5
                className="d-flex
               justify-content-md-center align-items-center"
              >
                standard pack
              </h5>
              <h1 className="bold d-flex justify-content-md-center align-items-center">
                ₹ 4,500 /-
              </h1>
              <h6
                className="d-flex justify-content-md-center align-items-center"
                style={{ color: "lightgray" }}
              >
                05 Dec 2022
              </h6>
              <button className="history-card-btn">Cancel</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
