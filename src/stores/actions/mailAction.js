import axios from "axios";
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const baseUrl = "https://be.jualanmudah.com";
// const baseUrl = "http://0.0.0.0:5050";

export const sendMailNow = (content, contactId) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/sent/direct",
      data: {
        status: "sent",
        send_date: "now",
        subject: getState().mailState.subject,
        content: content,
        device: "email",
        contact_id: contactId,
        group_id: getState().mailState.groupIdSelect,
        words : getState().mailState.words ? getState().mailState.words : "",
        link : getState().mailState.link ? getState().mailState.link.replace("https://","") : ""
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async () => {
        await dispatch({ type: "SUCCESS_SEND_MAIL" });
        alert("Kirim email sukses");
      })
      .catch((error) => {
        alert("Kirim sekarang error");
        console.error(error);
      });
  };
};

export const sendBuilderNow = (content) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/sent/direct",
      data: {
        status: "sent",
        send_date: "now",
        subject: "Builder",
        content: content,
        device: "email",
        contact_id: 2,
        group_id: 3,
        words : "",
        link : ""
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async () => {
        await dispatch({ type: "SUCCESS_SEND_MAIL" });
        alert("Kirim sekarang sukses");
      })
      .catch((error) => {
        alert("Kirim sekarang error");
        console.error(error);
      });
  };
};

export const sendMailScheduled = (content, contactId) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    let date = getState().mailState.sendDate.replace(/-/g, ",");
    let time = getState().mailState.sendTime.replace(/:/g, ",");
    date = date.replace(/,0/g, ",");
    if (String(time[0]) === "0") {
      time = time.slice(1).replace(/,0/g, ",");
    }
    if (String(time[3]) === "0") {
      time = time.slice(0,3) + time.slice(4)
    }
    const data = {
      status: "sent",
        send_date: date + "," + time + ",0",
        subject: getState().mailState.subject,
        content: content,
        device: "email",
        contact_id: contactId,
        group_id: getState().mailState.groupIdSelect,
        words : getState().mailState.words ? getState().mailState.words : "",
        link : getState().mailState.link ? getState().mailState.link.replace("https://","") : ""
    }
    console.log(data)
    await axios({
      method: "POST",
      url: baseUrl + "/sent/direct",
      data: {
        status: "sent",
        send_date: date + "," + time + ",0",
        subject: getState().mailState.subject,
        content: content,
        device: "email",
        contact_id: contactId,
        group_id: getState().mailState.groupIdSelect,
        words : getState().mailState.words ? getState().mailState.words : "",
        link : getState().mailState.link ? getState().mailState.link.replace("https://","") : ""
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async () => {
    alert("Pengiriman terjadwal sukses");
    dispatch({ type: "SUCCESS_SEND_MAIL" });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const addDraft = (content, contactId) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    let date
    let time
    if (getState().mailState.sendDate && getState().mailState.sendTime)
    {date = getState().mailState.sendDate.replace(/-/g, ",");
    time = getState().mailState.sendTime.replace(/:/g, ",");
    date = date.replace(/,0/g, ",");
    if (String(time[0]) === "0") {
      time = time.slice(1).replace(/,0/g, ",");
    }}
    await axios({
      method: "POST",
      url: baseUrl + "/sent",
      data: {
        status: "draft",
        send_date: getState().mailState.sendDate && getState().mailState.sendTime ? date + "," + time + ",0" : "",
        subject: getState().mailState.subject,
        content: content,
        device: "email",
        contact_id: contactId,
        group_id: getState().mailState.groupIdSelect,
        words : "",
        link : ""
        // words : getState().mailState.words ? getState().mailState.words : "",
        // link : getState().mailState.link ? getState().mailState.link.replace("https://","") : ""
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_ADD_DRAFT", payload: response.data });
        await localStorage.setItem("savedId", response.data.id);
        alert("Disimpan di draft");
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const deleteDraft = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "DELETE",
      url: baseUrl + "/sent/" + id,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch({ type: "SUCCESS_DELETE_DRAFT_MAIL", payload: id });
      })
      .catch((error) => {
        console.error("Delete draft error", error);
      });
  };
};

export const getMailList = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "GET",
      url: baseUrl + "/sent",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({ type: "SUCCESS_GET_MAIL_LIST", payload: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getSendList = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "GET",
      url: baseUrl + "/sent/sent-list",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({
          type: "SUCCESS_GET_MAIL_SEND_LIST",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getSent = (sent_id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: baseUrl + "/sent/sent-id",
      params: {
        sent_id: sent_id,
      },
    })
      .then(async (response) => {
        let rawContent = await response.data.content;
        const contentBlock = await htmlToDraft(String(rawContent));
        const contentState = await ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        if (contentState) {
          dispatch({
            type: "SUCCESS_GET_MAIL_DRAFT",
            payload: response.data,
            editor: EditorState.createWithContent(contentState),
          });
        } else {
          dispatch({
            type: "SUCCESS_GET_MAIL_DRAFT",
            payload: response.data,
            editor: EditorState.createEmpty(),
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getDraftList = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "GET",
      url: baseUrl + "/sent/draft-list",

      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch({
          type: "SUCCESS_GET_MAIL_DRAFT_LIST",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getDraft = (draftId) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: baseUrl + "/sent/draft",
      params: {
        draft_id: draftId,
      },
    })
      .then(async (response) => {
        let rawContent = await response.data.content;
        const contentBlock = await htmlToDraft(String(rawContent));
        const contentState = await ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        if (contentState) {
          dispatch({
            type: "SUCCESS_GET_MAIL_DRAFT",
            payload: response.data,
            editor: EditorState.createWithContent(contentState),
          });
        } else {
          dispatch({
            type: "SUCCESS_GET_MAIL_DRAFT",
            payload: response.data,
            editor: EditorState.createEmpty(),
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const deleteExistDraft = () => {
  return {
    type: "DELETE_EXIST_DRAFT",
  };
};

export const changeEditor = (editorState) => {
  return {
    type: "UPDATE_EDITOR_STATE",
    payload: editorState,
  };
};

export const doDraftToSend = (content, contactId) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "PATCH",
      url: baseUrl + "/sent",
      data: {
        sent_id: getState().mailState.draft.id,
        status: "sent",
        send_date: "now",
        subject: getState().mailState.subject
          ? getState().mailState.subject
          : getState().mailState.draft.subject,
        content: content,
        device: "email",
        contact_id: contactId,
        group_id: getState().mailState.groupIdSelect
          ? getState().mailState.groupIdSelect
          : getState().mailState.draft.group_id,
        words : getState().mailState.words ? getState().mailState.words : getState().mailState.draft.words,
        link : getState().mailState.link ? getState().mailState.link.replace("https://","") : getState().mailState.draft.link.replace("https://","")
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async () => {
        await alert("Kirim sekarang sukses");
        dispatch({ type: "SUCCESS_SEND_MAIL" });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const doDraftToScheduled = (content, contactId) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    let date = getState().mailState.sendDate.replace(/-/g, ",");
    let time = getState().mailState.sendTime.replace(/:/g, ",");
    date = date.replace(/,0/g, ",");
    if (String(time[0]) === "0") {
      time = time.slice(1).replace(/,0/g, ",");
    }
    await axios({
      method: "PATCH",
      url: baseUrl + "/sent",
      data: {
        sent_id: getState().mailState.draft.id,
        status: "sent",
        send_date: date + "," + time + ",0",
        subject: getState().mailState.subject
          ? getState().mailState.subject
          : getState().mailState.draft.subject,
        content: content,
        device: "email",
        contact_id: contactId,
        group_id: getState().mailState.groupIdSelect
          ? getState().mailState.groupIdSelect
          : getState().mailState.draft.group_id,
       words : getState().mailState.words ? getState().mailState.words : getState().mailState.draft.words,
        link : getState().mailState.link ? getState().mailState.link.replace("https://","") : getState().mailState.draft.link
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        alert("Kirim sekarang sukses");
        dispatch({ type: "SUCCESS_SEND_MAIL" });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getClickTrack = (sentId, customerId) => {
  return async () => {
    await axios({
      method: "GET",
      url: baseUrl + "/track/click",
      params: {
        sent_id : sentId,
        customer_id : customerId
      }
    })
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
  }
}

export const changeInputMail = (e) => {
  return {
    type: "CHANGE_INPUT_MAIL",
    payload: e,
  };
};
