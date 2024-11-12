"use client"

import { useState } from "react";
import InputField from "./InputField";

const InputTable = () => {
  const [selectedInput, setSelectedInput] = useState('type1');

  const handleButtonClick = (inputType) => {
    setSelectedInput(inputType);
  };

  return (
    <div>
      <div className="flex space-x-4 justify-center ml-10 w-5/12 mt-4 mb-2">
        <button
          onClick={() => handleButtonClick('type1')}
          className={`mt-10 px-6 py-2 rounded-md ${selectedInput === 'type1' ? 'bg-gradient-to-r from-primary via-green-500 to-lime-400 text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          Basic
        </button>
        <button
          onClick={() => handleButtonClick('type2')}
          className={`mt-10 px-6 py-2 rounded-md ${selectedInput === 'type2' ? 'bg-gradient-to-r from-primary via-green-500 to-lime-400 text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          Advanced
        </button>
      </div>
      {selectedInput === 'type2' ? (
        <div className="bg-red-400 text-center w-5/12 ml-10 items-centre">
          <p>Picker place</p>
        </div>
      ) :
        <div className="w-5/12 ml-10 invisible">
          <p>placeholder</p>
        </div>
      }
      <div className="inputContainer">
        {selectedInput === 'type1' ? (
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
      </div>
    </div>
  );
};

export default InputTable;
