import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function Frequentlyask() {
  return (
    <>
      <section className="bg-gray-900 p-5 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-10">
          <div className="">
            <h1 className="text-center text-2xl font-sans text-white font-bold pb-5">
              Frequently Asked Questions
            </h1>
            <div className="p-5 md:p-10 bg-slate-50 rounded-3xl">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 ">
                      <span>What cars do you have available to rent?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-purple-900 bg-purple-100 rounded-2xl">
                      We have a wide range of cars available for rental, from
                      sedans and hatchbacks to SUVs and vans. Our inventory
                      changes regularly, so it's worth checking the website
                      regularly to see what cars are available.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span> Can I leave the car at a different location?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-purple-900 bg-purple-100 rounded-2xl">
                      Yes, we have arrangements with most private parking
                      facilities across the state.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span> How do I return the car?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-purple-900 bg-purple-100 rounded-2xl">
                      You can only drop off the car at the same pick-up
                      location.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>
                        {" "}
                        Can I specify the make and model of the car I want?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-purple-900 bg-purple-100 rounded-2xl">
                      No. you can't specify the make and model of the car you
                      want. However, please note that our inventory changes
                      regularly, so it's best to be flexible when it comes to
                      choosing
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div>
            <h1 className="text-center text-2xl  text-white font-bold pb-5">
              Additional Questions
            </h1>
            <div className="p-5 md:p-10 bg-slate-50 rounded-3xl ">
              <Disclosure>
                {({ open }) => (
                  <>
                    {" "}
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 ">
                      <span> Do you provide child safety seats?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-purple-900 bg-purple-100 rounded-2xl">
                    Yes, we can provide child safety seats as an optional extra. Please note that child safety seats are only intended for children under the age of 12.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span> Can I rent a car for a one-way trip?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-purple-900 bg-purple-100 rounded-2xl">
                    Yes, we provide one-way car rentals. Please note that there is a two-way fee that is charged for this service.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Frequentlyask;
