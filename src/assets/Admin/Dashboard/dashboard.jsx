import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSquare, faCalendarDays ,faUser , faCarSide } from "@fortawesome/free-solid-svg-icons";
import Sales from "./charts/sales";
import User from "./charts/User";


function Dashboard() {
  return (
    <>
      <section className="bg-slate-900 dark:bg-slate-200 p-6 h-screen">
        <div>
          <h2 className="text-4xl pl-2 font-extrabold text-white pb-5 w-100">
            Alpha Dashboard
          </h2>
          <div className="grid grid-cols-12">
          <div className=" col-span-2 ">
              <nav className=" w-48 ">
                <div className="text-white dark:text-gray-900">
                  <p className="py-2 px-2 flex font-semibold hover:bg-slate-200 hover:text-gray-900 rounded-xl text-base">
                    <div>
                      <div className="h-9 w-9 p-1 border-2 border-sky-500  grid grid-cols-2 rounded-md">
                        <FontAwesomeIcon
                          className="h-2 w-2 mx-auto"
                          icon={faSquare}
                        />

                        <FontAwesomeIcon
                          className="h-2 w-2  mx-auto"
                          icon={faSquare}
                        />
                        <FontAwesomeIcon
                          className="h-2 w-2 mx-auto"
                          icon={faSquare}
                        />
                        <FontAwesomeIcon
                          className="h-2 w-2 mx-auto"
                          icon={faSquare}
                        />
                      </div>
                    </div>
                    <div className="pl-2 pt-1">Dashboard</div>
                  </p>
                  <br />
                  <p className="py-2 px-2 flex font-semibold hover:bg-slate-200 hover:text-gray-900 rounded-xl text-base">
                    <div>
                      <div className="h-9 w-9 p-2 border-2 border-sky-500  grid grid-cols-2 rounded-md">
                        <FontAwesomeIcon
                          className="mx-auto"
                          icon={faCalendarDays}
                        />
                      </div>
                    </div>
                    <div className="pl-2 pt-1">Dates</div>
                  </p>
                  <br />
                  <p className="py-2 px-2 flex font-semibold hover:bg-slate-200 hover:text-gray-900 rounded-xl text-base">
                    <div>
                      <div className="h-9 w-9 p-2 border-2 border-sky-500  grid grid-cols-2 rounded-md">
                      <FontAwesomeIcon icon={faUser} />
                      </div>
                    </div>
                    <div className="pl-2 pt-1">Users</div>
                  </p>
                  <br />
                  <p className="py-2 px-2 flex font-semibold hover:bg-slate-200 hover:text-gray-900 rounded-xl text-base">
                    <div>
                      <div className="h-9 w-9 p-2 border-2 border-sky-500  grid grid-cols-2 rounded-md">
                      <FontAwesomeIcon icon={faCarSide} />
                      </div>
                    </div>
                    <div className="pl-2 pt-1">Cars</div>
                  </p>
                  <br />
                  <p className="py-2 px-2 flex font-semibold hover:bg-slate-200 hover:text-gray-900 rounded-xl text-base">
                    <div>
                      <div className="h-9 w-9 p-2 border-2 border-sky-500  grid grid-cols-2 rounded-md">
                        <FontAwesomeIcon
                          className="mx-auto"
                          icon={faCalendarDays}
                        />
                      </div>
                    </div>
                    <div className="pl-2 pt-1">Dates</div>
                  </p>
                  
                </div>
              </nav>
              </div>
            <div className="col-span-10 flex"><Sales /><User /></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
