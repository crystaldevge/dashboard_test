import React from "react";
import { AppProvider } from "./context";
import Main from "./components/Main";
import  './components/MessageElement'
import { callGithubUser } from './components/callApi';




function App() {
  
 callGithubUser()
        .then(data => {
            console.log('Data from API:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

  return (
    <div>
      <AppProvider>
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;
