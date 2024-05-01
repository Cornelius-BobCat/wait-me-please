const SectionCode = () => {
  return (
    <div className="flex flex-col mx-auto max-w-2xl space-y-4 font-extralight text-xl lg:text-4xl">
      <div className="flex flex-row justify-center items-stretch space-x-4">
        <div className="w-1/3 flex justify-center items-center m-2 pb-10 border-b border-b-slate-500">
          [1-99]
        </div>
        <div className="w-1/3 flex justify-center items-center m-2 pb-10 border-b border-b-slate-500">
          <div className="flex flex-col text-lg lg:text-2xl justify-center items-center">
            <div>id</div>
            <div>persona</div>
            <div>product</div>
            <div>time</div>
            <div>error</div>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center m-2 pb-10 border-b border-b-slate-500">
          [0-60]
        </div>
      </div>

      <div className="flex flex-row justify-center items-stretch space-x-4 font-extralight lg:text-lg text-sm">
        <div className="w-1/3 flex justify-center items-center m-2 ">
          Number of objects
        </div>
        <div className="w-1/3 flex justify-center items-center m-2 ">
          Type of objects
        </div>
        <div className="w-1/3 flex justify-center items-center m-2 ">
          Response delay
        </div>
      </div>
    </div>
  );
};

export default SectionCode;
