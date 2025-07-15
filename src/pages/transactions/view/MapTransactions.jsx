import React, { useEffect, useMemo, useState } from "react";
import { ALL_TRANSACTION_DATA as data } from "../../../data/AllTransactionData";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";

const MapTransactions = ({ activeTab }) => {
  //   Function to Check the tab name so we can filter it out
  const filteredData = useMemo(() => {
    switch (activeTab) {
      case "income":
        return data.filter(({ type }) => type === "income");

      case "expense":
        return data.filter(({ type }) => type === "expense");

      default:
        return data;
    }
  }, [activeTab]);

  // To show More transactions
  const [increaseLength, setIncreaseLength] = useState(5);

  useEffect(() => {
    setIncreaseLength(5);
  }, [activeTab]);

  const handleIncreseLength = () => {
    setIncreaseLength((prev) => prev + 5);
  };

  return (
    <main className="">
      <section className="flex flex-col space-y-2 ">
        <div className="hidden md:grid grid-cols-8 gap-6 w-full mb-4">
          <p className="text-[#718EBF] col-span-2">Description</p>
          <p className="text-[#718EBF]">Transaction ID</p>
          <p className="text-[#718EBF]">Type</p>
          <p className="text-[#718EBF]">Card</p>
          <p className="text-[#718EBF]">Date</p>
          <p className="text-[#718EBF]">Amount</p>
          <p className="text-[#718EBF]">Receipt</p>
        </div>

        {/* MAP for Mobile */}

        {filteredData.slice(0, increaseLength).map((eachData) => (
          <div
            key={eachData.id}
            className="border-b border-gray-200 flex flex-row items-center justify-between pb-2 md:hidden"
          >
            <div className="flex items-center space-x-4">
              <span>
                {eachData.type === "income" ? (
                  <BsArrowUpCircle className="text-4xl text-[#718EBF]" />
                ) : (
                  <BsArrowDownCircle className="text-4xl text-[#718EBF]" />
                )}
              </span>
              <span className="flex flex-col space-y-1">
                <h1 className="text-[#232323] text-xl">{eachData.desc}</h1>
                <p className="text-[#718EBF] font-light text-sm">
                  {eachData.date}
                </p>
              </span>
            </div>

            <div>
              <h3
                className={`font-light text-lg ${
                  eachData.type === "income"
                    ? "text-[#16DBAA]"
                    : "text-[#FE5C73]"
                }`}
              >
                {eachData.type === "income" ? "+" : "-"}${eachData.amount}
              </h3>
            </div>
          </div>
        ))}

        {/* Map for desktop */}
        {filteredData.slice(0, increaseLength).map((eachData) => (
          <>
            <div
              key={eachData.id}
              className="hidden border-b border-gray-200 md:grid grid-cols-8 pgap-8 items-center justify-between pb-2"
            >
              <div className="flex items-center space-x-2 col-span-2">
                {eachData.type === "income" ? (
                  <BsArrowUpCircle className="text-xl text-[#718EBF]" />
                ) : (
                  <BsArrowDownCircle className="text-xl text-[#718EBF]" />
                )}
                <span className="flex flex-col space-y-1">
                  <h1 className="text-[#232323] text-md">{eachData.desc}</h1>
                </span>
              </div>
              <span className="text-md text-[#232323]">
                {eachData.transactionId}
              </span>
              <span className=" text-md text-[#232323] capitalize">
                {eachData.type}
              </span>
              <span className=" text-md text-[#232323]">{eachData.cardNo}</span>
              <span className=" text-md text-[#232323]">{eachData.date}</span>
              <span className=" text-md text-[#232323]">
                <h3
                  className={`font-light text-lg ${
                    eachData.type === "income"
                      ? "text-[#16DBAA]"
                      : "text-[#FE5C73]"
                  }`}
                >
                  {eachData.type === "income" ? "+" : "-"}${eachData.amount}
                </h3>
              </span>
              <button className="text-sm text-[#2D60FF] border border-[#2D60FF] px-3 py-1 rounded-full hover:bg-[#2D60FF] hover:text-white transition-all duration-200">
                Download
              </button>
            </div>
          </>
        ))}
      </section>

      <button
        className="mt-5 text-center mx-auto bg-transparent border border-[#2D60FF] px-3 py-1 rounded-full flex hover:bg-[#2D60FF] hover:text-white hover:duration-200 hover:transition-all cursor-pointer"
        onClick={handleIncreseLength}
      >
        Show More
      </button>
    </main>
  );
};

export default MapTransactions;
