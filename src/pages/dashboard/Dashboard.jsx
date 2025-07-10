import React from "react";
import VirtualCardDesign from "../../components/VirtualCardDesign";
import { NavLink } from "react-router-dom";
import RecentTransactions from "./RecentTransactions";
import PageLayouts from "../../components/PageLayouts";
import QuickTransfer from "./QuickTransfer";



const Dashboard = () => {
  return (
    <main className="flex flex-col space-y-6">
      
      {/* Row 1 */}
      <PageLayouts>
        <section className="col-span-2">
          <VirtualCardDesign />
        </section>

        <section className="mt-8 lg:mt-0">
          <RecentTransactions/>
        </section>
      </PageLayouts>
      {/* Row 1 end */}

      {/* Row 2 */}
      <PageLayouts>
        <QuickTransfer/>
      </PageLayouts>
      {/* Row 2 End */}
    </main>
  );
};

export default Dashboard;
