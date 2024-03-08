import {React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import CarSelection from "./CarSelection";



function Vehicle() {

  return (
    <>
      <section>
        <div className="w-100 bg-slate-100 py-5 md:py-10">
          <div className="pl-5 md:pl-10">
            <h2 className="text-slate-800  pt-4 text-2xl font-bold ">
              Rental Vehicle Categories
            </h2>
            <p className="text-slate-700 text-lg font-medium pt-3">
              Get The best vehicles at an affordable cost !
            </p>
          </div><div className="p-2 md:p-10">
          <CarSelection />
          </div>
        </div>
      </section>
    </>
  );
}

export default Vehicle;
