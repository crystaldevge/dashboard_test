import React from "react";
import { AppProvider } from "./context";
import Main from "./components/Main";
import  './components/MessageElement'

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
