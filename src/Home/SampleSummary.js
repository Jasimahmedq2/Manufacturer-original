import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Ticker = () => {

  return (
    <>
    <CountUp start={0} end={7000} duration={2}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>

 <CountUp start={0} end={1000} duration={2}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>
 </>
  );
};

export default Ticker;