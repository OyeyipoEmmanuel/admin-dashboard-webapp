import React from "react";
import CardBackground from "../../components/CardBackground";
import { weeklyTransactionsData } from "../../data/WeeklyActivitiesData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const WeeklyActivities = () => {
  return (
    <main>
        <h1 className="py-2 primaryColor2 text-2xl font-semibold">Weekly Activity</h1>
      <CardBackground>
        <div className="">
        <section className="flex flex-row justify-end items-center space-x-5">
            <div className="flex space-x-1 items-center text-gray-600 font-light">
                <span className="bg-[#1814F3] w-4 h-4 rounded-full"></span>
                <p>Income</p>
            </div>
            
            <div className="flex space-x-1 items-center text-gray-600 font-light">
                <span className="bg-[#16DBCC] w-4 h-4 rounded-full"></span>
                <p>Expenses</p>
            </div>
            
        </section>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={weeklyTransactionsData}
            margin={{ top: 25, right: 3, left: 0, bottom: 5 }}
            barGap={5}
            barCategoryGap="30%"
          >
            <CartesianGrid vertical={false} horizontal={true} stroke="#F6F6F7" />
            <XAxis dataKey="date" tick={{fontSize: 13}}>
                <Label value="Days" offset={-5} position={"insideBottomLeft"}/>
            </XAxis>
            <YAxis width={30} tick={{fontSize: 12}}>
                <Label value="Amount($)" offset={-20} dx={30} position={"insideTop"}/> 
            </YAxis>
            <Tooltip />
            <Bar
              dataKey="income"
              fill="#1814F3"
              radius={[10, 10, 10, 10]}
              barSize={15}
              
            />
            <Bar
              dataKey="expense"
              fill="#16DBCC"
              radius={[10, 10, 10, 10]}
              barSize={15}
              
            />
          </BarChart>
        </ResponsiveContainer>

      </div>
      </CardBackground>
    </main>
  );
};

export default WeeklyActivities;
