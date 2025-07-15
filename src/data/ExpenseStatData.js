const expenseTransactions = [
  {
    id: 1,
    desc: "Netflix subscription",
    category: "Entertainment",
    amount: 15,
  },
  { id: 2, desc: "Electricity bill", category: "Utilities", amount: 120 },
  { id: 3, desc: "Stock purchase", category: "Investment", amount: 500 },
  { id: 4, desc: "Gift for friend", category: "Others", amount: 50 },
  { id: 5, desc: "Spotify Premium", category: "Entertainment", amount: 10 },
  { id: 6, desc: "Water bill", category: "Utilities", amount: 30 },
  { id: 7, desc: "Mutual fund deposit", category: "Investment", amount: 250 },
  { id: 8, desc: "Charity donation", category: "Others", amount: 100 },
  { id: 9, desc: "Movie tickets", category: "Entertainment", amount: 40 },
  { id: 10, desc: "Gas bill", category: "Utilities", amount: 45 },
  { id: 11, desc: "Crypto buy", category: "Investment", amount: 700 },
  { id: 12, desc: "Book purchase", category: "Others", amount: 35 },
  { id: 13, desc: "Concert ticket", category: "Entertainment", amount: 80 },
  { id: 14, desc: "Internet bill", category: "Utilities", amount: 60 },
  { id: 15, desc: "ETF purchase", category: "Investment", amount: 300 },
  { id: 16, desc: "Car wash", category: "Others", amount: 25 },
  {
    id: 17,
    desc: "Gaming subscription",
    category: "Entertainment",
    amount: 20,
  },
  { id: 18, desc: "Phone bill", category: "Utilities", amount: 50 },
  {
    id: 19,
    desc: "Real estate investment",
    category: "Investment",
    amount: 1000,
  },
  { id: 20, desc: "Office supplies", category: "Others", amount: 45 },
  { id: 21, desc: "Theater play", category: "Entertainment", amount: 55 },
  { id: 22, desc: "Trash collection fee", category: "Utilities", amount: 15 },
  {
    id: 23,
    desc: "Stock dividends reinvestment",
    category: "Investment",
    amount: 400,
  },
  { id: 24, desc: "Pet care", category: "Others", amount: 60 },
  {
    id: 25,
    desc: "Magazine subscription",
    category: "Entertainment",
    amount: 12,
  },
  { id: 26, desc: "Heating bill", category: "Utilities", amount: 70 },
  {
    id: 27,
    desc: "Savings account deposit",
    category: "Investment",
    amount: 600,
  },
  { id: 28, desc: "Car repair", category: "Others", amount: 150 },
  { id: 29, desc: "Streaming service", category: "Entertainment", amount: 18 },
  { id: 30, desc: "Cable TV bill", category: "Utilities", amount: 65 },
];

const categoryTotal = 
  { Entertainment: 0, Utilities: 0, Investment: 0, Others: 0 }
;

for (let i = 0; i < expenseTransactions.length; i++) {
  const category = expenseTransactions[i]["category"];
  const amount = expenseTransactions[i]["amount"];

  categoryTotal[category] += amount;
}

export const pieData = Object.entries(categoryTotal).map(([name, value]) => ({
  name,
  value,
}));


