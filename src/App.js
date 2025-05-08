import React from "react";
import { AppProvider } from "./context";
import Main from "./components/Main";
// import { mount } from 'react_test/ReactTestApp';
// console.log(mount);

// const ReactTestLazy = lazy(() => import('react_test/ReactTestApp'));



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
