import axios from "axios";
const baseUrl = "https://be.jualanmudah.com";
// const baseUrl = "http://0.0.0.0:5050";

export const getCustomerList = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "GET",
      url: baseUrl + "/customer/list",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        await dispatch({
          type: "SUCCESS_GET_CUSTOMER_LIST",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.warn("customer list error", error);
      });
  };
};

export const deleteGroup = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "PATCH",
      url: baseUrl + "/customer-group/" + id,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_DELETE_GROUP", payload: id });
      })
      .catch((error) => {
        console.error("Delete group error", error);
      });
  };
};

export const addCustomer = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const data = getState().customerState.customerUpload;
    for (let i = 1; i < data.length; i++) {
      console.log(data[i].data);
      await axios({
        method: "POST",
        url: baseUrl + "/customer",
        data: {
          First_name: data[i].data.First_name,
          last_name: data[i].data.last_name,
          email: data[i].data.email,
          phone: data[i].data.phone,
          bod: data[i].data.bod,
          address: data[i].data.address,
          gender: data[i].data.gender.toLowerCase(),
          company: data[i].data.company,
        },
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log("Post customer success");

          dispatch({ type: "SUCCESS_ADD_CUSTOMER", payload: response.data });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
};
export const addCustomerGroup = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/customer-group",
      data: {
        name: getState().customerState.nameGroup,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        await dispatch({
          type: "SUCCESS_ADD_CUSTOMER_GROUP",
          payload: response.data.id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getCustomerGroupList = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "GET",
      url: baseUrl + "/customer-group/list",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({
          type: "SUCCESS_GET_CUSTOMER_GROUP_LIST",
          payload: response.data,
        });
      })
      .catch(() => {});
  };
};

export const addCustomerMember = (customerId, groupId) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/customer-member",
      data: {
        customer_id: customerId,
        group_id: groupId,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        await dispatch({
          type: "SUCCESS_ADD_CUSTOMER_GROUP_MEMBER",
          payload: response.data.id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getCustomerMember = (group_id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "GET",
      url: baseUrl + "/customer-member",
      params: {
        group_id: group_id
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        dispatch({
          type: "SUCCESS_GET_CUSTOMER_MEMBER",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const uploadDataCustomer = (data) => {
  return {
    type: "SUCCES_UPLOAD_DATA",
    payload: data,
  };
};

export const changeInputCustomer = (e) => {
  return {
    type: "CHANGE_INPUT_CUSTOMER",
    payload: e,
  };
};

export const checkedCustomer = (e) => {
  if (e.target.checked) {
    return {
      type: "CHEKCBOX_CHECKED",
      payload: e,
    };
  } else {
    return {
      type: "CHEKCBOX_UNCHECKED",
      payload: e,
    };
  }
};
