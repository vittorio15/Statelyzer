"use client"

import InputTable from './InputTable';
import Guide from './Guide';
import { useState, useEffect } from 'react';

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [calculatedData, setCalculatedData] = useState(null);
  const [generatedText, setGeneratedText] = useState("");

    // Simulate loading effect
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []); 

  const handleGenerate = (inputValues) => {
    setIsLoading(true);

    // Simulate calculations and text generation
    setTimeout(() => {
      // Perform calculations
      const calculationResult = calculateResults(inputValues);

      // Generate text based on the results
      const textResult = generateText(calculationResult);

      // Update states with results
      setCalculatedData(calculationResult);
      setGeneratedText(textResult);

      setIsLoading(false);
    }, 2000);
  };

  const calculateResults = (inputValues) => {
    // Example calculation: Revenue to Net Income ratio
    const revenue = parseFloat(inputValues["Revenue"] || 0);
    const netIncome = parseFloat(inputValues["Net Income"] || 0);

    return {
      revenueToNetIncome: netIncome !== 0 ? (revenue / netIncome).toFixed(2) : "N/A",
    };
  };

  const generateText = (results) => {
    if (results.revenueToNetIncome === "N/A") {
      return "We couldn't calculate the Revenue to Net Income ratio.";
    }
    return `The Revenue to Net Income ratio is ${results.revenueToNetIncome}.`;
  };

  return (
    <div className="flex justify-between mt-10 p-6">
      {/* Left side (InputTable or Results) */}
      <div className="w-8/12">
        <InputTable onGenerate={handleGenerate} isLoading={isLoading} calculatedData={calculatedData} />
      </div>

      {/* Right side (Guide or Generated Text) */}
      <div className="w-4/12 ml-4">
        <Guide isLoading={isLoading} generatedText={generatedText} />
      </div>
    </div>
  );
};

export default MainLayout;
