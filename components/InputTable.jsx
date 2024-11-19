"use client"

import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import SkeletonLoader from "../utilities/SkeletonLoader";

const inputFieldsBasic = [
  "Total Assets", "Current Assets", "Cash & Cash Equivalents", 
  "Total Liabilities", "Current Liabilities", "Long-Term Debt", 
  "Shareholders' Equity", "Revenue", "Net Income"
];

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
    return (
        <SkeletonLoader />
  )
  }

  if (generatedText) {
    return (
      <div className="w-8/12 pb-2 ml-10 rounded-2xl px-4">
        <div className="p-4 bg-gray-100 rounded-md border-4 border-white text-white bg-gradient-to-r from-lime-400 via-green-500 to-primary">
          <h3 className="text-lg font-bold mb-4 text-center">Generated Insights</h3>
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