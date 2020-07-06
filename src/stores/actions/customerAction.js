import axios from "axios";
// const baseUrl = process.env.REACT_APP_PUBLIC_URL;
// const baseUrl = "https://slytherin.perintiscerita.shop/";
const baseUrl = "http://0.0.0.0:5050";

export const getCustomerList = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    console.log(token)
    axios({
      method: "GET",
      url: baseUrl + "/customer/list",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({ type: "SUCCESS_GET_CUSTOMER_LIST", payload: response.data });
      })
      .catch((error) => {
        console.warn("customer list error", error);
      });
  };
};

export const addCustomer = () => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: baseUrl + "/customer",
      data: {
        First_name: getState().customer.First_name,
        last_name: getState().customer.last_name,
        email: getState().customer.email,
        phone: getState().customer.phone,
        bod: getState().customer.bod,
        address: getState().customer.address,
        gender: getState().customer.gender,
        company: getState().customer.company,
      },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_ADD_CUSTOMER" });
      })
      .catch(() => {});
  };
};

export const addCustomerGroup = () => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: baseUrl + "/customer-group",
      data: {
        name: getState().customer.name,
      },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_ADD_CUSTOMER_GROUP" });
      })
      .catch(() => {});
  };
};

export const getCustomerGroup = () => {
  return (dispatch, getState) => {
    const customerId = getState().customer.customerId;
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/customer-group/" + customerId,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_GET_CUSTOMER_GROUP" });
      })
      .catch(() => {});
  };
};

export const addCustomerMember = () => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: baseUrl + "/customer-member",
      data: {
        customer_id: getState().customer.customerId,
        group_id: getState().customer.groupId,
      },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_ADD_CUSTOMER_MEMBER" });
      })
      .catch(() => {});
  };
};

export const getCustomerMember = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: baseUrl + "/customer-member",
      data: {
        group_id: getState().customer.groupId,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_GET_CUSTOMER_MEMBER" });
      })
      .catch(() => {});
  };
};
