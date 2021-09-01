import React from "react";
import Editor from "./Editor";
import Queries from "./Queries";
import Table from "./Table";

const Main = () => {
  return (
    <div className="flex flex-grow items-stretch">
      <div className="flex-col flex md:flex-row w-full">
        <div className="w-full flex flex-col md:w-2/5 md:h-full border-r-2 border-gray700 shadow-xl sticky">
          <Editor />
          <Queries />
        </div>
        <div className="w-full overflow-scroll md:w-3/5 px-8 ">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Main;
