import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox.jsx";
import OptionsBox from "./components/OptionsBox.jsx";
import "./index.css";

function App() {
  const [from, setFrom] = useState("usd");
  const [amount, setAmount] = useState();
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [sumbittedAmount, setSubmittedAmount] = useState(0);

  const currencyInfoFrom = useCurrencyInfo(from);
  const currencyInfoTo = useCurrencyInfo(to);

  const options = Object.keys(currencyInfoFrom);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setSubmittedAmount(0);
    setConvertedAmount(0);
  };

  const convert = () => {
    if (amount === "" || isNaN(amount)) return;
    setConvertedAmount(amount * currencyInfoFrom[to]);
  };
  return (
    <div className="w-full h-full flex flex-wrap justify-center">
      <header className="relative w-full h-2 bg-transparent text-white font-semibold">
        <div className="flex flex-wrap items-center justify-evenly mt-3">
          <div>
            <h1 className=" text-2xl">Quick Currency Converter</h1>
          </div>
          <div className="flex flex-row items-center text-xl gap-5 ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Sign In</a>
            </li>
            <li>
              <button className="py-1 px-3 rounded-md">Register</button>
            </li>
          </div>
        </div>
      </header>
      <div className="w-full mt-32 mb-14">
        <div className="w-10/12 h-full mx-auto border border-blue-400 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            className=" w-full"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmittedAmount(amount);
              convert();
            }}
          >
            <div>
              <div className=" mb-1 flex flex-row items-center gap-8 p-3 justify-center">
                <InputBox
                  amount={amount}
                  onAmountChange={(amount) => {
                    if (amount >= 0) {
                      setAmount(amount);
                    }
                  }}
                />
                <OptionsBox
                  label="From"
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                />

                <div className=" w-16 h-20 flex items-end justify-center">
                  <button
                    type="button"
                    className=" w-12 h-12 border-2 border-blue-600 rounded-full bg-white text-white px-2 py-2 "
                    onClick={swap}
                  >
                    <img
                      className="bg-transparent"
                      src="./src/assets/swap.webp"
                      alt=""
                    />
                  </button>
                </div>

                {/* <InputBox
                    amount={convertedAmount}
                    onAmountChange={(amount) => {
                      if (amount >= 0) {
                        setAmount(amount);
                      }
                    }}
                    amountDisable
                  /> */}
                <OptionsBox
                  label="To"
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                />
              </div>
              <div className="w-full">
                <div className="w-max ml-10">
                  <p className="flex flex-col gap-2 font-semibold">
                    <span className="text-lg">
                      {amount === "" || isNaN(amount) ? null : sumbittedAmount}{" "}
                      {from.toUpperCase()} =
                    </span>
                    <span className="text-5xl font-bold">
                      {convertedAmount} {to.toUpperCase()}
                    </span>
                    <span>
                      1 {from.toUpperCase()}={currencyInfoFrom[to]}{" "}
                      {to.toUpperCase()}
                    </span>
                    <span>
                      1 {to.toUpperCase()}={currencyInfoTo[from]}{" "}
                      {from.toUpperCase()}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-max bg-blue-600 text-white px-4 py-3 mt-6 ml-10 rounded-lg "
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <div>
        <footer className="text-lg font-semibold">
          Developed By
          <a
            className="text-red-600"
            href="https://skmuneeruddin.netlify.app"
            target="_blank"
          >
            {" "}
            Sk Muneeruddin
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
