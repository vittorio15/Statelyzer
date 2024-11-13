"use client"

import { useState, useEffect } from "react";
import InputField from "./InputField";
import Button from "./Button";

const InputTable = () => {
  const [selectedInput, setSelectedInput] = useState('type1');
  const [isLoading, setIsLoading] = useState(true);
  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const SkeletonLoader = () => (
    <div className="mt-6 w-full my-2 animate-pulse bg-gradient-to-r from-primary via-green-500 to-lime-400 shadow-2xl rounded-2xl grid place-items-center">
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-3/4"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-1/2"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-2/3"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-4/5"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-3/5"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-2/5"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-1/2"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-5/6"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-3/4"></div>
      <div className="my-2 h-12 bg-gray-200 rounded-2xl w-1/3"></div>
    </div>
  );
  

  const handleButtonClick = (inputType) => {
    setSelectedInput(inputType);
  };

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
        {isLoading ? (
          <SkeletonLoader />
        ) : 
        selectedInput === 'type1' ? (
          <table className="inputTable">
            <thead>
            </thead>
            <tbody>
              <tr>
                <td className="inputTabelLabel">Total Assets</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Current Assets</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Cash & Cash Equivalents</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>              
              <tr>
                <td className="inputTabelLabel">Total Liabilities</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Current Liabilities</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Long-Term Debt</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Shareholders' Equity</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Revenue</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel border-b-0">Net Income</td>
                <td className="numberInputtd border-b-0">
                  <InputField />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="inputTable">
            <thead>
            </thead>
            <tbody>
              <tr>
                <td className="inputTabelLabel">Total Assets</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Current Assets</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Cash & Cash Equivalents</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>              
              <tr>
                <td className="inputTabelLabel">Total Liabilities</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Current Liabilities</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Long-Term Debt</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Shareholders' Equity</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Revenue</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Net Income</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Accounts Receivable</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Long-Term Debt</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Gross Profit</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Operating Income</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">COGS</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">SG&A</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Interest Expense</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel  border-b-0">Income Tax Expense</td>
                <td className="numberInputtd  border-b-0">
                  <InputField />
                </td>
              </tr>
            </tbody>
          </table>
        )}
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
