import axios from "axios";
import {
  EditorState,
  ContentState,
} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// const baseUrl = process.env.REACT_APP_PUBLIC_URL;
// const baseUrl = "https://slytherin.perintiscerita.shop/";
const baseUrl = "http://0.0.0.0:5050";

export const addMail = () => {
  return async(dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios({
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

export const addDraft = (content) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/sent",
      data: {
        status: "draft",
        subject: getState().mailState.subject,
        content: content,
        device: getState().mailState.device,
        contact_id: getState().mailState.contactId,
        group_id: getState().mailState.groupId,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async(response) => {
        dispatch({ type: "SUCCESS_ADD_DRAFT", payload: response.data });
        await localStorage.setItem("savedId",response.data.id)
        alert("Saved to draft");
      })
      .catch(() => {});
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
      .catch(() => {});
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
      .catch(() => {});
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
      .catch(() => {});
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
        dispatch({ type: "SUCCESS_GET_MAIL_DRAFT", payload: response.data, editor:EditorState.createWithContent(contentState) });

        } else {
        dispatch({ type: "SUCCESS_GET_MAIL_DRAFT", payload: response.data, editor:EditorState.createEmpty() });
      }
      })
      .catch(() => {});
  };
};

export const changeEditor = (editorState) => {
  return {  
      type: 'UPDATE_EDITOR_STATE',
      payload: editorState,
  }
}

export const deleteLocalDraft = () => {
  return () => {
    localStorage.removeItem("subject");
    localStorage.removeItem("content");
    localStorage.removeItem("group_id");
    localStorage.removeItem("created_at");
    localStorage.removeItem("send_date");
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
