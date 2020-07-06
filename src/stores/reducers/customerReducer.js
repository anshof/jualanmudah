const initialState = {
    customerList : []
  };
  
  export default function mailReducer(customerState = initialState, action) {
    switch (action.type) {
      case "SUCCESS_GET_CUSTOMER_LIST":
        return {
          ...customerState,
          customerList: action.payload
        };
      default:
        return customerState;
    }
  }
  