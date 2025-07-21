import React from "react";
import VirtualCardDesign from "../../components/VirtualCardDesign";
import { NavLink } from "react-router-dom";
import PreviewRecentTransactions from "./PreviewRecentTransactions";
import PageLayouts from "../../components/PageLayouts";
import QuickTransfer from "./QuickTransfer";
import WeeklyActivities from "./WeeklyActivities";
import ExpenseStat from "./ExpenseStat";
import BalanceHistory from "./BalanceHistory";

const Dashboard = () => {
  return (
    <main className="flex flex-col space-y-6">
      {/* Row 1 */}
      <PageLayouts>
        <section className="col-span-2">
          <VirtualCardDesign />
        </section>

        <section className="mt-8 lg:mt-0">
          <PreviewRecentTransactions />
        </section>
      </PageLayouts>
      {/* Row 1 end */}

      {/* Row 2 */}
      <PageLayouts>
        <section className="col-span-2">
          <WeeklyActivities />
        </section>
        <section className="mt-8 lg:mt-0">
          <ExpenseStat/>
        </section>
      </PageLayouts>
      {/* Row 2 End */}

      {/* Row 3 */}
      <PageLayouts>
        <section className="mt-8 lg:mt-0">
        <QuickTransfer />
        </section>
        <section className="col-span-2">
          <BalanceHistory/>
        </section>
      </PageLayouts>
      {/* Row 3 End */}
    </main>
  );
};

export default Dashboard;
