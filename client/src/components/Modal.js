import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div class="header">{props.title}</div>
        <div class="content">{props.content}</div>
        <div class="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
