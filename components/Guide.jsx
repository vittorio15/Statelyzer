const Guide = ({ isLoading, calculatedData }) => {
  const renderLoading = () => (
    <div className="my-2 p-6 bg-gray-100 rounded-lg shadow-2xl border-4 rounded-xl border-lime-400 mr-10 animate-pulse">
      {[...Array(10)].map((_, idx) => (
        <div key={idx} className={`my-2 h-12 bg-gray-200 rounded-2xl w-${(idx % 5) + 1}/5`}></div>
      ))}
    </div>
  );

  const renderResults = () => (
    <div>
      <div className="my-2 p-6 bg-gray-100 rounded-lg shadow-2xl border-4 rounded-xl border-lime-400 mr-10">
        <h3 className="text-lg font-bold mb-4 text-center">Calculation Results</h3>
        {Object.entries(calculatedData).map(([key, result]) => {
        const { value, color } = result;

        const colorClass =
          color === "red"
            ? "text-red-500"
            : color === "green"
            ? "text-green-300"
            : "text-yellow-300";

        return (
          <p key={key} className="mb-2">
            {key
              .replace(/([a-z])([A-Z])/g, "$1 $2") // split camelcasing into words
              .toLowerCase() // convert everything to lowercase
              .replace(/^./, (str) => str.toUpperCase()) // capitalize the first letter
            }
            :{" "}
            <span className={colorClass}>
              {value !== null ? value.toFixed(2) : "N/A"}
            </span>{" "}
          </p>
        );
        })}
      </div>
    </div>
  );

  const renderInstructions = () => (
    <div>
      <div className="flex space-x-4 justify-center ml-10 w-8/12 mb-2 invisible">
        <p>asd</p>
        <button
          className={`px-6 py-2 rounded-md hover:scale-105`}
        >
          Basic
        </button>
      </div>
      <div className="w-5/12 ml-10 invisible">
        <p>asd</p>
      </div>
      <div className="my-2 px-6 py-2 bg-gray-100 rounded-lg shadow-2xl border-4 rounded-xl border-lime-400 mr-10">
        <h2 className="text-xl font-semibold mb-10 text-center">How to Use</h2>
        <p className="mb-2">1. Choose between Basic and Advanced options using the buttons.</p>
        <p className="mb-2">2. Fill out the fields to provide data.</p>
        <p className="mb-2">3. Click on Generate.</p>
        <p className="mb-2">4. Wait for the results to display here.</p>
      </div>
    </div>
  );

  return <div>{isLoading ? renderLoading() : calculatedData ? renderResults() : renderInstructions()}</div>;
};

export default Guide;
