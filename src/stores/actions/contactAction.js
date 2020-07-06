import axios from "axios";
// const baseUrl = process.env.REACT_APP_PUBLIC_URL;
const baseUrl = "https://slytherin.perintiscerita.shop/";

export const addContactGroup = () => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: baseUrl + "/user_contact_group",
      data: {
        name: getState().contact.userContactGroup,
      },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_ADD_CONTACT_GROUP" });
      })
      .catch(() => {});
  };
};

export const getListContactGroup = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/user_contact_group/list",
      params: {
        user_group_id: getState().contact.user_group_id,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_GET_LIST_CONTACT_GROUP" });
      })
      .catch(() => {});
  };
};

export const addContact = () => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: baseUrl + "/usercontact",
      data: {
        user_id: getState().contact.userId,
        contact_id: getState().contact.contactId,
        email_or_wa: getState().contact.contact,
      },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_ADD_CONTACT" });
      })
      .catch(() => {});
  };
};

export const getListContact = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios({
      method: "GET",
      url: baseUrl + "/usercontact/list",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_GET_LIST_CONTACT" });
      })
      .catch(() => {});
  };
};
