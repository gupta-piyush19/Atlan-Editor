import { React, useContext } from "react";
import queryContext from "../../../context/query/queryContext";
import "react-toastify/dist/ReactToastify.min.css";

const Table = () => {
  let { result } = useContext(queryContext);
  if (result) {
    result = result.res;
  }

  return (
    result && (
      <>
        <h1 className="text-3xl font-bold my-4 uppercase text-gray-500">
          Output
        </h1>
        <table className="w-full text-center text-sm table-auto border-collapse mb-6 md:mb-0">
          <thead className="">
            <tr className="">
              <th className="">Order ID</th>
              <th className="">Customer ID</th>
              <th className="">Employee ID</th>
              <th className="">Ordered Date</th>
              <th className="">Shipped Date</th>
              <th className="">Freight</th>
              <th className="">Ship Name</th>
              <th className="">Ship Address</th>
            </tr>
          </thead>
          <tbody>
            {result &&
              result.map((row, index) => {
                return (
                  <tr className="">
                    <td className="">{row.orderID}</td>
                    <td className="">{row.customerID}</td>
                    <td className="">{row.employeeID}</td>
                    <td className="">{row.orderDate.split(" ")[0]}</td>
                    <td className="">{row.shippedDate.split(" ")[0]}</td>
                    <td className="">{row.freight}</td>
                    <td className="">{row.shipName}</td>
                    <td className="">
                      {row.shipAddress.city}, {row.shipAddress.country}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    )
  );
};

export default Table;
