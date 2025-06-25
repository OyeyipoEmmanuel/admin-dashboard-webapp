import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./pages/transactions/Transactions";
import Accounts from "./pages/accounts/Accounts"
import Investment from "./pages/investments/Investment"
import CreditCard from "./pages/creditCard/CreditCard"
import Loans from "./pages/loans/Loans"
import Services from "./pages/services/Services"
import Privileges from "./pages/privileges/Privileges"
import Settings from "./pages/settings/Settings"


function App() {
  return (
    <div className="lg:relative w-full">
      <Navbar />
      <div className="h-screen w-full lg:max-w-[calc(100%-260px)] bg-[#F5F7FA]  lg:absolute lg:top-[5.5rem] lg:left-[260px] lg:pl-8 lg:pt-6 mt-20 pt-6 px-6 lg:mt-0 ">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/accounts" element={<Accounts/>}/>
          <Route path="/investment" element={<Investment/>}/>
          <Route path="/credit-card" element={<CreditCard/>}/>
          <Route path="/loans" element={<Loans/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/privileges" element={<Privileges/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
