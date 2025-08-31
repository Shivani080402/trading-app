import React from "react";
import "../landingPage/SideNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    title: "Get started",
    description:
      "Read our getting started guide to get the most out of your Capitalmind subscription.",
    link: "#", // Add the destination URL here
  },
  {
    title: "Community",
    description:
      "Join the conversation on our exclusive Community on Slack for Capitalmind Premium subscribers.",
    link: "#", // Add the destination URL here
  },
  {
    title: "Visit website",
    description: "Keep up with our latest content on our website.",
    link: "#", // Add the destination URL here
  },
];

function UpperHome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-10">
          <h5 className="mt-4 mb-4 fw-bold">Home</h5>

          <div className="d-flex justify-content-between">
            {sections.map((section, index) => (
              <a
                key={index}
                href={section.link}
                className="col-4 section border rounded bg-white p-3 text-decoration-none section-card"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-black fs-6 mb-2">{section.title}</p>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="p-1 text-secondary"
                  />
                </div>
                <p className="text-muted small mb-0">{section.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default UpperHome;
