import React from "react";

function OptionsBox({
  label,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = "usd",
  currencyDisable = false,
}) {
  return (
    <div className=" w-72 flex flex-wrap justify-end text-right">
      <p className=" text-black font-bold text-lg mr-2 mb-2 inline-block">
        {label}
      </p>
      <select
        className=" cursor-pointer outline-none  mt-1 w-72 h-12 px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OptionsBox;
