import React from "react";
import CardBackground from "../../components/CardBackground";

const DATAS = [
  {
    id: 1,
    icon: "icon",
    header: "My Balance",
    details: "7,186",
  },
  {
    id: 2,
    icon: "icon",
    header: "Income",
    details: "7,186",
  },
  {
    id: 3,
    icon: "icon",
    header: "Expense",
    details: "3,460",
  },
  {
    id: 4,
    icon: "icon",
    header: "Total Savings",
    details: "7,920",
  },
];

const Infos = () => {
  return (
    <main className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
      {DATAS.map((each) => (
        <CardBackground key={each.id}>
          <section className="flex flex-row space-x-4 items-center">
            <div>{each.icon}</div>

            <div className="flex flex-col">
              <span className="text-[#718EBF] text-[13px]">{each.header}</span>
              <span className="font-semibold text-xl">${each.details}</span>
            </div>
          </section>
        </CardBackground>
      ))}
    </main>
  );
};

export default Infos;
