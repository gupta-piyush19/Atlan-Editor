export default (state, action) => {
  switch (action.type) {
    case "set_table_data":
      return {
        ...state,
        tableData: action.payload,
      };
    case "set_query":
      return {
        ...state,
        query: action.payload.currQuery,
      };
    case "clear_data":
      return {
        ...state,
        query: "",
        tableData: null,
      };
    case "change_modal_state":
      return {
        ...state,
        modalOpen: action.payload.val,
      };
  }
};
