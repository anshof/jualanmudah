import React, { Component } from "react";
import { render } from "react-dom";

import EmailEditor from "react-email-editor";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.exportHtml}>Export HTML</button>
        </div>

        <EmailEditor ref={(editor) => (this.editor = editor)} />
      </div>
    );
  }

  exportHtml = () => {
    this.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };
}
class MailBuild extends Component {
  render() {
    return render(<App />, document.getElementById("email-builder"));
  }
}
export default MailBuild;
