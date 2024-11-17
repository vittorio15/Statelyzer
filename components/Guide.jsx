import Button from "./Button";

const Guide = ({ isLoading, generatedText, resetStates }) => {

  return (
    <div>
      {isLoading ? (
          <div className="my-2 p-6 bg-gray-100 rounded-lg shadow-2xl border-4 rounded-xl border-lime-400 mr-10 animate-pulse">
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
      ) : generatedText ? (
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold mb-4">Generated Insights</h3>
          <p>{generatedText}</p>
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
      ) : (
        <div className="my-2 p-6 bg-gray-100 rounded-lg shadow-2xl border-4 rounded-xl border-lime-400 mr-10">
          <h2 className="text-xl font-semibold mb-10 text-center">How to Use</h2>
          <p className="mb-2">1. Choose between Basic and Advanced options using the buttons.</p>
          <p className="mb-2">2. Fill out the fields to provide data</p>
          <p className="mb-2">3. Click on generate</p>
          <p className="mb-2">4. Wait for the magic to happen</p>
        </div>
      )}
    </div>
  );
};

export default Guide;
