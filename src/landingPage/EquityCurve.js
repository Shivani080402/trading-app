import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";


function EquityCurve() {
  return (
    <div>
      <div className="d-flex mt-4 mb-4 justify-content-between">
        <div>
          <h5
            className="mt-3"
            style={{ fontSize: "18px", fontWeight: "bolder" }}
          >
            Equity Curve
          </h5>
          <span className="d-flex">
            <p style={{ fontSize: "15px" }}>Live since 2019-01-01</p>
            <FontAwesomeIcon
              icon={faRotateLeft}
              className="p-1  "
              style={{ color: "green" }}
            />
            <p style={{ fontSize: "14px", color: "green" }}> Reset</p>
          </span>
        </div>
        <div className="d-flex">
          <div style={{ padding: "10px" }}>
            <label>From date</label>
            <br />
            <input
              type="text"
              placeholder="2019-01-01"
              pattern="\d{4}-\d{2}-\d{2}"
              title="Enter date in YYYY-MM-DD format"
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "150px",
              }}
            />
          </div>

          <div style={{ padding: "10px" }}>
            <label>To date</label>
            <br />
            <input
              type="text"
              placeholder="2024-04-24"
              pattern="\d{4}-\d{2}-\d{2}"
              title="Enter date in YYYY-MM-DD format"
              style={{
                padding: "6px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "150px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquityCurve;
