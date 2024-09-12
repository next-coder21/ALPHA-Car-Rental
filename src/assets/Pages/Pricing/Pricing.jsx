import React, { useEffect, useState } from "react";

import axios from 'axios';

function Pricing() {
  const url = 'https://booking-com.p.rapidapi.com/v1/car-rental/detail?search_key=eyJkcml2ZXJzQWdlIjozNSwiZHJvcE9mZkRhdGVUaW1lIjoiMjAyMS0xMS0xMlQxMDowMDowMCIsImRyb3BPZmZMb2NhdGlvbiI6IjU1Ljc1MjIwMSwzNy42MTU2MDEiLCJkcm9wT2ZmTG9jYXRpb25UeXBlIjoiTEFUTE9ORyIsInBpY2tVcERhdGVUaW1lIjoiMjAyMS0xMS0wOVQxMDowMDowMCIsInBpY2tVcExvY2F0aW9uIjoiNTUuNzUyMjAxLDM3LjYxNTYwMSIsInBpY2tVcExvY2F0aW9uVHlwZSI6IkxBVExPTkciLCJyZW50YWxEdXJhdGlvbkluRGF5cyI6Mywic2VydmljZUZlYXR1cmVzIjpbIk5PX09QQVFVRVMiLCJTVVBSRVNTX0ZJWEVEX1BSSUNFX1ZFSElDTEVTIl19&locale=en-gb&vehicle_id=699544941&from_country=it&currency=AED';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7d139b189emsh6187a690e9b07ebp1f584ejsnd909e784bfe7',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };
  
const makeRequest = async() =>{
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
    
  

  return (
    <>
      <section>
        <div className="pt-5 bg-gray-900" id="pricing">
          <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center pt-10">
              
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Whether it's just you, or your entire Family - we've got you
                covered.
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
              Choose the product that works best
            </p>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* <!-- First Product --> */}
              <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id="product1"
                    className="text-lg font-semibold leading-8 text-white"
                  >
                    Starters
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  Product details for Starters
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold   text-white">₹ 500 / Month</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300"></span>
                </p>
                <a
                  href="/order"
                  aria-describedby="product1"
                  id="normal"
                  className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Subscribe Now 
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    5% off on every Ride
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Only on Sedan, Suv and Micro only
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    2 Accounts
                  </li>
                </ul>
              </div>

              {/* <!-- Second Product --> */}
              <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
                <div className="flex items-baseline justify-between gap-x-4">
                  <h2
                    id="product2"
                    className="text-lg font-semibold leading-8 text-white"
                  >
                    Smart
                  </h2>
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  The most popular choice. Product details for Smart
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                  ₹ 1000 / Month
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-300"></span>
                </p>
                <a
                  href="/order"
                  aria-describedby="product2"
                  className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Subscribe Now 
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    15% Offer On All Rides
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    All Vehicles Available
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    3 Accounts
                  </li>
                </ul>
              </div>

              {/* <!-- Third Product --> */}
              <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id="product3"
                    className="text-lg font-semibold leading-8 text-white"
                  >
                    Legend
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  Product details for Legend
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                  ₹ 2500 / Month
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-300"></span>
                </p>
                <a
                  
                  aria-describedby="product3"
                  onClick={makeRequest}
                  className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Subscribe Now
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Self Driveable Cars
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    25% Offer on All Rides
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Personalized Support. Always available.
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    4 Accounts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
