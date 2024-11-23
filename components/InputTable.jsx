"use client"

import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const inputFieldsBasic = [
  "Current Assets", "Inventories", "Cash and Cash Equivalents",
  "Total Assets", "Short-Term Debt", "Long-Term Debt", 
  "Total Liabilities", "Shareholder's Equity", "Net Income"
]


const inputFieldsAdvanced = [
  ...inputFieldsBasic, "Accounts Receivable", "Gross Profit", 
  "Operating Income", "COGS", "SG&A", "Interest Expense", "Income Tax Expense"
];

const InputTable = ({ onGenerate, isLoading, generatedText, resetStates }) => {
  const [selectedInput, setSelectedInput] = useState('type1');
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (field, value) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleButtonClick = (inputType) => {
    setSelectedInput(inputType);
  };

  const fieldsToRender =
  selectedInput === "type1" ? inputFieldsBasic : inputFieldsAdvanced;

  if (isLoading) {
    const widths = [
      "w-3/4",
      "w-1/2",
      "w-2/3",
      "w-4/5",
      "w-3/5",
      "w-2/5",
      "w-1/2",
      "w-5/6",
      "w-3/4",
      "w-1/3"
    ];

    const skeletonDivs = widths.map((width, index) => (
      <div
        key={index}
        className={`my-2 h-12 bg-gray-200 rounded-2xl ${width}`}
      ></div>
    ));

    return (
      <div className="w-8/12 pb-2 ml-10 rounded-2xl px-4">
        <div className="my-2 p-6 w-full h-auto overflow-hidden my-2 animate-pulse bg-gradient-to-r from-primary via-green-500 to-lime-400 shadow-2xl rounded-2xl flex flex-col items-center">
          {skeletonDivs}
        </div>
      </div>
    );
  }

  if (generatedText) {
    return (
      <div className="w-8/12 py-2 ml-10 rounded-2xl px-4">
        <div className="p-6 bg-gray-100 rounded-md border-4 border-white text-white bg-gradient-to-r from-lime-400 via-green-500 to-primary">
          <h3 className="text-2xl font-bold mb-4 text-center">Summary</h3>
          <p>{generatedText}</p>
        </div>
        <div className="flex justify-center mt-7">
          <Button 
          size="lg" 
          variant="secondary" 
          onClick={() => resetStates()}
          >
          Reset
          </Button>
        </div>  
      </div>
  );
  }

  return (
    <div>
      <div className="flex space-x-4 justify-center ml-10 w-8/12 mb-2">
        <button
          onClick={() => handleButtonClick('type1')}
          className={`px-6 py-2 rounded-md hover:scale-105 ${selectedInput === 'type1' ? 'bg-gradient-to-r from-primary via-green-500 to-lime-400 text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          Basic
        </button>
        <button
          onClick={() => handleButtonClick('type2')}
          className={`px-6 py-2 rounded-md hover:scale-105 ${selectedInput === 'type2' ? 'bg-gradient-to-r from-primary via-green-500 to-lime-400 text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          Advanced
        </button>
      </div>
      {selectedInput === 'type2' ? (
        <div className="bg-red-400 text-center w-8/12 ml-10 items-center">
          <p>use Select</p>
        </div>
      ) :
        <div className="w-5/12 ml-10 invisible">
          <p>placeholder</p>
        </div>
      }
      <div className="inputContainer">
          <table className="inputTable">
            <thead>
              <tr>
                <th colSpan="2" className="rounded-t-xl border-b-2 border-white bg-gradient-to-r from-primary via-green-500 to-lime-400 text-white text-2xl font-bold text-center py-6 shadow-lg">
                  Data Input
                </th>
              </tr>
            </thead>
            <tbody>
              {fieldsToRender.map((field) => (
                <tr key={field}>
                  <td className="inputTabelLabel">{field}</td>
                  <td className="numberInputtd">
                    <InputField
                      value={inputValues[field] || ""}
                      onChange={(value) => handleInputChange(field, value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        <div className="flex justify-center mt-7">
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => onGenerate(inputValues)}
          >
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputTable;