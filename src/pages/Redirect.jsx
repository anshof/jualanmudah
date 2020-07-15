import React, { Component } from "react";
import { connect } from "react-redux";
import {getClickTrack} from "../stores/actions/mailAction"
class Redirect extends Component {
  componentDidMount = async () => {
    let params = await this.props.match.params.links
    params = await params.split("-",3)
    await this.props.getClickTrack(params[0], params[1])
    window.location.assign("https://"+params[2])
  };
  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = {
  getClickTrack
};
export default connect(mapStateToProps, mapDispatchToProps)(Redirect);
