import React from "react";
import VirtualCardDesign from "../../components/VirtualCardDesign";
import PageLayouts from "../../components/PageLayouts";
import { NavLink } from "react-router-dom";
import MyExpenses from "./MyExpenses";

const Transactions = () => {
  return (
    <main>
      <PageLayouts>
        <section className="col-span-2">
          <VirtualCardDesign />
        </section>
        <section className="mt-6 lg:mt-0">
          <MyExpenses />
        </section>
      </PageLayouts>
      <section></section>
    </main>
  );
};

export default Transactions;
