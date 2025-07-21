import React, { useState } from "react";
import logoImg from "../assets/optimized-images/iconfinder_vector_65_09_473792 1.png";
import userImg from "../assets/optimized-images/pexels-christina-morillo-1181690 1.png";
import { GoHomeFill } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { RiBankFill } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { PiHandCoinsBold } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { SiMoneygram } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();

  let navHeader;

  const isActiveStyle = "primaryColor1";
  const notActiveStyle = "text-[#B1B1B1] font-light";

  if (location.pathname === "/") {
    navHeader = "Dashboard";
  } else {
    navHeader =
      location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
  }

  const handleToggleNav = () => {
    setToggleNav((prev) => !prev);
  };
  return (
    <main
      className={`${
        toggleNav ? "flex flex-col-reverse" : "flex flex-row"
      }  `}
    >
      {/* Mobile Screen Nav */}
      {toggleNav && (
        <div
          className={`pb-6 px-10 ${
            !toggleNav ? "lg:max-w-[250px]" : "w-full"
          } min-h-screen fixed top-20 z-10 bg-white lg:z-10`}
        >
          <section className="flex items-center space-x-1 pt-4">
            <img src={logoImg} className="max-w-16" />
            <h1 className="text-2xl text-[#343C6A] font-extrabold">
              BankDash.
            </h1>
          </section>

          <section className="pt-6 flex flex-col space-y-7">
            <span className="flex items-center space-x-5">
              <GoHomeFill className="primaryColor1 text-2xl" />
              <NavLink to="/" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">
                  Dashboard
                </p>
              </NavLink>
            </span>
            <span className="flex items-center space-x-5">
              <FaMoneyBillTrendUp className="primaryColor1 text-2xl" />
              <NavLink to="/transactions" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">
                  Transactions
                </p>
              </NavLink>
            </span>
            <span className="flex items-center space-x-5">
              <IoPerson className="primaryColor1 text-2xl" />
              <NavLink to="/accounts" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">Accounts</p>
              </NavLink>
            </span>
            <span className="flex items-center space-x-5">
              <RiBankFill className="primaryColor1 text-2xl" />
              <NavLink to="investment" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">
                  Investments
                </p>
              </NavLink>
            </span>
            <span className="flex items-center space-x-5">
              <FaRegCreditCard className="primaryColor1 text-2xl" />
              <NavLink to="/credit-card" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">
                  Credit Cards
                </p>
              </NavLink>
            </span>
            <span className="flex items-center space-x-5">
              <PiHandCoinsBold className="primaryColor1 text-2xl" />
              <NavLink to="/loans" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">Loans</p>
              </NavLink>
            </span>
            <span className="flex items-center space-x-5">
              <BsTools className="primaryColor1 text-2xl" />
              <NavLink to="/services" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">Services</p>
              </NavLink>
            </span>
            <span className="flex items-center space-x-5">
              <SiMoneygram className="primaryColor1 text-2xl" />
              <NavLink to="/privileges" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">
                  My Privileges
                </p>
              </NavLink>
            </span>
            <span className="flex items-center space-x-5">
              <IoSettingsSharp className="primaryColor1 text-2xl" />
              <NavLink to="/settings" onClick={() => setToggleNav(false)}>
                <p className="primaryColor1 text-lg cursor-pointer">Settings</p>
              </NavLink>
            </span>
          </section>
        </div>
      )}

      {/* Desktop Screen Nav */}
      <div className="fixed top-0 left-0 w-full lg:pb-6 lg:px-10 lg:min-h-screen hidden lg:block ">
        <section className="flex items-center space-x-1 min-h-22">
          <img src={logoImg} className="max-w-16" />
          <h1 className="text-2xl text-[#343C6A] font-extrabold">BankDash.</h1>
        </section>

        <section className="pt-6 flex flex-col space-y-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <GoHomeFill className="text-2xl" />

              <p className="text-lg cursor-pointer">Dashboard</p>
            </span>
          </NavLink>

          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <FaMoneyBillTrendUp className="text-2xl" />
              <p className="text-lg cursor-pointer">Transactions</p>
            </span>
          </NavLink>

          <NavLink
            to="/accounts"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <IoPerson className="text-2xl" />
              <p className="text-lg cursor-pointer">Accounts</p>
            </span>
          </NavLink>

          <NavLink
            to="investment"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <RiBankFill className="text-2xl" />
              <p className="text-lg cursor-pointer">Investments</p>
            </span>
          </NavLink>

          <NavLink
            to="/credit-card"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <FaRegCreditCard className="text-2xl" />
              <p className="text-lg cursor-pointer">Credit Cards</p>
            </span>
          </NavLink>

          <NavLink
            to="/loans"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <PiHandCoinsBold className="text-2xl" />
              <p className="text-lg cursor-pointer">Loans</p>
            </span>
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <BsTools className="text-2xl" />
              <p className="text-lg cursor-pointer">Services</p>
            </span>
          </NavLink>

          <NavLink
            to="/privileges"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <SiMoneygram className="text-2xl" />
              <p className="text-lg cursor-pointer">My Privileges</p>
            </span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? isActiveStyle : notActiveStyle
            }
          >
            <span className="flex items-center space-x-5">
              <IoSettingsSharp className="text-2xl" />
              <p className="text-lg cursor-pointer">Settings</p>
            </span>
          </NavLink>
        </section>
      </div>

      <section className="fixed top-0 lg:left-63 p-6 lg:max-h-22 w-full lg:w-[calc(100%-252px)] lg:px-8 items-center flex justify-between bg-white z-50">
        <div className="flex items-center space-x-5">
          <HiMiniBars3CenterLeft
            className="text-3xl primaryColor2 lg:hidden cursor-pointer"
            onClick={handleToggleNav}
          />
          <h1 className="text-2xl lg:text-3xl primaryColor1">{navHeader}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to="/settings">
            <IoSettingsOutline className="bg-gray-100 rounded-full text-3xl p-1" />
          </NavLink>
          <MdOutlineNotificationsActive className="text-red-500 bg-gray-100 rounded-full text-3xl p-1" />
          <img src={userImg} className="rounded-full w-8" />
        </div>
      </section>
    </main>
  );
};

export default Navbar;
