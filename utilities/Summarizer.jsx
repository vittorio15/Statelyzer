import { useEffect, useState } from 'react';

const useSummarizer = () => {
  const [summarizer, setSummarizer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    type: 'teaser',
    format: 'plain-text',
    length: 'long'
  };
  
  useEffect(() => {
    const initializeSummarizer = async () => {
      try {
        const canSummarize = await ai.summarizer.capabilities();
        let newSummarizer;

        if (canSummarize && canSummarize.available !== 'no') {
          if (canSummarize.available === 'readily') {
            newSummarizer = await ai.summarizer.create();
          } else {
            newSummarizer = await ai.summarizer.create();
            newSummarizer.addEventListener('downloadprogress', (e) => {
              console.log(e.loaded, e.total);
            });
            await newSummarizer.ready;
          }
          setSummarizer(newSummarizer);
        } else {
          setError('Summarizer is not available.');
        }
      } catch (err) {
        setError('Error initializing summarizer.');
      } finally {
        setIsLoading(false);
      }
    };

    initializeSummarizer();
  }, []);

  // Modify summarizeText to use the options
  const summarizeText = async (text) => {
    if (summarizer) {
      try {
        // Pass options along with the text
        const result = await summarizer.summarize(text, options);
        return result;
      } catch (err) {
        console.error('Error summarizing text:', err);
        return 'Failed to summarize text.';
      }
    } else {
      return 'Summarizer is not ready yet.';
    }
  };

  return { summarizeText, isLoading, error };
};

export default useSummarizer;
