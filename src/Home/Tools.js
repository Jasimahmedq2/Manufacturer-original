import React, { useEffect, useState } from "react";
import useServices from "../Hooks/useServices";
import Tool from "./Tool";

const Tools = () => {
  const [services, setServices, loading] = useServices();
  return (
    <div className="my-12 px-12 py-10 shadow rounded">
      <h2 className="text-2xl font-bold text-start my-12">
        Available Products
      </h2>
      {loading ? (
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        <div className="grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services?.slice(0, 6).map((service) => (
            <Tool key={service._id} service={service}></Tool>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tools;
