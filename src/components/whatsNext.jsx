import React, { useState } from "react";

const WhatsNext = () => {
  return (
    <div className="col-12 col-lg-6 col-sm-12 col-md-12">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="text-primary text-center">What happends next ?</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4 className="step-title">Step One</h4>
              <p className="step-description">
                Our team will reach out to you.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step-card">
              <div className="step-number">2</div>
              <h4 className="step-title">Step Two</h4>
              <p className="step-description">
                We will understand your business objectives and enterprise
                landscape
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step-card">
              <div className="step-number">3</div>
              <h4 className="step-title">Step Three</h4>
              <p className="step-description">
                We will come back with a comprehensive approach and proposal to
                address your problem. And once agreed upon, we will execute it
                end-to-end
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WhatsNext;
