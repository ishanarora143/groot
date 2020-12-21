import React, { useState, useEffect } from "react";
import "./MainWindow.css";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";

function MainWindow(props) {
  return (
    <div className="MainWindow">
      <Header />
      <ChatWindow />
      <InputBox />
    </div>
  );
}

export default MainWindow;
