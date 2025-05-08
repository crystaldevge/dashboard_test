import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [reactApp, setReactApp] = useState(false);
    const [angularApp, setAngularApp] = useState(false);
    const [vueApp, setVueApp] = useState(false);
    // const [show, setShow] = useState(false);


    return (
        <AppContext.Provider value={{ 
            reactApp,
            setReactApp,
            angularApp,
            setAngularApp,
            vueApp,
            setVueApp,
            setShow: (app) => {
                setReactApp(app === 'react' ? !reactApp : false);
                setAngularApp(app === 'angular' ? !angularApp : false);
                setVueApp(app === 'vue' ? !vueApp : false);
            },
        }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };