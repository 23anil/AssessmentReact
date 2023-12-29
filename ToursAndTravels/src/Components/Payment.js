import React from "react";
import { Button, Card } from "react-bootstrap";

function Payment() {
  return (
    <div className="payment d-flex justify-content-md-center align-items-center">
      <Card className="text-center bg-light position-absolute">
        <Card.Header className="bg-light">
          <div className="payment-text-div">
            <p className="pay-text">Payment</p>
            <p className="close-btn-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </p>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="pay-select-div">
            <div id="upi-text">UPI Payments</div>
            <div className="g-pay-div pay-div">
              <p className="pay-logo-div">
                <img
                  src="https://w7.pngwing.com/pngs/667/120/png-transparent-google-pay-2020-hd-logo-thumbnail.png"
                  alt=""
                  height="25px"
                  width="25px"
                />
              </p>
              <span className="pay-lable">G Pay</span>
              <p className="pay-check-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  class="bi bi-check2 mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </p>
            </div>
            <div className="phone-pay-div pay-div">
              <p className="pay-logo-div">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png"
                  alt=""
                  height="25px"
                  width="25px"
                />
              </p>
              <span className="pay-lable">Phone pay</span>
              <p className="pay-check-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  class="bi bi-check2 mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </p>
            </div>
          </div>
          <div className="add-upi-div">
          <div id="upi-add">Add Other UPI</div>
          <div className="add-upi">+ New UPI </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted bg-light">
          <Button variant="primary" className="pay-btn fs-100">
            Submit
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Payment;
