"use client"

import { useState } from "react";
import InputField from "./InputField";

const InputTable = () => {
  const [selectedInput, setSelectedInput] = useState('type1');

  
  const handleButtonClick = (inputType) => {
    setSelectedInput(inputType);
  };

    return (
    <div className="bg-primary w-5/12 mt-20">
        <div className="flex space-x-4 justify-center mb-6">
            <button
            onClick={() => handleButtonClick('type1')}
            className={`mt-10 px-6 py-2 rounded-md ${selectedInput === 'type1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
            Type 1
            </button>
            <button
            onClick={() => handleButtonClick('type2')}
            className={`mt-10 px-6 py-2 rounded-md ${selectedInput === 'type2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
            Type 2
            </button>
        </div>
        { selectedInput === 'type1' ? (
            <table className="mb-20 min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b text-left">Field</th>
                    <th className="px-4 py-2 border-b text-left">Input</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">Name</td>
                    <td className="px-4 py-2 border-b">
                      <InputField />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Email</td>
                    <td className="px-4 py-2 border-b">
                        <InputField />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Password</td>
                    <td className="px-4 py-2 border-b">
                        <InputField />
                    </td>
                  </tr>
                </tbody>
            </table>
        ) : (
            <table className="mb-20 min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b text-left">asdasd</th>
                    <th className="px-4 py-2 border-b text-left">Input</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">Name</td>
                    <td className="px-4 py-2 border-b">
                        <InputField />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Email</td>
                    <td className="px-4 py-2 border-b">
                        <InputField />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Password</td>
                    <td className="px-4 py-2 border-b">
                        <InputField />
                    </td>
                  </tr>
                </tbody>
            </table>
        )}
    </div>
    );
  };
  
  export default InputTable;
  