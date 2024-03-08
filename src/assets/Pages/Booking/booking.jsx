import { React, useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
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

function Booking() {
  const [selected, setSelected] = useState(location[0]);
  const [selected1, setSelected1] = useState(location[1]);
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
      <section className="bck h-auto w-full py-10">
        <div className="text-center font-extrabold text-5xl text-slate-800 pb-16">
          <h1>Book Your Trip</h1>
        </div>
        <div className="mx-auto border-8 border-blue-300 rounded-3xl h-auto w-2/3 backdrop-blur-lg">
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-3">
            <div className="md:pl-2 pl-0 hover:z-10 z-0">
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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
            
            <div>
              <Combobox value={selected1} onChange={setSelected1}>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
