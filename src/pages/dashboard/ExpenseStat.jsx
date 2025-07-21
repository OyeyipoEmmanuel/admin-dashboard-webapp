import React from "react";
import CardBackground from "../../components/CardBackground";
import { pieData } from "../../data/ExpenseStatData";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const ExpenseStat = () => {
  const PIE_COLORS = ["#FA00FF", "#1814F3", "#343C6A", "#FC7900"];
  return (
    <main>
      <h1 className="py-2 primaryColor2 text-2xl font-semibold">
        Expense Statistics
      </h1>
      <CardBackground>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="52%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell - ${index}`}
                  fill={PIE_COLORS[index % PIE_COLORS.length]}
                />
              ))}
              <Tooltip />
              <Legend />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardBackground>
    </main>
  );
};

export default ExpenseStat;
