import { React, useState, Fragment } from "react";
import { Combobox, Transition, Listbox } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const location = [
  { id: 1, name: "Koyambedu" },
  { id: 2, name: "Thirunagar" },
  { id: 3, name: "Vadapalani" },
  { id: 4, name: "Ashok Pillar" },
  { id: 5, name: "Ashok Nagar" },
  { id: 6, name: "Arumbakkam" },
  { id: 7, name: "Alandhur" },
  { id: 8, name: "Tambaram" },
  { id: 9, name: "EEkatuthangal" },
];

const cars = [
  { name: "Coupe" },
  { name: "Sedan" },
  { name: "Suv" },
  { name: "Hybrid" },
  { name: "Electric" },
  { name: "Microcar" },
];

function Booking() {
  const [selected, setSelected] = useState(location[0]);
  const [selected1, setSelected1] = useState(location[1]);
  const [selectedcar, setSelectedcar] = useState(cars[0]);
  const [query, setQuery] = useState("");
  const [query1, setQuery1] = useState("");

  const filteredlocation =
    query === ""
      ? location
      : location.filter((location) =>
          location.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const filtered1location =
    query1 === ""
      ? location
      : location.filter((location) =>
          location.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query1.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <>
      <section className="bck h-auto w-full py-20 md:py-28">
        <div className="text-center font-extrabold  text-slate-800 pb-16">
          <h1 className="text-5xl">Book Your Trip</h1>
          <p className="font-light text-amber-900">*site is under construction , May contain bugs.</p>
        </div>
        <div className="mx-auto border-8 p-2 border-amber-950 rounded-3xl h-auto w-2/3 backdrop-blur-lg">
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4">
            <div className="md:pl-2 pl-0 hover:z-10 z-0">
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-5 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      displayValue={(location) => location.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {filteredlocation.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredlocation.map((location) => (
                          <Combobox.Option
                            key={location.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={location}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {location.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>

            <div className="hover:z-10 z-0">
              <Combobox value={selected1} onChange={setSelected1}>
                <div className="relative mt-1 ">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-5 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      displayValue={(location) => location.name}
                      onChange={(event) => setQuery1(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery1("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {filtered1location.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filtered1location.map((location) => (
                          <Combobox.Option
                            key={location.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={location}
                          >
                            {({ selected1, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected1 ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {location.name}
                                </span>
                                {selected1 ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
            <div>
              <Listbox value={selectedcar} onChange={setSelectedcar}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-5 pl-3  pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedcar.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {cars.map((cars, carsIdx) => (
                        <Listbox.Option
                          key={carsIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={cars}
                        >
                          {({ selectedcar }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selectedcar ? "font-medium" : "font-normal"
                                }`}
                              >
                                {cars.name}
                              </span>
                              {selectedcar ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div>
              <div className="flex align-middle align-content-center pt-1">
                <input
                  x-ref="datetime"
                  type="datetime-local"
                  id="datetime"
                  data-input
                  placeholder="Date & Time"
                  className="block w-full px-2 pt-5 pb-5 md:pt-5 md:pb-4   border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="py-1 mx-auto">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4  px-10 border border-blue-700 rounded">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
