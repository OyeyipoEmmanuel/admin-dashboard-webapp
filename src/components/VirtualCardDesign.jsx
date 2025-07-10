import chipCard from "../assets/optimized-images/Chip_Card.png";
import chipCardDark from "../assets/optimized-images/Chip_Card dark.png";
import masterCardImgDark from "../assets/optimized-images/masterCardImgDark.png";
import masterCardImg from "../assets/optimized-images/masterCardImg.png";
import { NavLink } from "react-router-dom";

const DUMMY_CARD_DETAILS = [
  {
    id: 1,
    balance: "5,756",
    name: "Eddy Cusuma",
    validity: "12/22",
    cardNo: "3778 **** **** 1234",
  },
  {
    id: 2,
    balance: "1,430",
    name: "John Doe",
    validity: "04/29",
    cardNo: "3904 **** **** 2309",
  },
];

const VirtualCardDesign = () => {
  const noOfCards = DUMMY_CARD_DETAILS.length;
  return (
    <main className="overflow-x-auto whitespace-nowrap w-full custom-scroll pb-1 lg:whitespace-normal">
      <span className="flex justify-between items-center">
        <h1 className="py-2 primaryColor2 text-2xl font-semibold">My Cards</h1>
        <NavLink to="/credit-card" className="cursor-pointer">
          <p className="primaryColor2 font-semibold cursor-pointer">See All</p>
        </NavLink>
      </span>
      <section className="flex space-x-4">
        {DUMMY_CARD_DETAILS.map((eachData) => (
          <section
            key={eachData.id}
            className={`${
              eachData.id % noOfCards === 1
                ? "cardBgColor"
                : "bg-[#f3f3f3] border-[0.5px] border-gray-200"
            } rounded-[25px] min-w-72 lg:min-w-[calc(50%-8px)] shrink-0`}
          >
            {/* Balance row */}
            <section
              className={`p-4 flex items-center justify-between ${
                eachData.id % noOfCards === 1 ? "text-white" : "text-black"
              }`}
            >
              <div className="flex flex-col">
                <h3 className="text-sm">Balance</h3>
                <p className="text-[28px]">${eachData.balance}</p>
              </div>
              <div>
                <img
                  src={eachData.id % noOfCards === 1 ? chipCard : chipCardDark}
                  className="w-10"
                />
              </div>
            </section>

            {/* Card holder name row */}
            <section
              className={`px-4 pt-6 ${
                eachData.id % noOfCards === 1 ? "text-white " : "text-black"
              } flex justify-between`}
            >
              <div>
                <h3
                  className={`text-[12px] ${
                    eachData.id % noOfCards === 1
                      ? "text-gray-300"
                      : "text-gray-500"
                  }`}
                >
                  CARD HOLDER
                </h3>
                <p className="text-lg">{eachData.name}</p>
              </div>
              <div>
                <h3
                  className={`text-[12px] ${
                    eachData.id % noOfCards === 1
                      ? "text-gray-300"
                      : "text-gray-500"
                  }`}
                >
                  VALID THRU
                </h3>
                <p className="text-lg">{eachData.validity}</p>
              </div>
            </section>

            {/* Card-No row */}
            <section
              className={`mt-4 rounded-b-[25px]  ${
                eachData.id === 1
                  ? "cardBottomBgColor text-white"
                  : "bg-[#f7f7f7] text-black border-t-[0.5px] border-gray-200"
              } p-4 flex justify-between items-center`}
            >
              <h1 className="text-xl">{eachData.cardNo}</h1>
              <img
                src={
                  eachData.id % noOfCards === 1
                    ? masterCardImg
                    : masterCardImgDark
                }
                className="w-10"
              />
            </section>
          </section>
        ))}
      </section>
    </main>
  );
};

export default VirtualCardDesign;
