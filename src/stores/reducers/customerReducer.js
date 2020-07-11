const initialState = {
  customerList: [],
  customerUpload: [],
  groupListSelect: "all",
  selectCustomerId: [],
  groupIdCreated: "",
  member: [],
};

export default function customerReducer(customerState = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_CUSTOMER_LIST":
      return {
        ...customerState,
        customerList: action.payload,
      };
    case "SUCCESS_ADD_CUSTOMER":
      return {
        ...customerState,
        customerList: [...customerState.customerList, action.payload],
      };
    case "SUCCESS_ADD_CUSTOMER_GROUP":
      return {
        ...customerState,
        groupIdCreated: action.payload,
      };
    case "SUCCESS_ADD_CUSTOMER_GROUP_MEMBER":
      return {
        ...customerState,
      };
    case "SUCCESS_GET_CUSTOMER_MEMBER":
      return {
        ...customerState,
        customerList: action.payload.anggota,
      };
    case "SUCCESS_DELETE_GROUP":
      return {
        ...customerState,
        customerGroup: [
          ...customerState.customerGroup.filter(
            (item) => String(item.id) !== String(action.payload)
          ),
        ],
      };
    case "SUCCES_UPLOAD_DATA":
      return {
        ...customerState,
        customerUpload: action.payload,
      };

    case "SUCCESS_GET_CUSTOMER_GROUP_LIST":
      return {
        ...customerState,
        customerGroup: action.payload,
      };
    case "CHANGE_INPUT_CUSTOMER":
      return {
        ...customerState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "CHEKCBOX_CHECKED":
      return {
        ...customerState,
        selectCustomerId: [
          ...customerState.selectCustomerId,
          action.payload.target.value,
        ],
      };
    case "CHEKCBOX_UNCHECKED":
      return {
        ...customerState,
        selectCustomerId: [
          ...customerState.selectCustomerId.filter(
            (item) => item !== action.payload.target.value
          ),
        ],
      };
    default:
      return customerState;
  }
}
