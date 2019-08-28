import React, { Component } from "react";
import  RequestViewStatusbar  from "./RequestViewStatusbar";
import RequestViewForm from "./RequestViewForm";
import Header from './myComponents/Header';
class RequestView extends Component {
  render() {
    return (
      <div>
        <Header/>
        <RequestViewStatusbar />
        <RequestViewForm/>
      </div>
    );
  }
}

export default RequestView;
