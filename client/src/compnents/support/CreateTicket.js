/** @format */

import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          To create a ticket, select a relevant topic
        </h1>

        {/* Account Opening Section */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account
            Opening
          </h4>
          {["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account", "NRI Account Opening", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Your Zerodha Account Section */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4>
            <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha
            Account
          </h4>
          {["Login credentials", "Your Profile", "Account modification and segment addition", "CMR & DP ID", "Nomination", "Transfer and conversion of shares", "Getting Started"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Trading and Markets Section */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4>
            <i className="fa fa-sellsy" aria-hidden="true"></i> Trading and
            Markets
          </h4>
          {["Trading FAQs", "Kite", "Margins", "Product and order types", "Corporate actions", "Kite features", "Getting Started"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Funds Section */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4>
            <i className="fa fa-archive" aria-hidden="true"></i> Funds
          </h4>
          {["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Console Section */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4>
            <i className="fa fa-search-plus" aria-hidden="true"></i> Console
          </h4>
          {["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Coin Section */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4>
            <i className="fa fa-search-plus" aria-hidden="true"></i> Coin
          </h4>
          {["Understanding mutual funds and Coin", "Coin App", "Coin Web", "NRI Account Opening", "Charges at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
