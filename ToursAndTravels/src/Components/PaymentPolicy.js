import React from "react";
import { Button, Card } from "react-bootstrap";

function PaymentPolicy() {
  return (
    <div className="payment d-flex justify-content-md-center align-items-center">
      <Card className="text-center bg-light position-absolute h-50">
        <Card.Header className="bg-light ">
          <div className="payment-text-div">
            <p className="pay-text pay-policy-text" style={{ width: "9vw" }}>
              Payment Policy
            </p>
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
        <Card.Body>
          <div style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
            excepturi doloremque itaque ipsa fuga dignissimos debitis minus
            animi harum corrupti quod facilis dolorum dignissimos debitis minus
            animi harum corrupti harum corrupti fuga dignissimos fuga
            animi harum corrupti harum corrupti fuga dignissimos fuga
            dignissimos debitis minus animi harum corrupti quod quam corrupti
            quod quam!
          </div>
          <br />
          <Button className="pay-btn fs-100 w-15">OK</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PaymentPolicy;
