import React from "react";
import CardBackground from "../../components/CardBackground";
import { monthlyBalanceHistory } from "../../data/BalanceHistoryData";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const BalanceHistory = () => {
  return (
    <main>
      <h1 className="py-2 primaryColor2 text-2xl font-semibold">
        Balance History
      </h1>
      <CardBackground>
        <ResponsiveContainer width="100%"  height={255}>
            <AreaChart width={500} height={400} data={monthlyBalanceHistory}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="month" tick={{fontSize: 12}}/>
                <YAxis width={30} tick={{fontSize: 12}}/>
                <Tooltip/>
                <Area type="monotone" dataKey="balance" stroke="#1814F3" strokeWidth={2} fill="#D5DFFF"/>
            </AreaChart>
        </ResponsiveContainer>
      </CardBackground>
    </main>
  );
};

export default BalanceHistory;
