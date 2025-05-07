import React, { lazy, Suspense, useState } from 'react';
import Sidebar from './components/Sidebar';
// import { mount } from 'react_test/ReactTestApp';
// console.log(mount);


// const ReactTestLazy = lazy(() => import('react_test/ReactTestApp'));

const ReactTestLazy = lazy(() => import('./components/ReactTestApp'));

const AngularTestLazy = lazy(() => import('./components/AngularTestApp'));
const VueTestLazy = lazy(() => import('./components/VueTestApp'));

function App() {
  
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* შენი კონტენტი აქ */}
        <h1>Welcome to the dashboard</h1>
          <ReactTestLazy />
          <AngularTestLazy />
          <VueTestLazy />
        {/* </Suspense> */}
      </main>
    </div>
  );
}

export default App;
