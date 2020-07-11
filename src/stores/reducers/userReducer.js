const initialState = {
  bio : [],
  staffs : []
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "SUCCESS_SIGNIN":
      return {
        ...userState,
      };
    case "SUCCESS_SIGNUP":
      return {
        ...userState,
      };
    case "SUCCESS_GET_USER_BIO":
      return {
        ...userState,
        bio: action.payload
      };
    case "SUCCESS_SIGNUP_STAFF":
      return {
        ...userState,
        staffs: [...userState.staffs, action.payload],
      };
      case "SUCCESS_GET_USER_STAFFS":
        return {
          ...userState,
          staffs: action.payload,
        };
    case "SUCCESS_SIGNOUT":
      return {
        ...userState,
      };
      case "SUCCESS_DELETE_USER_STAFF":
      return {
        ...userState,
        staffs : [...userState.staffs.filter((item) => item.id !== action.payload)]
      };
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    default:
      return userState;
  }
}
