import React from 'react';
import Login from "./containers/Login";
import AddNewMessage from "./containers/AddNewMessage";
import Sidebar from "./containers/Sidebar";
import Chat from "./containers/Chat";

const App = () => {
    return (
        <div className="app">
          <Login />
          <div className='app__chatbox'>
            <Chat/>
            <AddNewMessage/>
          </div>
          <Sidebar/>
        </div>
    );
};

export default App;