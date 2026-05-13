import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementBy1 = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 3);
  };

  const incrementBy5 = () => {
    setCount((prev) => prev + 5); //previous current state s value update krta hai
  };
 const DecrementBy5 = () => {
    setCount((prev) => prev - 5);
  };
  const DecrementBy1 = () => {
    if (count > 0) setCount((prev) => prev - 1);
    else alert("only positive value shows..");
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="w-[450px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 text-center shadow-2xl">
        <p className="text-gray-300 text-4xl tracking-[4px] uppercase mb-3">
          Counter App
        </p>

        <h1 className="text-7xl font-bold text-white mb-8">{count}</h1>
        <div className="flex gap-3  ">
          <button
            onClick={incrementBy1}
            className="w-full py-3 px-5 rounded-2xl text-lg font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-cyan-400
          hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            IncrementBy1
          </button>
          <button
            onClick={incrementBy5}
            className="w-full py-4  px-5 rounded-2xl text-lg font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-cyan-400
          hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            IncrementBy5
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={DecrementBy1}
            className="w-full py-4 px-5 rounded-2xl text-lg font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-cyan-400  
          hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            DecrementBy1
          </button>
          <button
            onClick={DecrementBy5}
            className="w-full py-4 rounded-2xl px-5 text-lg font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-cyan-400  
          hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            DecrementBy5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
