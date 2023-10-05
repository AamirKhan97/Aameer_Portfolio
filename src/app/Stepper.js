import React from "react";

const Stepper = () => {
  return (
    <>
      <div className="stepperBox">
        <div className="firstCircleBor">
          <div className="innerColorBlack">
            <div className="insiderWhite">0%</div>
          </div>
          <div className="line1">
            <div className="innerLine"></div>
          </div>
        </div>
        <div className="roundedRotate1"></div>
        <div className="secondCircleBor">
          <div className="innerColorBlack">
            <div className="insiderWhite">25%</div>
          </div>
          <div className="line2">
            <div className="innerLine"></div>
          </div>
          <div className="roundedRotate2"></div>
        </div>
        <div className="thirdCircleBor">
          <div className="innerColorBlack">
            <div className="insiderWhite">75%</div>
          </div>
          <div className="line3">
            <div className="innerLine"></div>
          </div>
        </div>
        <div className="roundedRotate3"></div>
        <div className="fouthCircleBor">
          <div className="innerColorBlack">
            <div className="insiderWhite">100%</div>
          </div>
        </div>
        <div className="roundedRotate4"></div>
      </div>
    </>
  );
};

export default Stepper;
