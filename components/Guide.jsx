const Guide = ({ isLoading, calculatedData }) => {
  const renderLoading = () => {
    const widths = [
      "w-3/4",
      "w-1/2",
      "w-2/3",
      "w-4/5",
      "w-3/5",
    ];

    const skeletonDivs = widths.map((width, index) => (
      <div
        key={index}
        className={`my-2 h-12 bg-gray-200 rounded-2xl ${width}`}
      ></div>
    ));

    return (
      <div className="pb-2 ml-10 rounded-2xl px-4">
        <div className="my-2 p-6 bg-gray-100 rounded-lg w-full h-auto shadow-2xl border-4 rounded-xl border-lime-400 mr-10 animate-pulse flex flex-col items-center">
          {skeletonDivs}
        </div>
      </div>
    );
  };

  const renderResults = () => (
    <div>
      <div className="my-2 p-6 bg-gray-100 rounded-lg shadow-2xl border-4 rounded-xl border-lime-400 mr-10">
        <h3 className="text-2xl font-bold mb-4 text-center pb-6">Calculation Results</h3>
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
          {
            key
              .replace(/([a-z])([A-Z])/g, "$1 $2") // split camelcasing into words
              .toLowerCase() // convert everything to lowercase
              .replace(/^./, (str) => str.toUpperCase()) // capitalize the first letter
              .split(" ") // split by spaces
              .map(word => {
                if (word === "to") {
                  return word; // leave "to" as is
                }
                if (word === "Roa" || word === "Roe") {
                  return word.toUpperCase(); // keep "ROA" and "ROE" in uppercase
                }
                return word.charAt(0).toUpperCase() + word.slice(1); // capitalize other words
              })
              .join(" ") // join back into a string
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
      <div className="my-2 px-6 py-2 bg-gray-100 rounded-lg shadow-2xl border-4 rounded-xl border-lime-400 mr-10">
        <h2 className="text-2xl font-bold text-center pt-4 pb-6">How to Use</h2>
        <p className="mb-2">1. Fill out the fields to provide data.</p>
        <p className="mb-2">2. Click on Generate.</p>
        <p className="mb-2">3. Wait for the results to display here.</p>
      </div>
    </div>
  );

  return <div>{isLoading ? renderLoading() : calculatedData ? renderResults() : renderInstructions()}</div>;
};

export default Guide;
