import React from "react";
import CardBackground from "../../components/CardBackground";
import { CiCreditCard1 } from "react-icons/ci";
import { SlPaypal } from "react-icons/sl";
import { LuBadgeDollarSign } from "react-icons/lu";

const RecentTransactions = () => {
  return (
    <div>
      <h1 className="py-2 primaryColor2 text-xl font-semibold">
        Recent Transaction
      </h1>
      <CardBackground>
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-center">
            <span className="flex space-x-3 items-center">
              <CiCreditCard1 className="w-12 h-12 rounded-full p-2 bg-[#FFF5D9] text-[#FFBB38] text-3xl" />
              <aside>
                <h1 className="text-lg">Deposit from my ...</h1>
                <p className="text-sm text-gray-400">28 January 2021</p>
              </aside>
            </span>
            <span>
              <p className="text-red-500">-$850</p>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex space-x-3 items-center">
              <SlPaypal className="w-12 h-12 rounded-full p-2 bg-[#E7EDFF] text-[#471EE8] text-3xl" />
              <aside>
                <h1 className="text-lg">Deposit Paypal</h1>
                <p className="text-sm text-gray-400">25 January 2021</p>
              </aside>
            </span>
            <span>
              <p className="text-green-400 ">+$2500</p>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex space-x-3 items-center">
              <LuBadgeDollarSign className="w-12 h-12 rounded-full p-2 bg-[#DCFAF8] text-[#16DBCC] text-3xl" />
              <aside>
                <h1 className="text-lg">Jemi Wilson</h1>
                <p className="text-sm text-gray-400">21 January 2021</p>
              </aside>
            </span>
            <span>
              <p className="text-green-400">+$5400</p>
            </span>
          </div>
        </div>
      </CardBackground>
    </div>
  );
};

export default RecentTransactions;
