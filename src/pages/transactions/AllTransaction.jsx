import React, { useState } from "react";
import MapTransactions from "./view/MapTransactions";
import CardBackground from "../../components/CardBackground";

const AllTransaction = () => {
  const tabs = ["All Transactions", "income", "expense"];
  const [activeTab, setActiveTab] = useState("All Transactions");

  return (
    <main className="mt-3 mb-20">
      <h1 className="py-2 primaryColor2 text-2xl font-semibold">
        All Transactions
      </h1>

      {/* Recent Transaction Mobile Nav */}
      <section className="border-b-[0.5px] border-gray-300 flex justify-between md:justify-start md:space-x-24">
        {tabs.map((eachTab) =>(
            <button key={eachTab} onClick={()=>setActiveTab(eachTab)} className={`${activeTab === eachTab ? "text-[#1814F3] border-b-2 border-b-[#1814F3]" : "text-[#718EBF]"} cursor-pointer transition-all`}>
                {eachTab.slice(0,1).toUpperCase() + eachTab.slice(1)}
            </button>
        ))}
      </section>

      <section className="py-5">
          <CardBackground>
            <MapTransactions activeTab={activeTab}/>
          </CardBackground>
      </section>
    </main>
  );
};

export default AllTransaction;
