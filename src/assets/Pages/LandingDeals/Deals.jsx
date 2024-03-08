import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Email from '../../Images/Hero/email.png';

function Deals() {
  return (
    <>
      <section>
        <div className="bg-slate-200 text-slate-900 pt-4 pb-10">
          <div className="text-start text-xl sm:text-3xl font-semibold pt-3 pl-10">
            Deals that you can't miss <FontAwesomeIcon icon={faIdBadge} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 p-10 md:p-20 gap-10">
            <div className="deals bg-zinc-500 rounded-lg p-2">
              <div className="flex">
                <div className="de1 bg-red-500 rounded-full font-semibold">
                  <p className="flex justify-center pt-4 text-white">20%</p>
                  <p className="flex justify-center text-white">offer</p>
                </div>
                <div className="pl-2 pt-8 sm:pt-5">
                  <p className="font-bold text-sm sm:text-lg">
                    On First Trip
                  </p>
                </div>
              </div>
              <h3 className="sd text-red-200 bg-slate-600 pl-5 rounded-2xl pt-2">
                Code :{" "}
                <span className="text-sky-200 text-sm sm:text-lg">FIRST20</span>
                <div>
                  <span className="flex justify-between">
                    <span>
                      <Link className="inline-block text-teal-600 text-md sm:text-lg">
                        Book now
                      </Link>
                    </span>
                    <span className="font-light  text-end  text-wrap pr-2 text-xs sm:text-md">
                      * T&C apply.
                    </span>
                  </span>
                </div>
              </h3>
            </div>
            <div className="deals2 bg-zinc-500 rounded-lg p-2">
              <div className="flex">
                <div className="de1 bg-red-500 rounded-full font-semibold">
                  <p className="flex justify-center pt-4 text-white">10%</p>
                  <p className="flex justify-center text-white">offer</p>
                </div>
                <div className="pl-2 pt-8 sm:pt-5">
                  <p className="font-bold text-sm sm:text-lg text-white">
                    On Every Refferals !
                  </p>
                </div>
              </div>
              <h3 className="sd text-red-200 bg-slate-600 pl-5 rounded-2xl pt-2">
                Code :{" "}
                <span className="text-sky-200 text-sm sm:text-lg">
                  USRN7865FC
                </span>
                <div>
                  <span className="flex justify-between">
                    <span>
                      <Link className="inline-block text-teal-600 text-md sm:text-lg">
                        Book now
                      </Link>
                    </span>
                    <span className="font-light  text-end  text-wrap pr-2 text-xs sm:text-md">
                      * T&C apply.
                    </span>
                  </span>
                </div>
              </h3>
            </div>
            <div className="deals1 bg-zinc-500 rounded-lg p-2">
              <div className="flex">
                <div className="de1 bg-red-500 rounded-full font-semibold">
                  <p className="flex justify-center pt-4 text-white">15%</p>
                  <p className="flex justify-center text-white">offer</p>
                </div>
                <div className="pl-2 pt-8 sm:pt-5">
                  <p className="font-bold text-sm sm:text-lg">
                    On Trip Above ₹ 500
                  </p>
                </div>
              </div>
              <h3 className="sd text-red-200 bg-slate-600 pl-5 rounded-2xl pt-2">
                Code :{" "}
                <span className="text-sky-200 text-sm sm:text-lg">
                  546FDS2T
                </span>
                <div>
                  <span className="flex justify-between">
                    <span>
                      <Link className="inline-block text-teal-600 text-md sm:text-lg">
                        Book now
                      </Link>
                    </span>
                    <span className="font-light  text-end  text-wrap pr-2 text-xs sm:text-md">
                      * T&C apply.
                    </span>
                  </span>
                </div>
              </h3>
            </div>
          </div>
          <div className="px-3 py-2">
            <div className="flex justify-center">
                <div><img src={Email} className="h-20 w-36"/></div>
                <div><p className="text-red-500 pb-2 text-lg w-full">Subscribe to the latest offers on your email !</p><input type="email" ></input><Link className="btn pl-3 border-1 border-yellow-500">Submit</Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;
