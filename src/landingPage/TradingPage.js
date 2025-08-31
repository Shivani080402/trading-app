import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import EquityCurve from "./EquityCurve";
import EquityCurveChart from "./EquityCurveChart";
import EquityTable from "./EquityTable";

function TradingPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div
          className="col-10 border "
          style={{
            boxShadow:
              "2px 0 10px rgba(0, 0, 0, 0.05), -2px 0 5px rgba(0, 0, 0, 0.05)",
            backgroundColor: "#fff",
          }}
        >
          <div className="d-flex justify-content-between mt-4 mb-2">
            <h5 className="" style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Trailing Return
            </h5>
            <FontAwesomeIcon
              icon={faDownload}
              className="p-1  "
              style={{ color: "green" }}
            />
          </div>
          <EquityTable />

          <div className="text-muted">
            <p style={{ fontSize: "12px" }}>
              Note : Returns above 1 year are annualised.{" "}
            </p>
          </div>
          <div>
            <EquityCurve />
            <EquityCurveChart />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default TradingPage;
