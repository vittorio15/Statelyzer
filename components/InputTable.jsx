"use client"

import { useState, useEffect } from "react";
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

const InputTable = () => {
  const [selectedInput, setSelectedInput] = useState('type1');
  const [isLoading, setIsLoading] = useState(true);
  const [inputValues, setInputValues] = useState({});

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);  

  const handleInputChange = (field, value) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleButtonClick = (inputType) => {
    setSelectedInput(inputType);
  };

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  const fieldsToRender =
  selectedInput === "type1" ? inputFieldsBasic : inputFieldsAdvanced;

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
        {isLoading ? (
          <SkeletonLoader />
        ) : 
        (
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
          </table>)
        }
        <div className="flex justify-center mt-7">
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => handleGenerate()}
          >
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputTable;