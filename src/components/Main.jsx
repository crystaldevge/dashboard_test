import React, { lazy, useContext } from 'react';
import Sidebar from './Sidebar';
import { AppContext } from '../context';
const ReactTestLazy = lazy(() => import("./ReactTestApp"));
const AngularTestLazy = lazy(() => import("./AngularTestApp"));
const VueTestLazy = lazy(() => import("./VueTestApp"));

const Main = () => {
    const { reactApp, angularApp, vueApp } = useContext(AppContext);
    console.log("reactApp", reactApp);
    console.log("angularApp", angularApp);  
    console.log("vueApp", vueApp);
    
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">
                <h1 style={{color: 'red'}}>Welcome to the dashboard</h1>
                {reactApp && <ReactTestLazy />}
                {angularApp && <AngularTestLazy />}
                {vueApp && <VueTestLazy />}
                {/* </Suspense> */}
            </main>
        </div>
    );
};

export default Main;