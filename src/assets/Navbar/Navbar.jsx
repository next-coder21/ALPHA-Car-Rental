import { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";
import {
  faGoogle,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/Alpha.png";

function Navbar() {
  const [loggedin, setLoggedin] = useState(false);
  const handleLogin = () => {
    setLoggedin(!loggedin);
  };
  const [enabled, setEnabled] = useState(false);

  

  const [signup, setSignup] = useState(false);
  const hadleSignup = () => {
    setSignup(!signup);
  };

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setEnabled(!enabled);
  };

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <nav className="h-20 w-full  text-emerald-800 bg-slate-100 z-10  border-b-2 border-gray-950 dark:border-gray-50 sticky top-0">
        <div className="flex justify-between px-3">
          <div className="logo my-auto flex pt-2">
            <div>
              <img src={Logo} className="h-16" />
            </div>
            <div>
              <h3 className="text-2xl pt-3 pl-3 font-extrabold sm:visible invisible">
                <span className="text-red-700 dark:text-blue-500" onClick={handleToggle}>ALPHA</span> Cars
              </h3>
            </div>
          </div>
          <div className="flex gap-5 font-semibold pt-4 py-4">
            {loggedin ? (
              <div>
      
              </div>
              
            ) : null}

            <Fragment>
              {!loggedin ? (
                <Link
                  className="rounded-lg bg-indigo-600 text-white px-3 text-middle font-semibold text-md leading-tight shadow-md hover:bg-indigo-700 pt-2"
                  onClick={() => setOpen(true)}
                >
                  Login
                </Link>
              ) : null}
              {loggedin ? (
                <div>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://ucarecdn.com/ce49a2d7-2a4e-4c6d-a80f-4b588af8ac6a/DSC_1061.JPG" alt="Bordered avatar"/>
                        
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <EditActiveIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <EditInactiveIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                Edit Profile
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <DuplicateActiveIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <DuplicateInactiveIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                Plans
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <ArchiveActiveIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <ArchiveInactiveIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                Booking Details
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <MoveActiveIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MoveInactiveIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                Support
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={handleLogin}
                              >
                                {active ? (
                                  <DeleteActiveIcon
                                    className="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <DeleteInactiveIcon
                                    className="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                  />
                                )}
                                Logout
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  

                 
                </div>
              ) : null}
            </Fragment>
          </div>
        </div>
      </nav>
      <label className="relative   cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          onChange={handleToggle}
        />
      </label>
      {!signup ? (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-96 w-full">
                    <div className="bg-white px-4 pb-4 pt-2 sm:p-2 sm:pb-4">
                      <div className="mt-3   sm:ml-1 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-xl text-center font-semibold leading-6 text-gray-900"
                        >
                          Login
                        </Dialog.Title>
                        <h2 className="text-gray-800 text-center pt-3">
                          Social Login
                        </h2>
                        <div className="flex justify-evenly  text-center  pt-4">
                          <div className="text-blue-500 hover:text-blue-700 h-10 w-10 border-red-2 rounded-xl mod">
                            <FontAwesomeIcon icon={faGoogle} />
                          </div>
                          <div className="text-blue-500 hover:text-blue-700 h-10 w-10 border-red-2 rounded-xl">
                            <FontAwesomeIcon icon={faXTwitter} />
                          </div>
                          <div className="text-blue-500 hover:text-blue-700 h-10 w-10 border-red-2 rounded-xl">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <p className="text-md text-gray-500 pb-2">
                            Use your Credentials
                          </p>
                          <div className="text-start grid gap-0">
                            <label className="text-gray-700 font-bold  ">
                              Email
                            </label>
                            <input
                              className="text-gray-700 shadow border rounded-2xl border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 "
                              type="text"
                              placeholder="email"
                            />

                            <label className="text-gray-700 font-bold pt-2">
                              Password
                            </label>
                            <input
                              className="text-gray-700 shadow border rounded-2xl  border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                              type="password"
                              placeholder="password"
                            />
                          </div>
                          <div className="flex justify-between px-3">
                            <p>
                              <Link>forgot password?</Link>
                            </p>
                            <p className="border-r-2 border-slate-900"></p>
                            <p>
                              <Link onClick={() => hadleSignup(true)}>
                                Sign Up
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false) & handleLogin(true)}
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      ) : null}

      {signup ? (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-96 w-full">
                    <div className="bg-white px-4 pb-4 pt-2 sm:p-2 sm:pb-4">
                      <div className="mt-3   sm:ml-1 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-xl text-center font-semibold leading-6 text-gray-900"
                        >
                          Signup
                        </Dialog.Title>
                        <h2 className="text-gray-800 text-center pt-3">
                          Social Signup
                        </h2>
                        <div className="flex justify-evenly  text-center  pt-4">
                          <div className="text-blue-500 hover:text-blue-700 h-10 w-10 border-red-2 rounded-xl mod">
                            <FontAwesomeIcon icon={faGoogle} />
                          </div>
                          <div className="text-blue-500 hover:text-blue-700 h-10 w-10 border-red-2 rounded-xl">
                            <FontAwesomeIcon icon={faXTwitter} />
                          </div>
                          <div className="text-blue-500 hover:text-blue-700 h-10 w-10 border-red-2 rounded-xl">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <p className="text-md text-gray-500 pb-2">
                            Use your Credentials
                          </p>
                          <div className="text-start grid gap-0">
                            <label className="text-gray-700 font-bold  ">
                              Name
                            </label>
                            <input
                              className="text-gray-700 shadow border rounded-2xl border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 "
                              type="text"
                              placeholder="name"
                            />
                            <label className="text-gray-700 font-bold  ">
                              Email
                            </label>
                            <input
                              className="text-gray-700 shadow border rounded-2xl border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 "
                              type="text"
                              placeholder="email"
                            />

                            <label className="text-gray-700 font-bold pt-2">
                              Password
                            </label>
                            <input
                              className="text-gray-700 shadow border rounded-2xl  border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                              type="password"
                              placeholder="password"
                            />
                          </div>
                          <div className=" px-3">
                            <p className="border-r-2 border-slate-900 pr-3"></p>
                            <p>
                              Already have a account ?
                              <Link
                                className="pl-3 text-blue-500 hover:text-teal-400"
                                onClick={() => hadleSignup(false)}
                              >
                                Log in
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false) & handleLogin(true)}
                      >
                        Sign up
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      ) : null}
    </>
  );
}
function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

export default Navbar;
