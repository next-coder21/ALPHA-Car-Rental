import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useAppContext } from '../../AppContext'; // Use the consolidated context
import Logo from "../../assets/Alpha.png";
import "./modal.css";

function Navbar() {
  const { user, setUser } = useAppContext(); // Use the consolidated context
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setEnabled(!enabled);
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <nav className="h-20 w-full text-emerald-800 bg-slate-100 z-10 border-b-2 border-gray-950 dark:border-gray-50 sticky top-0">
        <div className="flex justify-between px-3">
          <div className="logo my-auto flex pt-2">
            <div>
              <img src={Logo} className="h-16" />
            </div>
            <div>
              <h3 className="text-2xl pt-3 pl-3 font-extrabold sm:visible invisible">
                <span className="text-red-700 dark:text-blue-500" onClick={handleToggle}>
                  ALPHA
                </span>{" "}
                Cars
              </h3>
            </div>
          </div>
          <div className="flex items-center">
            {!user ? (
              <Link to="/login" className="text-lg font-medium text-gray-700 hover:text-gray-900">
                Login
              </Link>
            ) : (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <img src={user.image} alt="Profile" className="h-8 w-8 rounded-full" />
                    <ChevronDownIcon className="h-5 w-5 ml-2" aria-hidden="true" />
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
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                          >
                            Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </div>
      </nav>
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          onChange={handleToggle}
        />
      </label>
    </>
  );
}

export default Navbar;
