import axios from "axios";
const baseUrl = "https://be.jualanmudah.com";
// const baseUrl = "http://0.0.0.0:5050";

export const doSignin = () => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: baseUrl + "/auth",
      params: {
        username: getState().userState.username,
        password: getState().userState.password,
      },
    })
      .then((response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_SIGNIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isSignin", true);
        }
      })
      .catch(() => {
        alert("Username or Password is not match!");
      });
  };
};

export const doRefershSignin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/auth/refresh",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          await dispatch({ type: "SUCCESS_SIGNIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((error) => {
        console.error("Error refresh token", error);
      });
  };
};

export const doSignup = () => {
  
  return (dispatch, getState) => {
    const data= {
      full_name: getState().userState.full_name,
      username: getState().userState.username,
      password: getState().userState.password,
      address: getState().userState.address,
      position: getState().userState.position,
    }
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })
    axios({
      method: "POST",
      url: baseUrl + "/user/leader",
      data: formData,
    })
      .then(() => {
        dispatch({ type: "SUCCESS_SIGNUP" });
        console.warn("data request : ",formData)
        alert("Success!");
      })
      .catch(() => {
        console.warn("data request : ",formData)
        alert("Make sure you fill all the data!");
      });
  };
};

export const getUserBio = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/user",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({ type: "SUCCESS_GET_USER_BIO", payload : response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const doSignupStaff = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");
    axios({
      method: "POST",
      url: baseUrl + "/user",
      params: {
        full_name: getState().userState.full_name,
        username: getState().userState.username,
        password: getState().userState.password,
        status: "staff",
        address: getState().userState.address,
        position: getState().userState.position,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_SIGNUP_STAFF" });
      })
      .catch(() => {
        alert("Make sure you fill all the data!");
      });
  };
};

export const getUserStaffs = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/user/leader",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({ type: "SUCCESS_GET_USER_STAFFS", payload: response.data });
      })
      .catch((error) => {
        console.error("Erorr get staff",error);
      });
  };
};

export const deleteUserStaff = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios({
      method: "DELETE",
      url: baseUrl + "/user/" + String(id),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_DELETE_USER_STAFF", payload:id });
      })
      .catch((error) => {
        console.error("Erorr delete staff",error);
      });
  };
};

export const doLogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isSignin");
  localStorage.removeItem("status");
  return {
    type: "SUCCESS_SIGNOUT",
  };
};

export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};
