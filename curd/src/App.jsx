import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen p-4">
      <form className="bg-zinc-300 w-60 h-40 rounded-md flex flex-col  justify-center items-center gap-5 ">
        <input type="text" placeholder="Enter Post Title..." />
        <input type="text" placeholder="Enter Post Desc" />
        <button>Create Post</button>
      </form>
    </div>
  );
};

export default App;
