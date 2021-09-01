import React from "react";
import QueryItem from "./QueryItem";
import { useContext } from "react";
import queryContext from "../../../context/query/queryContext";
import PhoneModal from "./PhoneModal";

const Queries = () => {
  const { queries } = useContext(queryContext);
  return (
    <>
      <div className="hidden flex-col pb-2 md:flex">
        {queries.map((query, idx) => (
          <QueryItem key={idx} query={query} />
        ))}
      </div>
      <div className="">
        <PhoneModal />
      </div>
    </>
  );
};

export default Queries;
