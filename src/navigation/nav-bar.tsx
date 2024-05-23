import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import logo from "../assets/images/logo.svg";
import { ABOUT, CONTACT, HOME } from "../constants/page-path";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <Disclosure
      as="nav"
      className="bg-black fixed w-full z-10 bg-opacity-70 backdrop-blur-md backdrop-filter shadow-lg"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-8">
            <div className="flex justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-20 w-20" src={logo} alt="Your Company" />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    to={HOME}
                    className={`inline-flex items-center border-b-2 ${
                      pathname === "/"
                        ? "border-[#D9D9D9]"
                        : "border-transparent"
                    }  px-1 pt-1 text-xl font-medium text-primary`}
                  >
                    Home
                  </Link>
                  <Link
                    to={ABOUT}
                    className={`inline-flex items-center border-b-2 ${
                      pathname === "/about"
                        ? "border-[#D9D9D9]"
                        : "border-transparent"
                    }  px-1 pt-1 text-xl font-medium text-primary`}
                  >
                    About Us
                  </Link>
                  <Link
                    to="#"
                    className={`inline-flex items-center border-b-2 ${
                      pathname === "/catalog"
                        ? "border-[#D9D9D9]"
                        : "border-transparent"
                    }  px-1 pt-1 text-xl font-medium text-primary`}
                  >
                    Catalog
                  </Link>
                  <Link
                    to="#"
                    className={`inline-flex items-center border-b-2 ${
                      pathname === "/learn"
                        ? "border-[#D9D9D9]"
                        : "border-transparent"
                    }  px-1 pt-1 text-xl font-medium text-primary`}
                  >
                    Learn
                  </Link>
                  <Link
                    to={CONTACT}
                    className={`inline-flex items-center border-b-2 ${
                      pathname === "/contact"
                        ? "border-[#D9D9D9]"
                        : "border-transparent"
                    }  px-1 pt-1 text-xl font-medium text-primary`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative ring-1 ring-primary inline-flex items-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-base font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Book A Service
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              
              <Link
                to={HOME}
                className={`flex items-center ${
                  pathname === "/"
                    ? "bg-gray-900 rounded-md text-[#0D7711] "
                    : "border-transparent"
                } mobile:px-4 mobile:pb-2  px-1 pt-1 text-xl font-medium text-primary`}
              >
                Home
              </Link>
              <Link
                to={ABOUT}
                className={`flex items-center ${
                  pathname === "/about"
                    ? "bg-gray-900 rounded-md text-[#0D7711] "
                    : "border-transparent"
                } mobile:px-4 mobile:pb-2  px-1 pt-1 text-xl font-medium text-primary`}
              >
                About Us
              </Link>
              <Link
                to="#"
                className={`flex items-center ${
                  pathname === "/catalog"
                    ? "bg-gray-900 rounded-md text-[#0D7711] "
                    : "border-transparent"
                } mobile:px-4 mobile:pb-2  px-1 pt-1 text-xl font-medium text-primary`}
              >
                Catalog
              </Link>
              <Link
                to="#"
                className={`flex items-center ${
                  pathname === "/learn"
                    ? "bg-gray-900 rounded-md text-[#0D7711] "
                    : "border-transparent"
                } mobile:px-4 mobile:pb-2  px-1 pt-1 text-xl font-medium text-primary`}
              >
                Learn
              </Link>
              <Link
                to={CONTACT}
                className={`flex items-center ${
                  pathname === "/contact"
                    ? "bg-gray-900 rounded-md text-[#0D7711] "
                    : "border-transparent"
                } mobile:px-4 mobile:pb-2  px-1 pt-1 text-xl font-medium text-primary`}
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
