import React from "react";
import { AppProvider } from "./context";
import Main from "./components/Main";
import  './components/MessageElement'
// import { callGithubUser } from './components/callApi';




function App() {
  
  return (
    <div>
      <AppProvider>
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;
