const initialState = {
    emailList : [],
    newEmail : {}
  };
  
  export default function contactReducer(contactState = initialState, action) {
    switch (action.type) {
      case "SUCCESS_GET_LIST_EMAIL":
        return {
          ...contactState,
          emailList: action.payload.contact,
        };
        case "SUCCESS_ADD_EMAIL":
          return {
            ...contactState,
            newEmail: action.payload,
            emailList : [...contactState.emailList, action.payload]
          };
      default:
        return contactState;
    }
  }
  