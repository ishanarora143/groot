import React from 'react';
import './MainWindow.css';
import Header from './components/Header.js'
import ChatWindow from './components/ChatWindow.js';
import InputBox from './components/InputBox.js'

function MainWindow() {
    
    return (
        <div className="MainWindow">
            <Header />
            <ChatWindow />
            <InputBox />
        </div>
    )
}

export default MainWindow
