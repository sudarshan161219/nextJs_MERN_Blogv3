"use client"
import { Inter } from "next/font/google";
import React, { useReducer, createContext, useContext, useEffect } from "react";
import reducer from "./reducer";

import { TOGGLE_MOBILE_MENU, TOGGLE_THEME, IS_SERVER } from "./action"


let theme
let themeState
let parsedData

const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
    theme = localStorage.getItem("theme")
    themeState = localStorage.getItem("toggleState")
    parsedData = JSON.parse(themeState)
}



const initialState = {
    toggleMobileMenu: false,
    isServer: true,
    toggleTheme: parsedData ? parsedData : false,
    theme: theme ? theme : "light",
};


const inter = Inter({ subsets: ["latin"] });

const Context = createContext({})
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const intialLoad = () => {
        if (state.toggleTheme) {
            document.body.className = 'dark';
            localStorage.setItem("theme", "dark");
            localStorage.setItem("toggleState", true);
        } else {
            localStorage.setItem("theme", "light");
            localStorage.setItem("toggleState", false);
            document.body.className = 'light';
        }
    }


    const toggleMenu = () => {
        dispatch({ type: TOGGLE_MOBILE_MENU })
    }

    const themeFn = () => {
        if (!state.toggleTheme) {
            document.body.className = 'dark';
            localStorage.setItem("theme", "dark");
            localStorage.setItem("toggleState", true);
        } else {
            localStorage.setItem("theme", "light");
            localStorage.setItem("toggleState", false);
            document.body.className = 'light';
        }
    }



    const toggleThemefn = () => {
        dispatch({ type: TOGGLE_THEME })
        themeFn()
    }



    const isServerFn = () => {
        dispatch({ type: IS_SERVER })
    }

    useEffect(() => {
        isServerFn()
        intialLoad()
        document.body.className = state.theme === null ? "ligth" : state.theme;

        if (state.toggleTheme) {
            document.body.className = state.theme
        }
    }, [state.toggleTheme, state.theme]);

    return (
        <Context.Provider value={{ ...state, toggleMenu, toggleThemefn }} >
            {children}
        </Context.Provider>
    )

}

const useAppContext = () => {
    return useContext(Context)
}


export { ContextProvider, useAppContext, initialState };
