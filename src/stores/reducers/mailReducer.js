const initialState = {
  mailSendList: [],
  mailDraftList: [],
  draft : "",
  contactChoice : "exist",
  editor: ""

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
      case "SUCCESS_GET_MAIL_DRAFT":
        return {
          ...mailState,
          draft: action.payload,
          editor: action.editor,
        };
        case "DELETE_EXIST_DRAFT":
          return {
            ...mailState,
            draft: "",
            editor: "",
          };
    case "SUCCESS_DELETE_DRAFT_MAIL":
      return {
        ...mailState,
        mailDraftList: [
          ...mailState.mailDraftList.filter(
            (item) => String(item.id) !== String(action.payload)
          ),
        ],
      };
      case "SUCCESS_SEND_MAIL":
        return {
          ...mailState,
        };
    case "CHANGE_INPUT_MAIL":
      return {
        ...mailState,
        [action.payload.target.name]: action.payload.target.value,
      };
      case "UPDATE_EDITOR_STATE":
        return {
          ...mailState,
          editor: action.payload,
        };
    default:
      return mailState;
  }
}
