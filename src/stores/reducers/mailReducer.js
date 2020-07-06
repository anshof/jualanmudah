const initialState = {
  mailSendList: [],
  mailDraftList: [],
};

export default function mailReducer(mailState = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_MAIL_SEND_LIST":
      return {
        ...mailState,
        mailSendList: action.payload,
      };
    case "SUCCESS_GET_MAIL_DRAFT_LIST":
      return {
        ...mailState,
        mailDraftList: action.payload,
      };
    case "SUCCESS_DELETE_DRAFT_MAIL":
      return {
        ...mailState,
        mailDraftList: [
          ...mailState.mailDraftList.filter(
            (item) => item.id !== action.payload
          ),
        ],
      };
    case "CHANGE_INPUT_MAIL":
      return {
        ...mailState,
        [action.payload.target.name]: action.payload.target.value,
      };
    default:
      return mailState;
  }
}
