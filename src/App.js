// import { ChatEngine } from 'react-chat-engine';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import  ChatFeed  from './components/ChatFeed';
// import LoginForm from './components/LoginForm';

// import "./App.css";


// // const projectID = '70e5ee67-02e0-4003-81b7-a65ea2c67e3a';

// const App = () => {

//   if (!localStorage.getItem('username')) return <LoginForm />;

//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="
//       a818df8f-2da4-4b0c-8145-44cbcc99fc29"
//       userName={localStorage.getItem('username')}
//       userSecret={localStorage.getItem('password')}
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     
//     />
//   );
// };

// export default App;


import { ChatEngine } from 'react-chat-engine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import "./App.css";

const App = () => {
  // Check if username is not in localStorage, if not, render the login form
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="0c1dd183-6473-4d70-a5b0-3b8fb9e5f6c9" 
      userName={localStorage.getItem('username')} 
      userSecret={localStorage.getItem('password')} 
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
