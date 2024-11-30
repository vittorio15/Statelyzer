"use client"

import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const inputFieldsBasic = [
  "Current Assets", "Inventories", "Cash and Cash Equivalents",
  "Total Assets", "Short-Term Debt", "Long-Term Debt", 
  "Total Liabilities", "Shareholder's Equity", "Net Income"
]


const InputTable = ({ onGenerate, isLoading, generatedText, resetStates }) => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (field, value) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const fieldsToRender = inputFieldsBasic

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
        <div className="p-6 bg-gray-100 rounded-2xl border-4 border-white text-white bg-gradient-to-r from-primary via-green-500 to-lime-400">
          <h3 className="text-2xl font-bold mb-4 text-center pb-6">Summary</h3>
          <div className="summary-list">
            {generatedText ? (
              generatedText
                .replace(/\*/g, '') // Remove all asterisks
                .split('\n') // Split by newlines (or any other delimiter)
                .map((item, index) => {
                  if (item.trim() !== '') {
                    const [beforeColon, afterColon] = item.split(':'); // Split the text at the colon
                    return (
                      <div key={index} className="summary-item mb-2">
                        <p className="text-lg">
                          <span className="font-semibold">•</span>{' '}
                          <span className="font-semibold">{beforeColon.trim()}:</span>{' '}
                          {afterColon && afterColon.trim()}
                        </p>
                      </div>
                    );
                  }
                })
            ) : (
              <p>Summary unavailable.</p>
            )}
          </div>
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