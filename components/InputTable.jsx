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
    <div className="w-full my-2 animate-pulse space-y-4 bg-gradient-to-r from-primary via-green-500 to-lime-400 shadow-2xl rounded-2xl">
      <div className="ml-2 mr-2 my-4 h-6 bg-gray-200 rounded w-1/3"></div>
      <div className="ml-2 mr-2 my-4 h-6 bg-gray-200 rounded w-1/3"></div>
      <div className="ml-2 mr-2 h-6 bg-gray-200 rounded w-full"></div>
      <div className="ml-2 mr-2 h-6 bg-gray-200 rounded w-2/3"></div>
      <div className="ml-2 mr-2 h-6 bg-gray-200 rounded w-full"></div>
      <div className="ml-2 mr-2 my-4 h-6 bg-gray-200 rounded w-1/4"></div>
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
          className={`px-6 py-2 rounded-md ${selectedInput === 'type1' ? 'bg-gradient-to-r from-primary via-green-500 to-lime-400 text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          Basic
        </button>
        <button
          onClick={() => handleButtonClick('type2')}
          className={`px-6 py-2 rounded-md ${selectedInput === 'type2' ? 'bg-gradient-to-r from-primary via-green-500 to-lime-400 text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          Advanced
        </button>
      </div>
      {selectedInput === 'type2' ? (
        <div className="bg-red-400 text-center w-8/12 ml-10 items-centre">
          <p>use Select</p>
        </div>
      ) :
        <div className="w-5/12 ml-10 invisible">
          <p>placeholder</p>
        </div>
      }
      <div className="inputContainer">
        {isLoading ? (
          // Show SkeletonLoader while loading
          <SkeletonLoader />
        ) : 
        selectedInput === 'type1' ? (
          <table className="inputTable">
            <thead>
              <tr>
                <th className="inputTabelLabel">Field</th>
                <th className="inputTabelLabel">Input</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="inputTabelLabel">Name</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Email</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel border-b-0">Password</td>
                <td className="numberInputtd border-b-0">
                  <InputField />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="inputTable">
            <thead>
              <tr>
                <th className="inputTabelLabel">asdasd</th>
                <th className="inputTabelLabel">Input</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="inputTabelLabel">Name</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel">Email</td>
                <td className="numberInputtd">
                  <InputField />
                </td>
              </tr>
              <tr>
                <td className="inputTabelLabel border-b-0">Password</td>
                <td className="numberInputtd border-b-0">
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
