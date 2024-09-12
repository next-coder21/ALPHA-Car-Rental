import React from 'react';
import logo from '../../Alpha.png';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../AppContext'; // Import the consolidated context

function Footer({ setIsAdmin }) {
  const { user } = useAppContext(); // Use the consolidated context

  return (
    <>
      <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-900 text-slate-300">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center">
              <img src={logo} alt="logo" className="h-12 w-20" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-200">ALPHA Cars</span>
            </a>
            <div className="mt-6 lg:max-w-xl">
              <p className="text-sm text-gray-400">
                Alpha Cars offers a wide range of car rental services, with a focus on providing quality and hassle-free services. We have a large inventory of car rentals available, and we specialize in providing rental cars for one-way trips. We offer optional extra services like child safety seats and insurance coverage. We also provide a discount for long-term rentals. We have an easy-to-use online booking system and 24/7 customer support.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-300">Important Links</p>
            <Link to={'/Driver/Registration'}>Become a Driver</Link>
            <a href="#">Already a Driver?</a>
            <Link to="/Admin/Dashboard" onClick={() => setIsAdmin(true)}>Admin</Link>
          </div>

          <div>
            <p className="text-base font-bold tracking-wide text-gray-500 pt-6">Contacts</p>
            <div className="flex">
              <p className="mr-1 text-gray-500">Email:</p>
              <a href="mailto:admin@AlphaCars.com" title="send email">admin@AlphaCars.com</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">© Copyright 2023 Alpha Cars. All rights reserved.</p>
          {user && (
            <p className="text-sm text-gray-600">Welcome, {user.name}!</p>
          )}
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a href="#"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                Privacy &amp; Cookies Policy
              </a>
            </li>
            <li>
              <a href="#"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
