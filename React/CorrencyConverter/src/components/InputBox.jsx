import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOpitons=[],
    selectCurrency="usd",
    className = "",
}) {
   
    const amountInputId=useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount} 
                    id={amountInputId}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} // we have done this because if user didnot entered anything.
                    // sometime javaScript gives valuse in form of Strings so we have to convert it into Number i.e we use Number();
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}  
                >
                    
                    {currencyOpitons.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox