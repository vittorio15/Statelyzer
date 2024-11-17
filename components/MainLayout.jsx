"use client"

import InputTable from './InputTable';
import Guide from './Guide';
import Calculator from '../utilities/Calculator';
import { useState, useEffect } from 'react';
import TextGenerator from '@utilities/TextGenerator';

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [calculatedData, setCalculatedData] = useState(null);
  const [generatedText, setGeneratedText] = useState("");

    const handleGenerate = async (inputValues) => {
      setIsLoading(true);
    
      // Perform calculations and text generation synchronously
      const calculationResult = Calculator({ inputValues });
      setCalculatedData(calculationResult);
    
      const textResult = TextGenerator({ calculatedData: calculationResult });
      setGeneratedText(textResult);
    
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    };
    
    const resetStates = () => {
      setCalculatedData(null);  
      setGeneratedText("");  
      setIsLoading(true);   
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);       
    };

  return (
    <div className="flex justify-between mt-10 p-6">
      {/* Left side (InputTable or Results) */}
      <div className="w-8/12">
        <InputTable onGenerate={handleGenerate} isLoading={isLoading} calculatedData={calculatedData} resetStates={resetStates}/>
      </div>

      {/* Right side (Guide or Generated Text) */}
      <div className="w-4/12 ml-4">
        <Guide isLoading={isLoading} generatedText={generatedText}/>
      </div>
    </div>
  );
};

export default MainLayout;
