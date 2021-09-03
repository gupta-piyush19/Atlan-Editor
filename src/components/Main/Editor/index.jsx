import React, { useState, useContext } from "react";
import queryContext from "../../../context/query/queryContext";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/sql/sql";
import { BsPlayFill, BsTrashFill } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/erlang-dark.css";
import "codemirror/theme/isotope.css";
import "codemirror/theme/material-darker.css";

const Editor = () => {
  const { serveData, query, setQuery, clearData, changeModalState } =
    useContext(queryContext);
  const [editorTheme, setEditorTheme] = useState("monokai");
  return (
    <div className="">
      <div className="w-full h-full overflow-hidden text-base">
        <CodeMirror
          className="w-full"
          value={query}
          options={{
            mode: "sql",
            lineNumbers: true,
            theme: editorTheme,
          }}
          onChange={(editor, metadata, value) => {
            setQuery(value);
          }}
        />
        <div className="w-full h-10 flex px-7 py-2 justify-between">
          <div className="">
            <select
              className="toggle cursor-pointer border-2 border-gray-500 rounded-md"
              onChange={(e) => setEditorTheme(e.target.value)}
            >
              <option disabled>Select Theme</option>
              <option value="monokai" selected>
                Monokai
              </option>
              <option value="darcula">Darcula</option>
              <option value="dracula">Dracula</option>
              <option value="erlang-dark">Erlang Dark</option>
              <option value="isotope">Isotope</option>
              <option value="material-darker">Material Darker</option>
            </select>
          </div>
          <div className="md:hidden text-2xl cursor-pointer ">
            <RiPlayList2Fill onClick={() => changeModalState(true)} />
          </div>
          <div className="flex gap-2 items-center">
            <div
              onClick={serveData}
              className="btn border-gray-500 p-2 text-white bg-success rounded-md overflow-hidden cursor-pointer"
            >
              <BsPlayFill />
            </div>
            <div
              onClick={clearData}
              className="btn border border-gray-500 p-2 text-white bg-red-600 rounded-md overflow-hidden cursor-pointer"
            >
              <BsTrashFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
