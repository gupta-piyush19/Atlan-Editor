import { useReducer } from "react";
import queryContext from "./queryContext";
import queryReducer from "./queryReducer";
import data from "../../data/data.json";

const QueryState = (props) => {
  const initialQueries = [
    "SELECT * FROM Customers;",
    "SELECT * FROM Customers where customerID = 'SPLIR';",
    "SELECT * FROM Customers where shipVia = 3;",
    "SELECT * FROM Customers where employeeID = 69;",
  ];
  const initialState = {
    initialQueries,
    tableData: null,
    query: "SELECT * FROM Customer WHERE Freight not in (1,2,3,4,5);",
    modalOpen: false,
  };

  const [state, dispatch] = useReducer(queryReducer, initialState);

  const serveData = () => {
    const randNumber = parseInt(1 + Math.random() * 15);
    const res = data.slice(0, randNumber);
    dispatch({
      type: "set_table_data",
      payload: { res },
    });
  };

  const setQuery = (currQuery) => {
    dispatch({
      type: "set_query",
      payload: { currQuery },
    });
  };

  const clearData = () => {
    dispatch({
      type: "clear_data",
    });
  };

  const changeModalState = (val) => {
    dispatch({
      type: "change_modal_state",
      payload: { val },
    });
  };

  return (
    <queryContext.Provider
      value={{
        serveData,
        setQuery,
        clearData,
        changeModalState,
        queries: state.initialQueries,
        result: state.tableData,
        query: state.query,
        modalOpen: state.modalOpen,
      }}
    >
      {props.children}
    </queryContext.Provider>
  );
};

export default QueryState;
