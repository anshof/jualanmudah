import axios from "axios";
// const baseUrl = process.env.REACT_APP_PUBLIC_URL;
// const baseUrl = "https://slytherin.perintiscerita.shop/";
const baseUrl = "http://0.0.0.0:5050";

export const addMail = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");
    axios({
      method: "POST",
      url: baseUrl + "/sent",
      data: {
        user_id: getState().mail.userId,
        member_id: getState().mail.memberId,
        status: getState().mail.status,
        subject: getState().mail.subject,
        reminder: getState().mail.reminder,
        content: getState().mail.content,
        device: getState().mail.device,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_ADD_MAIL" });
      })
      .catch(() => {});
  };
};

export const addDraft = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");
    axios({
      method: "POST",
      url: baseUrl + "/sent",
      data: {
        status: getState().mail.status,
        subject: getState().mail.subject,
        content: getState().mail.content,
        device: getState().mail.device,
        contact_id: getState().mail.contactId,
        group_id: getState().mail.groupId,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_ADD_MAIL" });
      })
      .catch(() => {});
  };
};

export const deleteDraft = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios({
      method: "DELETE",
      url: baseUrl + "/sent/" + id,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_DELETE_DRAFT_MAIL", payload:id });
      })
      .catch((error) => {
        console.error("Delete draft error",error)
      });
  };
};

export const getMailList = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/sent",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({ type: "SUCCESS_GET_MAIL_LIST", payload: response.data });
      })
      .catch(() => {});
  };
};

export const getSendList = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/sent/sent-list",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({ type: "SUCCESS_GET_MAIL_SEND_LIST", payload: response.data });
      })
      .catch(() => {});
  };
};

export const getDraftList = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/sent/draft-list",

      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({ type: "SUCCESS_GET_MAIL_DRAFT_LIST", payload: response.data });
      })
      .catch(() => {});
  };
};

export const getDraft = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/sent/draft",
      data: {
        draft_id: getState().mail.draftId,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_GET_MAIL_DRAFT_LIST" });
      })
      .catch(() => {});
  };
};

export const doDraftToSend = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");
    axios({
      method: "PATCH",
      url: baseUrl + "/sent",
      data: {
        sent_id: getState().mail.sentId,
        status: getState().mail.status,
        subject: getState().mail.subject,
        reminder: getState().mail.reminder,
        content: getState().mail.content,
        device: getState().mail.device,
        contact_id: getState().mail.contactId,
        group_id: getState().mail.groupId,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_ADD_MAIL" });
      })
      .catch(() => {});
  };
};

export const changeInputMail = (e) => {
  return {
    type: "CHANGE_INPUT_MAIL",
    payload: e,
  };
};