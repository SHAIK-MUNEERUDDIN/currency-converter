import React, { useId } from "react";

function InputBox({ amount, onAmountChange, amountDisable = false }) {
  const amountInputId = useId();
  return (
    <div className="w-72">
      <label
        htmlFor={amountInputId}
        className="text-black font-bold text-lg ml-1 mb-2 inline-block"
      >
        Amount
      </label>
      <input
        id={amountInputId}
        className="mt-1 w-72 h-12 px-3 py-2 text-lg bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        inputMode="decimal"
        placeholder="0"
        disabled={amountDisable}
        value={amount}
        onChange={(e) => {
          onAmountChange && onAmountChange(e.target.value);
        }}
        aria-label="Amount input"
      />
    </div>
  );
}

export default InputBox;
