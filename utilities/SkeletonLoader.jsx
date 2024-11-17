const SkeletonLoader = () => {

  return(
    <div className="inputContainer">
      <div className="mt-6 w-full h-auto overflow-hidden my-2 animate-pulse bg-gradient-to-r from-primary via-green-500 to-lime-400 shadow-2xl rounded-2xl grid place-items-center">
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
    </div>
  )
};

  export default SkeletonLoader;