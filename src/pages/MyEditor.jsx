import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }


  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  render() {
    return (
      <div className='container'>
      <h2> Welcome to the editor</h2>
      <button onClick={this._onBoldClick.bind(this)}>Bold</button>
      <Editor 
          editorState={this.state.editorState}
          onChange={this.onChange} 
          placeholder='Make Something Great.' />
      </div>
    );
  }
}

export default MyEditor;