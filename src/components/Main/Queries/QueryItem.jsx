import React, { useContext } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import queryContext from "../../../context/query/queryContext";

const QueryItem = ({ query }) => {
  const { setQuery } = useContext(queryContext);

  return (
    <div
      onClick={() => setQuery(query)}
      className="border-t-2 border-gray800 cursor-pointer p-3 hover:border-footerCol hover:shadow-lg transition duration-150"
    >
      <div className="flex items-center px-4 gap-2">
        <div className="text-2xl text-success">
          <IoPlayCircleSharp />
        </div>
        <div className="text-lg">
          <p>
            <code>{query}</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueryItem;
