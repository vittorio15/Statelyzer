"use client"

import InputTable from './InputTable';
import Guide from './Guide';
import Calculator from '../utilities/Calculator';
import { useState } from 'react';
import TextGenerator from '@utilities/TextGenerator';
import useSummarizer from '@utilities/Summarizer';

const MainLayout = () => {
  const { summarizeText } = useSummarizer();
  const [isLoading, setIsLoading] = useState(false);
  const [calculatedData, setCalculatedData] = useState(null);
  const [generatedText, setGeneratedText] = useState("");
  const [summarizedText, setSummarizedText] = useState("");  // New state for summarized text

    const handleGenerate = async (inputValues) => {
      setIsLoading(true);
    
      // Perform calculations and text generation synchronously
      const calculationResult = Calculator({ inputValues });
      setCalculatedData(calculationResult);
    
      const textResult = TextGenerator({ calculatedData: calculationResult });
      setGeneratedText(textResult);

      // Summarize the generated text
      const summary = await summarizeText(textResult);
      setSummarizedText(summary);  // Store summarized text
    
      setIsLoading(false);
    };
    
    const resetStates = () => {
      setCalculatedData(null);  
      setGeneratedText("");  
      setSummarizedText("");
      setIsLoading(true);   
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);       
    };

  return (
    <div className="flex justify-between mt-10 p-6">
      {/* Left side (InputTable or Results) */}
      <div className="w-8/12">
        <InputTable onGenerate={handleGenerate}  generatedText={summarizedText} isLoading={isLoading}  resetStates={resetStates}/>
      </div>

      {/* Right side (Guide or Generated Text) */}
      <div className="w-4/12 ml-4">
        <Guide isLoading={isLoading} calculatedData={calculatedData}/>
      </div>
    </div>
  );
};

export default MainLayout;
