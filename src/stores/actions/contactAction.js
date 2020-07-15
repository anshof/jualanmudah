import axios from "axios";
const baseUrl = "https://be.jualanmudah.com";
// const baseUrl = "http://0.0.0.0:5050";

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

export const addNewEmail = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/usercontact",
      data: {
        user_id: getState().userState.bio.id,
        contact_id: 1,
        email_or_wa: getState().mailState.newContact,
        password: getState().mailState.password,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        await dispatch({ type: "SUCCESS_ADD_EMAIL", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getListEmail = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    await axios({
      method: "GET",
      url: baseUrl + "/user_contact_group/list",
      params: {
        user_group_id: 1,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({ type: "SUCCESS_GET_LIST_EMAIL", payload: response.data });
      })
      .catch(() => {});
  };
};
