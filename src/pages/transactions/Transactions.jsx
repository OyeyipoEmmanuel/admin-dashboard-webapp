import React from "react";
import VirtualCardDesign from "../../components/VirtualCardDesign";
import PageLayouts from "../../components/PageLayouts";
import { NavLink } from "react-router-dom";
import MyExpenses from "./MyExpenses";
import AllTransaction from "./AllTransaction";
import ExpenseStat from "../dashboard/ExpenseStat";

const Transactions = () => {
  return (
    <main>
      <PageLayouts>
        <section className="col-span-2">
          <VirtualCardDesign />
        </section>
        <section className="mt-6 lg:mt-0">
          <ExpenseStat/>
          
        </section>
      </PageLayouts>

      <AllTransaction/>
      <section></section>
    </main>
  );
};

export default Transactions;
